import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from '../../users/entities/user.entity';
import { Post } from '../../posts/entities/post.entity';

@Entity()
export class Discussion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  commentId: number;

  @Column()
  content: string;

  @Column()
  createTime: Date;

  @ManyToOne(() => User, (user) => user.discussions)
  user: User;

  @ManyToOne(() => Post, (post) => post.discussions)
  post: Post;
}
