import { Injectable, UnauthorizedException } from '@nestjs/common'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { AuthService } from './auth.service'
import { SignInDTO } from 'src/database/dto/auth.dto'
import { UserRepository } from 'src/database/entities/user/user.repository'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userRepository: UserRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secret'
    })
  }

  public async validate(data: SignInDTO) {
    const found = await this.userRepository.findOne({ email: data.email })

    if (found) return found
    else
      throw new UnauthorizedException(
        `Cannot login user with email: ${data.email}`
      )
  }
}
