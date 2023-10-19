import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { FeedService } from './services/feed.service';
import { FeedPostEntity } from './models/post.entity';
import { FeedController } from './controllers/feed.controller';

@Module({
  imports:[
    TypeOrmModule.forFeature([FeedPostEntity])
  ],
  providers: [FeedService],
  controllers: [FeedController]
  
})
export class FeedModule {}
