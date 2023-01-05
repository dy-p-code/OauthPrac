
## INCOMPLETE

## Code for social login using NestJS framework
## Developed kakao-talk login using passport

## HOW TO RUN
# 1. You have to enter the contents below first.
[kakao.Strategy.ts]
	clientID: '',               // restAPI key
	clientSecret: '',           // client secret
	callbackURL: '',            // redirect url

[app.module.ts]
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '',               // your SQL  host URL
      port: 3306,             // post number
      username: '',           // host ID
      password: '',           // host PW
      database: 'kakao_oauth',
      entities: [User],
      synchronize: true,
    }),

# 2. The terminal commands >> npm i

# 3. The terminal commands >> npm run test:dev