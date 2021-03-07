import { Injectable } from '@nestjs/common'
import { SignInDTO } from 'src/database/dto/auth.dto'
import { UserRepository } from 'src/database/entities/user/user.repository'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(private userRepository: UserRepository) {}

  private async validatePassword({ email, password }: SignInDTO) {
    const found = await this.userRepository.findOne({ email })

    if (found) {
      const hash = await bcrypt.hash(password, found.salt)

      return hash === found.password
    } else return false
  }

  public async signIn(data: SignInDTO) {
    const isPasswordValid = await this.validatePassword(data)

    console.log(isPasswordValid)
  }
}
