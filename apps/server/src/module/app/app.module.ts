import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';
import { ConfigModule } from '@src/system/config';
import { LoggerModule } from '@src/system/logger';
import { PrismaModule } from '@src/system/prisma';
import { AuthModule } from '@src/module/auth/';

const SystemModules = [
  PrismaModule,
  ConfigModule,
  LoggerModule,
  GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema/schema.gql'),
    sortSchema: true,
    introspection: true,
  }),
];

const ServiceModules = [AuthModule];

@Module({
  imports: [...SystemModules, ...ServiceModules],
  providers: [AppResolver, AppService],
})
export class AppModule {}
