import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from 'src/people/entities/person.entity';
import { CreatePersonDto } from 'src/people/dto/create-person.dto';
import { PeopleTransformService } from './people-transform.service';
import { GetPersonDto } from 'src/people/dto/get-person.dto';

@Injectable()
export class PeopleService {
  constructor(
    @InjectRepository(Person)
    private peopleRepository: Repository<Person>,
    private peopleTransformService: PeopleTransformService,
  ) {}

  async create(createPersonDto: CreatePersonDto): Promise<Person> {
    const newPerson = this.peopleRepository.create(createPersonDto);
    await this.peopleRepository.save(newPerson);
    return newPerson;
  }

  async findAll(): Promise<GetPersonDto[]> {
    const people = await this.peopleRepository.find();
    return people.map((person) =>
      this.peopleTransformService.transformPersonToGetPersonDto(person),
    );
  }
}