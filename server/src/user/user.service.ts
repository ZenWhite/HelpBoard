import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import {
  CreateUserEntityDTO,
  UpdateUserEntityDTO
} from 'src/database/dto/user.dto'
import { UserRepository } from 'src/database/entities/user/user.repository'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  private async __hashPassword(password: string, salt: string) {
    return await bcrypt.hash(password, salt)
  }

  public async getUsers() {
    const found = await this.userRepository.find()

    if (found) return found
  }

  public async getUser(id: string) {
    const found = await this.userRepository.findOne(id)

    if (found) return found
    else throw new NotFoundException(`Cannot get user with id: ${id}`)
  }

  public async createUser(data: CreateUserEntityDTO) {
    const salt = process.env.USER_SALT
    const hashed = await this.__hashPassword(data.password, salt)

    try {
      return await this.userRepository.save({ ...data, salt, password: hashed })
    } catch (error) {
      if (error.code === '23505')
        throw new ConflictException(
          `Cannot create user with already busy email: ${data.email}`
        )
    }
  }

  public async updateUser(id: string, data: UpdateUserEntityDTO) {
    const updated = await this.userRepository.update(id, data)

    if (updated) return await this.getUser(id)
    else throw new BadRequestException(`Cannot update user with id ${id}`)
  }

  public async deleteUser(id: string) {
    const found = await this.userRepository.findOne(id)

    if (found) await this.userRepository.delete(id)
  }
}
