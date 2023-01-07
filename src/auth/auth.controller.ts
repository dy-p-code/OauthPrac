import { Controller, Get, Req, UseGuards, Param } from '@nestjs/common';
import { Request } from 'express';
import { KakaoAuthGuard } from './utils/Guards';

@Controller('users')
export class AuthController {
  @Get('login/kakao')
  @UseGuards(KakaoAuthGuard)
  handleLogin() {
    return { msg: 'Kakao-Talk Authentication' };
  }

  // https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code

  @Get('/login/kakao/redirect')
  @UseGuards(KakaoAuthGuard)
  handleRedirect(@Param('code') code: string) {
    console.log(code);
    return { msg: 'OK' };
  }

  @Get('status')
  user(@Req() request: Request) {
    // console.log(request.user)
    if (request.user) {
      return { msg: 'Authenticated' };
    } else {
      return { msg: 'Not Authenticated' };
    }
  }
}
