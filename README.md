# NodeJS API

Template API - NestJs


### Structure

src/api/

```
- app
- auth
- db
- user
- utils
  - exceptions
  - filters
  - interceptors
  - middlewares
  - logger
  - helpers.ts
- main.ts
```
./
```
- test
- .eslintrc.js
- .gitignore
- .prettierrc
- api.dockerfile
- container.yml
- nest-cli.json
- package.json
- README.md
- tsconfig.json
- tsconfig.build.json


```

### Running

- Run without docker
1 - yarn start:dev
3 - yarn start:dev
- Run with docker
1 - ensure if dev network is created in a docker enviroment
2 - docker-compose -f container.yml up -d

## Authors

- **André Drumond das Chagas** - [Linkedin](https://www.linkedin.com/in/andre-drumond/)

## License

This project is licensed under the MIT License - see the [license](license) file for details