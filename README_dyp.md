## login URL

http://localhost:3000/api/users/login/kakao

## COMPLETE

Code for social login using NestJS framework
Developed kakao-talk login using passport

## HOW TO RUN

1. You have create a .env file and write the contents below.

DB_HOST = host endpoint
DB_PORT = port number
DB_USERNAME = user name
DB_PASSWORD = user passport
DB_NAME = DB name
CLIENT_ID = restAPI key
SECRET_KEY = client secret

2. You must set a redirect url.

3. The terminal commands >> npm i

4. The terminal commands >> npm run test:dev

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
