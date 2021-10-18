import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AddressesModule } from './addresses/addresses.module';
import { User } from './users/entities/user.entity';
import { Address } from './addresses/entities/address.entity';
import { Post } from './posts/entities/post.entity';
import { PostsModule } from './posts/posts.module';
import { Discussion } from './discussions/entities/discussion.entity';
import { DiscussionsModule } from './discussions/discussions.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST || 'localhost',
      port: parseInt(process.env.DATABASE_PORT) || 3306,
      username: process.env.DATABASE_USER || 'root',
      password: process.env.DATABASE_PASSWORD || 'passwd',
      database: process.env.DATABASE_NAME || 'test',
      entities: [Address, User, Post],
      synchronize: true, // only for dev
    }),
    UsersModule,
    AddressesModule,
    PostsModule,
    //DiscussionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
