import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, type UserTypes } from 'src/user/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserTypes>,
  ) {}
  async getAllUsers(): Promise<UserTypes[]> {
    const users = await this.userModel.find().exec();
    return users;
  }

  async getUser(userId: string): Promise<UserTypes> {
    const user = await this.userModel.findById(userId).exec();

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    return user;
  }
}
