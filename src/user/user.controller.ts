import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  getOne(@Param('id') kakaoId: number) {
    return this.userService.getOne(kakaoId);
  }
}
