import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe
} from '@nestjs/common'
import {
  CreateUserEntityDTO,
  UpdateUserEntityDTO
} from 'src/database/dto/user.entity.dto'
import { UserService } from './user.service'

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/')
  async getUsers() {
    return await this.userService.getUsers()
  }

  @Get('/:identity')
  async getUser(@Param('id') id: string) {
    return await this.userService.getUser(id)
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  async createUser(@Body() data: CreateUserEntityDTO) {
    return await this.userService.createUser(data)
  }

  @Put('/:id/update')
  @UsePipes(ValidationPipe)
  async updateUser(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() data: UpdateUserEntityDTO
  ) {
    return await this.userService.updateUser(id, data)
  }

  @Delete('/:id/delete')
  async deleteUser(@Param('id', ParseUUIDPipe) id: string) {
    return await this.userService.deleteUser(id)
  }
}
