<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Project Structure

```
nest-fundamental/
├── src/                    # Source code directory
│   ├── main.ts            # Application entry point
│   ├── app.module.ts      # Root application module
│   ├── app.controller.ts  # Root application controller
│   ├── app.service.ts     # Root application service
│   └── cats/             # Cats feature module
│       ├── dto/          # Data Transfer Objects
│       │   ├── create-cat.dto.ts   # DTO for creating cats
│       │   └── update-cat.dto.ts   # DTO for updating cats
│       ├── entities/     # Database entities
│       │   └── cat.entity.ts       # Cat entity definition
│       ├── cats.module.ts          # Cats module definition
│       ├── cats.controller.ts      # Cats HTTP request handlers
│       ├── cats.service.ts         # Cats business logic
│       └── cats.controller.spec.ts # Cats controller tests
├── test/                  # End-to-end tests
│   ├── jest-e2e.json     # Jest e2e test configuration
│   └── app.e2e-spec.ts   # Application e2e tests
├── node_modules/         # Project dependencies
├── dist/                 # Compiled JavaScript output
├── nest-cli.json        # NestJS CLI configuration
├── package.json         # Project metadata and dependencies
├── tsconfig.json        # TypeScript configuration
├── tsconfig.build.json  # TypeScript build configuration
├── .eslintrc.js        # ESLint configuration
├── .prettierrc         # Prettier configuration
└── .gitignore         # Git ignore rules
```

### Key Components Explanation:

1. **Entry Files**
   - `main.ts`: Bootstrap file that creates the NestJS application
   - `app.module.ts`: Root module that imports all other modules
   - `app.controller.ts`: Basic controller for root-level routes
   - `app.service.ts`: Basic service with business logic

2. **Cats Feature Module**
   - `cats.module.ts`: Encapsulates the cats feature
   - `cats.controller.ts`: Handles HTTP requests for /cats endpoints
   - `cats.service.ts`: Contains business logic for cat operations
   - `dto/`: Data Transfer Objects for input validation
   - `entities/`: Database models and schemas

3. **Configuration Files**
   - `nest-cli.json`: NestJS CLI configuration
   - `tsconfig.json`: TypeScript compiler options
   - `package.json`: Project dependencies and scripts
   - `.eslintrc.js`: Code linting rules
   - `.prettierrc`: Code formatting rules

4. **Test Files**
   - `*.spec.ts`: Unit tests alongside source files
   - `test/`: End-to-end test directory

5. **Build Output**
   - `dist/`: Contains compiled JavaScript code

This structure follows NestJS best practices for organizing a scalable application with clear separation of concerns.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
