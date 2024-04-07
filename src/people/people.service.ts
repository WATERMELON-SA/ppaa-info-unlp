import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePersonDto } from './dto/create-person.dto';
import { Repository } from 'typeorm';
import { Person } from './entities/person.entity';

@Injectable()
export class PeopleService {
  constructor(
    @InjectRepository(Person)
    private peopleRepository: Repository<Person>,
  ) {}

  create(createPersonDto: CreatePersonDto) {
    return this.peopleRepository.create(createPersonDto);
  }

  findAll() {
    return this.peopleRepository.find();
  }
}
