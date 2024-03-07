// user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { UserRepository } from './user.repository';
import { User } from './entities/user.entity';
import { UserRepository } from './repo/user.repository';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  async createUser(userData: Partial<User>): Promise<User> {
    return this.userRepository.save(userData);
  }
}
