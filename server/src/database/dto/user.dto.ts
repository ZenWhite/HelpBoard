import { IsEmail, IsNotEmpty, IsOptional, IsUUID } from 'class-validator'
import { BaseEntityDTO } from './base.dto'

export class UserEntityDTO extends BaseEntityDTO {
  name: string
  email: string
  password: string
}

export class CreateUserEntityDTO
  implements Pick<UserEntityDTO, 'name' | 'email' | 'password'> {
  @IsOptional()
  @IsNotEmpty()
  name: string

  @IsEmail()
  email: string

  @IsNotEmpty()
  password: string
}

export class UpdateUserEntityDTO
  implements Pick<UserEntityDTO, 'name' | 'email' | 'password'> {
  @IsOptional()
  @IsNotEmpty()
  name: string

  @IsOptional()
  @IsEmail()
  email: string

  @IsOptional()
  @IsNotEmpty()
  password: string
}
