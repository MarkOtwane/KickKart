import { IsNotEmpty, MinLength, Matches } from 'class-validator';

export class UpdatePasswordDto {
  @IsNotEmpty()
  token: string; // token received via email

  @MinLength(6)
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]+$/, {
    message: 'Password too weak: must contain letters and numbers',
  })
  newPassword: string;
}
