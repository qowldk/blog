import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { Blog, BlogSchema } from './blog.schema';
import { BlogFileRepository, BlogMongoRepository } from './blog.repository';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://qowldk1030:grhdwn00@cluster0.aulipmv.mongodb.net/blog',
    ),

    MongooseModule.forFeature([{ name: Blog.name, schema: BlogSchema }]),
  ],
  controllers: [BlogController],
  providers: [BlogService, BlogFileRepository, BlogMongoRepository],
})
export class AppModule {}
