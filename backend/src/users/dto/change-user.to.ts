/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, MinLength } from 'class-validator';

export class ChangePasswordDto {
  @IsNotEmpty()
  currentPassword: string;

  @MinLength(6)
  newPassword: string;
}
