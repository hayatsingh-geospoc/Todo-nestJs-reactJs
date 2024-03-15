// // user.service.ts
// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// // import { UserRepository } from './user.repository';
// import { User } from './entities/user.entity';
// import { UserRepository } from './repo/user.repository';

// @Injectable()
// export class UserService {
//   constructor(
//     @InjectRepository(UserRepository)
//     private readonly userRepository: UserRepository,
//   ) {}

//   async createUser(userData: Partial<User>): Promise<User> {
//     return this.userRepository.save(userData);
//   }
// }

// user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { Constants } from 'src/utils/constants';
// import { User } from '../user/entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    let user: User = new User();

    user.email = createUserDto.email;
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.password = createUserDto.password;
    user.role = Constants.Roles.NORMAL_ROLE;
    return this.userRepository.save(user);
    // return this.userRepository.save(userData);
  }

  async FindAll() {
    return this.userRepository.find();
  }

  async FindUserByEmail(email: string) {
    return this.userRepository.findOneOrFail({ where: { email: email } });
  }

  async remove(id: number) {
    return this.userRepository.delete(id);
  }
}
