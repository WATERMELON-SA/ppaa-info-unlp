import { Module } from '@nestjs/common';
import { PeopleService } from './services/people.service';
import { PeopleController } from './people.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import { PeopleTransformService } from './services/people-transform.service';

@Module({
  imports: [TypeOrmModule.forFeature([Person])],
  controllers: [PeopleController],
  providers: [PeopleService, PeopleTransformService],
})
export class PeopleModule {}
