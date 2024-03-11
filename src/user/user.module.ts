// import { Module } from '@nestjs/common';
// import { UserService } from './user.service';
// import { UserController } from './user.controller';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from './entities/user.entity';
// import { UserRepository } from './repo/user.repository';
// // import { CustomRepository } from './repo/user.repository';

// @Module({
//   imports: [TypeOrmModule.forFeature([User,UserRepository])],
//   controllers: [UserController],
//   providers: [UserService],
// })
// export class UserModule {}

// user.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
