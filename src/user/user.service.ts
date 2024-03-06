import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { User } from './entities/user.entity';
import { Constants } from 'src/utils/constants';
import { CustomRepository } from './repo/custom.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    private readonly customRepository: CustomRepository) {}


    async createUser(userData: Partial<User>): Promise<User> {
      return this.customRepository.createUser(userData);
    }

//  async createUser(createUserDto: CreateUserDto) {
//     let user: User = new User();
//     console.log(user)
//     user.email = createUserDto.email;
//     user.firstName = createUserDto.firstName;
//     user.lastName = createUserDto.lastName;
//     user.password = createUserDto.password;
//     user.role = Constants.Roles.NORMAL_ROLE;
//     return this.customRepository.save(user);
//   }

  // findAll() {
  //   return `This action returns all user`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
