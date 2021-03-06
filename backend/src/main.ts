import * as cookieSession from 'cookie-session';
import * as passport from 'passport';
import { Strategy } from 'passport-local';
import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';
import * as http from "http";
import { NextApiHandler } from 'next';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

function initPassport(app) {
  // Serialize Sessions
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  // Deserialize Sessions
  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  passport.use(
    new Strategy(async (email, password, done) => {
      done(null, { email, password });
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());
}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors({
    credentials: true,
    origin: 'http://localhost:8000'
  });

  app.use(
    cookieSession({
      name: 'session',
      keys: ['session secret'],
      saveUninitialized: false,
      // Cookie Options
      resave: false,
      secure: false,
      httpOnly: false,
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }),
  );

  initPassport(app);

  await app.listen(3000);
}

bootstrap();

export module Backend {
  let app: INestApplication;

  export async function getApp() {
    if (!app) {
      app = await NestFactory.create(
        AppModule,
        { bodyParser: false }
      );
      app.setGlobalPrefix("api");
  
      await app.init();
    }

    return app;
  }

  export async function getListener() {
    const app = await getApp();
    const server: http.Server = app.getHttpServer();
    const [ listener ] = server.listeners("request") as NextApiHandler[];
    return listener;
  }
}
