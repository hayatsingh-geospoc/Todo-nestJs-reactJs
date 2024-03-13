import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { User } from './user/entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: ['.local.env'] }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get('DATABASE_USERNAME'),
        password: configService.get('DATABASE_PASSWORD'),
        synchronize: configService.get<boolean>('DATABASE_SYNC'),
        logging: configService.get<boolean>('DATABASE_LOGGING'),
        database: configService.get('DATABASE_NAME'),
        entities: [User],
      }),
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}

// app.module.ts
// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { UserModule } from './user/user.module'; // Assuming user module is in 'user' folder

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       // TypeORM configuration
//     }),
//     UserModule,
//   ],
// })
// export class AppModule {}
