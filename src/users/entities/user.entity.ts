import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Address } from '../../addresses/entities/address.entity';
import { Post } from '../../posts/entities/post.entity';
import { Discussion } from '../../discussions/entities/discussion.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @ManyToOne(() => Address, (address) => address.users)
  address: Address;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  // @OneToMany(() => Discussion, (discussion) => discussion.user)
  // discussions: Discussion[];
}
