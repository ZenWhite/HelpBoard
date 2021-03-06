import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import {
  CreateUserEntityDTO,
  UpdateUserEntityDTO
} from 'src/database/dto/user.entity.dto'
import { UserRepository } from 'src/database/entities/user/user.repository'

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
    const created = await this.userRepository.create({ ...data })

    if (created) return created
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
