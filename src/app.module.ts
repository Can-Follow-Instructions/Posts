import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { Post } from './posts/entities/post.entity';
import { PostsModule } from './posts/posts.module';
import { NotificationMiddleware } from './notification.middleware';
import { PostsController } from './posts/posts.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.awsSNS.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST || 'localhost',
      port: parseInt(process.env.DATABASE_PORT) || 3306,
      username: process.env.DATABASE_USER || 'root',
      password: process.env.DATABASE_PASSWORD || 'passwd',
      database: process.env.DATABASE_NAME || 'test',
      entities: [Post],
      synchronize: true, // only for dev
    }),
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(NotificationMiddleware).forRoutes({
      path: 'posts',
      method: RequestMethod.POST,
    });
  }
}
