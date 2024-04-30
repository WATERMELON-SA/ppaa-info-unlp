import { Injectable } from '@nestjs/common';
import { Person } from 'src/people/entities/person.entity';
import { GetPersonDto } from 'src/people/dto/get-person.dto';
import { calculateAge } from 'src/people/birthday-utils'

@Injectable()
export class PeopleTransformService {
  transformPersonToGetPersonDto(person: Person): GetPersonDto {
    return {
      id: person.id,
      fullName: `${person.lastName} ${person.firstName}`,
      age: calculateAge(new Date(person.birthday)),
    };
  }
}
