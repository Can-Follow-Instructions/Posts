import { Injectable } from '@nestjs/common';
import { CreateDiscussionDto } from './dto/create-discussion.dto';
import { UpdateDiscussionDto } from './dto/update-discussion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Discussion } from './entities/discussion.entity';

@Injectable()
export class DiscussionsService {
  constructor(
    @InjectRepository(Discussion)
    private discussionRepository: Repository<Discussion>,
  ) {}

  create(createDiscussionDto: CreateDiscussionDto) {
    return this.discussionRepository.save(
      this.discussionRepository.create(createDiscussionDto),
    );
  }

  findAll() {
    return this.discussionRepository.find();
  }

  findOne(id: number) {
    return this.discussionRepository.findOne(id);
  }

  findByPostId(id: number) {
    const query = this.discussionRepository.createQueryBuilder('discussion');
    query.leftJoinAndSelect('discussion.post', 'post')
      .where('post.id = :postId', {postId: id })
    return query.getMany();

  }

  update(id: number, updateDiscussionDto: UpdateDiscussionDto) {
    return this.discussionRepository.update(id, updateDiscussionDto);
  }

  remove(id: number) {
    return this.discussionRepository.delete(id);
  }
}
