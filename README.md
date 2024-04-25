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

### Ejecutar seeds
```bash
$ yarn run data:seed
```

Ejecutar con Docker
```bash
docker-compose run web yarn data:seed
```

### Importar colección a Postman

- Correr la aplicación de forma local, ya sea con `yarn` o con `docker / docker-compose`
- Abrir Postman y en la pestaña de Colecciones, hacer click en el botón `Importar`
- Ingresar la URL en la que está corriendo la aplicación: `http://localhost:3000/api-json` por default.
- Al finalizar, debería haberse generado una colección en Postman llamada `PPAA - Info UNLP` con los endpoints disponibles del proyecto.

***Nota adicional: Tener en cuenta que el servidor de la aplicacion se levanta en el puerto 3000. La colleccion generada utiliza como url {{baseurl}}. Esto puede ser reemplazado por `http://localhost:3000` o bien setear la variable baseurl desde la configuracion de Postman.***

Más información disponible en la [documentación oficial de Postman](https://learning.postman.com/docs/getting-started/importing-and-exporting/importing-from-swagger/).

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
