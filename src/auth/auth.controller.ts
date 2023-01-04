import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get('login/kakao')
  handleLogin() {
    return { msg: 'Kakao-Talk Authentication' };
  }

  // redirect url과 일치해야 함
  @Get('kakao/redirect')
  handleRedirect() {
    return { msg: 'OK' };
  }
}
