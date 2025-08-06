/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { MailerService as NestMailerService } from '@nestjs-modules/mailer';
import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PaymentMethod, PaymentStatus } from '@prisma/client';

interface PaymentDetails {
  shippingAddress: string;
  destination: string;
  paymentMethod: PaymentMethod;
  cost: number;
}

export interface WelcomeEmailContext {
  name: string;
}

export interface ResetPasswordEmailContext {
  token: string;
}

export interface OrderCreatedEmailContext {
  payment: PaymentDetails;
}

export interface PaymentStatusUpdateEmailContext {
  status: PaymentStatus;
}

@Injectable()
export class MailerService {
  private readonly logger = new Logger(MailerService.name);
  private readonly appName: string;
  private readonly frontendUrl: string;

  constructor(
    private readonly mailer: NestMailerService,
    private readonly configService: ConfigService,
  ) {
    this.appName = this.configService.get<string>('APP_NAME') ?? 'KickKart';
    this.frontendUrl = this.configService.get<string>('FRONTEND_URL') ?? '';

    if (!this.appName || !this.frontendUrl) {
      throw new Error('APP_NAME or FRONTEND_URL environment variable missing');
    }
  }

  async sendWelcomeEmail(
    email: string,
    context: WelcomeEmailContext,
  ): Promise<void> {
    try {
      await this.mailer.sendMail({
        to: email,
        subject: `Welcome to ${this.appName} 🚀`,
        template: 'welcome',
        context: {
          ...context,
          appName: this.appName,
          currentYear: new Date().getFullYear(),
        },
      });
      this.logger.log(`✅ Welcome email sent to ${email}`);
    } catch (error) {
      this.handleEmailError(error, 'welcome', email);
    }
  }

  async sendResetPasswordEmail(
    email: string,
    context: ResetPasswordEmailContext,
  ): Promise<void> {
    try {
      const resetLink = `${this.frontendUrl}/reset-password?token=${context.token}`;

      await this.mailer.sendMail({
        to: email,
        subject: 'Reset Your Password',
        template: 'reset-password',
        context: {
          resetLink,
          appName: this.appName,
          currentYear: new Date().getFullYear(),
        },
      });
      this.logger.log(`✅ Password reset email sent to ${email}`);
    } catch (error) {
      this.handleEmailError(error, 'reset password', email);
    }
  }

  async sendPaymentStatusUpdateEmail(
    senderEmail: string,
    receiverEmail: string,
    context: PaymentStatusUpdateEmailContext,
  ): Promise<void> {
    try {
      await this.mailer.sendMail({
        to: [senderEmail, receiverEmail],
        subject: `Payment Status Updated: ${context.status}`,
        template: 'payment-status',
        context: {
          status: context.status,
          appName: this.appName,
          currentYear: new Date().getFullYear(),
        },
      });
      this.logger.log(
        `✅ Payment status email sent to ${senderEmail}, ${receiverEmail}`,
      );
    } catch (error) {
      this.handleEmailError(error, 'payment status update', [
        senderEmail,
        receiverEmail,
      ]);
    }
  }

  async sendOrderCreatedEmail(
    email: string,
    context: OrderCreatedEmailContext,
  ): Promise<void> {
    try {
      await this.mailer.sendMail({
        to: email,
        subject: `Order Confirmed – ${this.appName}`,
        template: 'order-confirmation',
        context: {
          ...context,
          appName: this.appName,
          currentYear: new Date().getFullYear(),
        },
      });
      this.logger.log(`✅ Order confirmation email sent to ${email}`);
    } catch (error) {
      this.handleEmailError(error, 'order confirmation', email);
    }
  }

  async sendCustomEmail(
    to: string | string[],
    subject: string,
    template: string,
    context: Record<string, any>,
  ): Promise<void> {
    try {
      await this.mailer.sendMail({
        to,
        subject,
        template,
        context: {
          ...context,
          appName: this.appName,
          currentYear: new Date().getFullYear(),
        },
      });
      const recipients = Array.isArray(to) ? to.join(', ') : to;
      this.logger.log(`✅ Custom email sent to ${recipients}`);
    } catch (error) {
      this.handleEmailError(error, 'custom', to);
    }
  }

  private handleEmailError(
    error: unknown,
    emailType: string,
    recipient: string | string[],
  ): void {
    const recipientStr = Array.isArray(recipient)
      ? recipient.join(', ')
      : recipient;
    const errMsg = error instanceof Error ? error.message : String(error);
    const errStack = error instanceof Error ? error.stack : undefined;

    this.logger.error(
      `❌ Failed to send ${emailType} email to ${recipientStr}: ${errMsg}`,
      errStack,
    );
    throw new InternalServerErrorException(`Failed to send ${emailType} email`);
  }
}
