import { isEmail } from 'class-validator';

export class AuthDto {
  email: String;
  password: String;
}
