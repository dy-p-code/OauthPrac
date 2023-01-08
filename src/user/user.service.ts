import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/typeorm/entities/User';

@Injectable()
export class UserService {
  private users: User[] = [];

  findById(userId: number): User {
    const user = this.users.find((user) => user.userId === userId);
    if (!user) {
      throw new NotFoundException(`회원 인증에 실패했습니다.`);
    }
    return user;
  }
}
