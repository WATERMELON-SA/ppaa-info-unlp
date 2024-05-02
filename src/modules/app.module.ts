// NestJS imports
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database.module';

// Root imports
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';

// People module
import { PeopleModule } from '../people/people.module';

// Address module
import { AddressModule } from '../address/address.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    PeopleModule,
    AddressModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
