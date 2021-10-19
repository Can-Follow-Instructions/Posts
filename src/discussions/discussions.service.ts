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
    private postRepository: Repository<Discussion>,
  ) {}

  create(createDiscussionDto: CreateDiscussionDto) {
    return this.postRepository.save(this.postRepository.create(createDiscussionDto));
  }

  findAll() {
    return this.postRepository.find();
  }

  findOne(id: number) {
    return this.postRepository.findOne(id);
  }

  update(id: number, updateDiscussionDto: UpdateDiscussionDto) {
    return this.postRepository.update(id, updateDiscussionDto);
  }

  remove(id: number) {
    return this.postRepository.delete(id);
  }
}
