import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-kakao';
import { AuthService } from '../auth.service';

@Injectable()
export class KakaoStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
  ) {
    super({
      clientID: '', // restAPI key
      clientSecret: '', // client secret
      callbackURL: '', // redirect url
      scope: ['profile_nickname', 'profile_image', 'account_email'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile_nickname: string,
    profile_image: string,
    account_email: string,
  ) {
    console.log(accessToken); // 이 부분 해결 필요
    console.log(refreshToken);
    console.log(profile_nickname);
    console.log(profile_image);
    console.log(account_email);
    this.authService.validateUser({
      profile_nickname: kakao_account.profile.nickname,
      profile_image: kakao_account.profile.thumbnail_image_url,
      account_email: kakao_account.email,
    });
  }
}
