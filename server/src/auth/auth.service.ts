import {
  Injectable,
  NotFoundException,
  UnauthorizedException
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { SignInDTO } from 'src/database/dto/auth.dto'
import { UserRepository } from 'src/database/entities/user/user.repository'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService
  ) {}

  private async validatePassword({ email, password }: SignInDTO) {
    const found = await this.userRepository.findOne({ email })

    if (found) {
      const hash = await bcrypt.hash(password, found.salt)

      return hash === found.password
    } else throw new NotFoundException(`Cannot get user with email: ${email}`)
  }

  public async signIn(data: SignInDTO) {
    const isPasswordValid = await this.validatePassword(data)

    if (isPasswordValid) {
      const payload = { email: data.email }

      const accessToken = await this.jwtService.sign(payload)

      return { accessToken }
    } else throw new UnauthorizedException(`Cannot login user`)
  }
}
