import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Discussion } from '../../discussions/entities/discussion.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @CreateDateColumn()
  createTime: Date;

  @ManyToOne(() => User, (user) => user.posts)
  user: User;

  // @OneToMany(() => Discussion, (discussion) => discussion.post)
  // discussions: Discussion[];
}
