import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { DatabaseModule } from 'src/modules/database.module';
import { PeopleModule } from 'src/people/people.module';
import { faker } from '@faker-js/faker';
import * as request from 'supertest';
import { ConfigModule } from '@nestjs/config';
import { App } from 'supertest/types';

describe('people', () => {
  let app: INestApplication;
  let httpServer: App;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [PeopleModule, DatabaseModule, ConfigModule.forRoot()],
    }).compile();

    app = moduleRef.createNestApplication();
    httpServer = app.getHttpServer();

    await app.init();
  });

  describe('POST /people', () => {
    it('should create a person', async () => {
      const mockPerson = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        birthday: faker.date.past().toISOString(),
      };
      const response = await request(httpServer)
        .post('/people')
        .send(mockPerson)
        .expect(201);

      expect(response.status).toEqual(201);
      expect(response.body).toEqual({
        id: expect.any(Number),
        fullName: `${mockPerson.lastName} ${mockPerson.firstName}`,
        age: expect.any(Number),
      });
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
