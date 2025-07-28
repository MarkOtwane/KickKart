/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsEmail } from 'class-validator';

export class ResetPasswordDto {
  @IsEmail()
  email: string;
}
