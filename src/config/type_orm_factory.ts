import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// Entities
import { Person } from '../people/entities/person.entity';

export function typeOrmFactory(
  configService: ConfigService,
): TypeOrmModuleOptions {
  const outputOptions: TypeOrmModuleOptions = {
    type: 'mysql',
    host: configService.get('DATABASE_HOST'),
    port: configService.get('DATABASE_PORT'),
    database: configService.get('DATABASE_NAME'),
    username: configService.get('DATABASE_USER'),
    password: configService.get('DATABASE_PASSWORD'),
    autoLoadEntities: true,
    synchronize: process.env.NODE_ENV !== 'production',
    logging:
      typeof configService.get('DATABASE_LOGGING') === 'boolean'
        ? Boolean(configService.get('DATABASE_LOGGING'))
        : configService.get('DATABASE_LOGGING'),
    retryAttempts: configService.get('DATABASE_CONNECTION_MAX_RETRIES') ?? 10,
    entities: [Person],
  };

  return outputOptions;
}
