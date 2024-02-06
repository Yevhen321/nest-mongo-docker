import { Controller, Get, Param } from '@nestjs/common';
import { type UserTypes } from 'src/user/user.schema';
import { UserService } from 'src/user/user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getAllUsers(): Promise<UserTypes[]> {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUser(@Param('id') userId: string): Promise<UserTypes> {
    return this.userService.getUser(userId);
  }
}
