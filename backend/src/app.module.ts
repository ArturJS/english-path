import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersResolver } from './users/users.resolver';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
      context: ({ req }) => ({ req }),
      playground: {
        settings: {
          // wow it works!!!!
          // https://github.com/prisma-labs/graphql-playground/issues/748#issuecomment-412524510
          "request.credentials": "same-origin",
        }
      }
    }),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, UsersResolver],
})
export class AppModule {}
