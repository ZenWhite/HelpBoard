import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import {
  CreateUserEntityDTO,
  UpdateUserEntityDTO
} from 'src/database/dto/user.entity.dto'
import { UserRepository } from 'src/database/entities/user/user.repository'
import { UsingJoinColumnOnlyOnOneSideAllowedError } from 'typeorm'

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async getUsers() {
    const found = await this.userRepository.find()

    if (found) return found
  }

  async getUser(id: string) {
    const found = await this.userRepository.findOne(id)

    if (found) return found
    else throw new NotFoundException(`Cannot get user with id: ${id}`)
  }

  async createUser(data: CreateUserEntityDTO) {
    try {
      return await this.userRepository.save(data)
    } catch (error) {
      if (error.code === '23505')
        throw new ConflictException(
          `Cannot create user with already busy email: ${data.email}`
        )
    }
  }

  async updateUser(id: string, data: UpdateUserEntityDTO) {
    const updated = await this.userRepository.update(id, data)

    if (updated) return await this.getUser(id)
    else throw new BadRequestException(`Cannot update user with id ${id}`)
  }

  async deleteUser(id: string) {
    const found = await this.userRepository.findOne(id)

    if (found) await this.userRepository.delete(id)
  }
}
