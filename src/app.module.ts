import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { User } from './typeorm/entities/User';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';

// mysal >> create database "database_name";
@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'process.env.HOST', // Do not Upload
      port: 3306,
      username: 'process.env.USER_NAME', // Do not Upload
      password: 'process.env.USER_PW', // Do not Upload
      database: 'users',
      entities: [User],
      synchronize: true,
    }),
    PassportModule.register({ session: true }),
    UserModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
