import 'reflect-metadata';
import * as cookieSession from 'cookie-session';
import * as passport from 'passport';
import { Strategy } from 'passport-local';
import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';
import * as http from 'http';
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
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());
}

let app: INestApplication;

export const Backend = {
  async getApp() {
    if (!app) {
      app = await NestFactory.create<NestExpressApplication>(AppModule, {
        bodyParser: false,
      });

      app.enableCors({
        credentials: true,
        origin: 'http://localhost:8000',
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
          maxAge: 24 * 60 * 60 * 1000, // 24 hours
        }),
      );

      initPassport(app);

      app.setGlobalPrefix('/api/graphql');

      await app.init();
    }

    return app;
  },

  async getListener() {
    const app = await Backend.getApp();
    const server: http.Server = app.getHttpServer();
    const [listener] = server.listeners('request') as NextApiHandler[];
    return listener;
  },
};
