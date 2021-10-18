import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Post } from '../../posts/entities/post.entity';

export class Discussion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  topicId: number;

  @Column()
  commentId: number;

  @Column()
  content: string;

  @Column()
  createTime: Date;

  @ManyToOne(() => User, (user) => user.posts)
  user: User;

  // @ManyToOne(() => Post, (post) => post.discussions)
  // post: Post;
}
