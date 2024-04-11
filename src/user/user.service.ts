import { User, UserDocument } from './schema/user.schema';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    createUserDto = { ...createUserDto };
    const userCreated = await this.userModel.create(createUserDto);
    return userCreated;
  }

  // private users: User[] = [
  //   { id: 1, name: 'Gino', age: 36 },
  //   { id: 2, name: 'Jose', age: 35 },
  // ];
  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new user';
  // }

  // findAll(): User[] {
  //   return this.users;
  // }

  // findOne(id: number): User {
  //   const user = this.users.find((user) => user.id === id);
  //   if (!user) throw new NotFoundException('Este wn no esta', 'Test');
  //   return user;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
