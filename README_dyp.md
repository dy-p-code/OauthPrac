login URL http://localhost:3000/api/users/kakao/

## COMPLETE

Code for social login using NestJS framework
Developed kakao-talk login using passport

## HOW TO RUN

1. You have to enter the contents below first.

(1) [kakao.Strategy.ts]

- clientID >> restAPI key
- clientSecret >> client secret
- callbackURL >> redirect url

(2) [app.module.ts]

- type >> mysql
- host >> your SQL host URL
- port >> post number
- username >> host ID
- password >> host PW

2. The terminal commands >> npm i

3. The terminal commands >> npm run test:dev

## CHECKLIST

- Create Kakao App in Kakao Console.
- Create NestJS Project
- Create Auth Controller
- Create Auth Service
- Create Kakao Strategy
- Create Kakao Auth Guard
- Connect to Database (MySQL)
- Create TypeORM Entity
- Configure Session
