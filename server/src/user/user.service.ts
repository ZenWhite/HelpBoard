import { Injectable } from '@nestjs/common'
import { UserRepository } from 'src/database/entities/user/user.repository'

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async getUsers() {
    return await this.userRepository.find()
  }
}
