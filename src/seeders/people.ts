import { DataSource } from 'typeorm';
import { Person } from '../people/entities/person.entity';
import { CreatePersonDto } from '../people/dto/create-person.dto';

import { faker } from '@faker-js/faker';

export async function seedData(dataSource: DataSource): Promise<void> {
  const people_count = 30;
  const peopleRepository = dataSource.getRepository(Person);

  for(let i = 0; i < people_count; i++){
    const dto: CreatePersonDto = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      birthday: String(faker.date.birthdate())
    }

    await peopleRepository.save(peopleRepository.create(dto));
  }
}
