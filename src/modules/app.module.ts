// NestJS imports
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from './database.module';

// Root imports
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';

// People module
import { PeopleModule } from '../people/people.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    PeopleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
