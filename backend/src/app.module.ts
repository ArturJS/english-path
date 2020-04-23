import { resolve } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ServeStaticModule } from '@nestjs/serve-static';
import { UsersResolver } from './users/users.resolver';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, '../../frontend/public')
    }),
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
  providers: [UsersResolver],
})
export class AppModule {}
