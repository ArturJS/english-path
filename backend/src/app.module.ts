import { resolve } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersResolver } from './users/users.resolver';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    // GraphQLModule.forRoot({
    //   useGlobalPrefix: true,
    //   installSubscriptionHandlers: true,
    //   autoSchemaFile: resolve(process.cwd(), './schema.gql'),
    //   context: ({ req }) => {
    //     return { req };
    //   },
    //   playground: {
    //     settings: {
    //       // https://github.com/prisma-labs/graphql-playground/issues/748#issuecomment-412524510
    //       'request.credentials': 'same-origin',
    //     },
    //   },
    // }),
    GraphQLModule.forRootAsync({
      useFactory: async () => ({
        path: '/api/graphql',
        useGlobalPrefix: true,
        installSubscriptionHandlers: true,
        autoSchemaFile: resolve(process.cwd(), './schema.gql'),
        context: ({ req }) => {
          return { req };
        },
        playground: {
          settings: {
            // https://github.com/prisma-labs/graphql-playground/issues/748#issuecomment-412524510
            'request.credentials': 'same-origin',
          },
        },
      })
    }),
    AuthModule,
    UsersModule,
  ],
  providers: [UsersResolver],
})
export class AppModule {}
