/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, MinLength, Matches, IsString } from 'class-validator';

export class UpdatePasswordDto {
  @IsNotEmpty()
  token: string; // token received via email

  @IsString()
  @MinLength(6)
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]+$/, {
    message: 'Password too weak: must contain letters and numbers',
  })
  newPassword: string;
}
