import { DataSource } from 'typeorm';
import { seedData } from './people';
import { AppModule } from '../modules/app.module';
import { NestFactory } from '@nestjs/core';

async function runSeeder() {
  const app = await NestFactory.create(AppModule);
  const dataSource = app.get(DataSource);

  // Run people seeder.
  await seedData(dataSource);

  await app.close();
}

runSeeder();
