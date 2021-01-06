import { resolve } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersResolver } from './users/users.resolver';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

console.log({
  NODE_ENV: process.env.NODE_ENV // IT IS called but where is playground for graphql?????
});

@Module({
  imports: [
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
      context: ({ req }) => ({ req }),// todo check is it called???
      playground: {
        settings: {
          // wow it works!!!!
          // https://github.com/prisma-labs/graphql-playground/issues/748#issuecomment-412524510
          'request.credentials': 'same-origin',
        },
      },
    }),
    AuthModule,
    UsersModule,
  ],
  providers: [UsersResolver],
})
export class AppModule {}
