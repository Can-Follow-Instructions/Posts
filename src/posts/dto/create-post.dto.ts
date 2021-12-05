import { ApiProperty } from '@nestjs/swagger';
import { IsDate } from 'class-validator';

export class CreatePostDto {
  @ApiProperty()
  title: string;
  @ApiProperty()
  content: string;
  @IsDate()
  @ApiProperty()
  createTime: Date;
  @ApiProperty()
  userId: number;
}
