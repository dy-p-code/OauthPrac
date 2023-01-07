import { Injectable, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { User } from 'src/typeorm/entities/User';

@Injectable()
export class UserService {
  private users: User[] = [];

  getOne(id: number): User {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException(`아이디를 찾을 수 없습니다.`);
    }
    return user;
  }
}
