import { IsEmail, IsNotEmpty } from 'class-validator'
import { UserEntityDTO } from './user.dto'

export class SignInDTO implements Pick<UserEntityDTO, 'email' | 'password'> {
  @IsEmail()
  email: string

  @IsNotEmpty()
  password: string
}
