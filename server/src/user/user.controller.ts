import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import {
  CreateUserEntityDTO,
  UpdateUserEntityDTO
} from 'src/database/dto/user.dto'
import { UserService } from './user.service'

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/')
  @UseGuards(AuthGuard())
  async getUsers() {
    return await this.userService.getUsers()
  }

  @Get('/:id')
  @UseGuards(AuthGuard())
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
  @UseGuards(AuthGuard())
  async updateUser(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() data: UpdateUserEntityDTO
  ) {
    return await this.userService.updateUser(id, data)
  }

  @Delete('/:id/delete')
  @UseGuards(AuthGuard())
  async deleteUser(@Param('id', ParseUUIDPipe) id: string) {
    return await this.userService.deleteUser(id)
  }
}
