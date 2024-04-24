import { Injectable } from '@nestjs/common';
import { Person } from 'src/people/entities/person.entity';
import { GetPersonDto } from 'src/people/dto/get-person.dto';

@Injectable()
export class PeopleTransformService {
  transformPersonToGetPersonDto(person: Person): GetPersonDto {
    return {
      id: person.id,
      fullName: `${person.lastName} ${person.firstName}`,
      age: this.calculateAge(new Date(person.birthday)),
    };
  }

  private calculateAge(birthday: Date): number {
    const today = new Date();
    let age = today.getFullYear() - birthday.getFullYear();
    const monthDiff = today.getMonth() - birthday.getMonth();
    const dayDiff = today.getDate() < birthday.getDate()
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff)) {
      age--;
    }
    return age;
  }
}
