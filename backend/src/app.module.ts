import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { PaymentsModule } from './payments/payments.module';
import { MailerModule } from './mailer/mailer.module';

@Module({
  imports: [AuthModule, UsersModule, ProductsModule, CartModule, PaymentsModule, MailerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
