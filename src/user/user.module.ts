import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepositry } from './repo/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepositry])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
