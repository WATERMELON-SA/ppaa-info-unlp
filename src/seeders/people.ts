import { DataSource } from 'typeorm';
import { Person } from '../people/entities/person.entity';
import { CreatePersonDto } from '../people/dto/create-person.dto';

import { faker } from '@faker-js/faker';

export async function seedData(dataSource: DataSource): Promise<void> {
  const peopleCount = 30;
  const peopleRepository = dataSource.getRepository(Person);

  const mockPeopleInserts = Array.from(Array(peopleCount).keys()).map(() => {
    const dto: CreatePersonDto = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      birthday: String(faker.date.birthdate()),
    };

    return peopleRepository.save(peopleRepository.create(dto));
  });

  await Promise.all(mockPeopleInserts);
}
