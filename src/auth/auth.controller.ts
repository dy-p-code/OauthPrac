import { Controller, Get, UseGuards } from '@nestjs/common';
import { KakaoAuthGuard } from './utils/Guards';
@Controller('users')
export class AuthController {
  @Get('login/kakao')
  @UseGuards(KakaoAuthGuard)
  handleLogin() {
    return { msg: 'Kakao-Talk Authentication' };
  }

  // https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code

  @Get('kakao/redirect')
  @UseGuards(KakaoAuthGuard)
  handleRedirect() {
    return { msg: 'OK' };
  }
}
