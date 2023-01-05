import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { User } from './typeorm/entities/User';

// mysal >> create database "database_name";
@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: '',
      host: '', // Do not Upload
      port: 3306,
      username: '', // Do not Upload
      password: '', // Do not Upload
      database: 'kakao_oauth',
      entities: [User],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
