import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEmail } from 'class-validator';
import { User } from '../../users/entities/user.entity';

export class CreatePostDto {
  @ApiProperty()
  title: string;
  @ApiProperty()
  content: string;
  @IsDate()
  @ApiProperty()
  createTime: Date;
  @ApiProperty()
  user: User;
}
