import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEmail } from 'class-validator';
import { User } from '../../users/entities/user.entity';
import { Post} from '../../posts/entities/post.entity';

export class CreateDiscussionDto {
  @ApiProperty()
  commentId: number;
  @ApiProperty()
  content: string;
  @IsDate()
  @ApiProperty()
  createTime: Date;
  @ApiProperty()
  user: User;
  @ApiProperty()
  post: Post;


}
