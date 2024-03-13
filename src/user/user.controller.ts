// // user.controller.ts
// import { Controller, Post, Body } from '@nestjs/common';
// import { UserService } from './user.service';
// import { User } from './entities/user.entity';
// // import { User } from './user.entity';

// @Controller('users')
// export class UserController {
//   constructor(private readonly userService: UserService) {}

//   @Post()
//   async createUser(@Body() userData: Partial<User>): Promise<User> {
//     return this.userService.createUser(userData);
//   }
// }

// user.controller.ts
import { Controller, Post, Body, ValidationPipe, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { get } from 'http';


@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body(ValidationPipe) createUserDto:CreateUserDto){
    return this.userService.createUser(createUserDto);
  }

  @Get()
  findAll(){
    return this.userService.FindAll()
  }
}
