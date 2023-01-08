import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-kakao-oauth2';
import { AuthService } from '../auth.service';
import { ConfigModule } from '@nestjs/config';
@Injectable()
export class KakaoStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
  ) {
    super({
      clientID: process.env.CLIENT_ID, // restAPI key
      clientSecret: process.env.SECRET_KEY, // client secret
      callbackURL: process.env.CALLBACK, // redirect url
      // scope: ['profile_nickname', 'account_email'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: any,
  ): Promise<any> {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);

    const id = profile._json.id;
    const email = profile._json.kakao_account.email;
    const nickname = profile._json.properties.nickname;
    const profileImg = profile._json.properties.profile_image;
    const user = await this.authService.validateUser({
      id,
      email,
      nickname,
      profileImg,
    });

    console.log('validate');
    console.log(user);
    return user || null;
  }
}
