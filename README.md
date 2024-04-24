## Descripción

Desarrollo de sistema de software para la materia Patrones de Arquitectura de Software de la facultad de informática de la UNLP

## Documentación

Los diagramas y documentacion adicional necesaria se encuentran en la carpeta [docs](docs/) del repositorio.

## Descargar imagen de registry

```bash
$ docker pull ghcr.io/watermelon-sa/ppaa-info-unlp:latest
```

## Instalación

```bash
$ yarn install
```

## Ejecutar la aplicación

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Ejecutar la aplicación con Docker

### Production
```bash
$ docker build -t ppaa-info-unlp .

$ docker run -p 3000:3000 ppaa-info-unlp
```

### Development (with docker-compose)
```bash
$ docker-compose up -d
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Autores

- Julian Pasquale
- Ignacio Soloaga
- Santiago Tettamanti

## Licencia

[MIT licensed](LICENSE).
