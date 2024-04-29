import { Module } from '@nestjs/common';
import { PeopleService } from 'src/people/services/people.service';
import { PeopleController } from 'src/people/people.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from 'src/people/entities/person.entity';
import { PeopleTransformService } from 'src/people/services/people-transform.service';

@Module({
  imports: [TypeOrmModule.forFeature([Person])],
  controllers: [PeopleController],
  providers: [PeopleService, PeopleTransformService],
})
export class PeopleModule {}
