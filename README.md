# Simply Express TypeScript Template

This is a boilerplate for Express.js applications using TypeScript. This template was generated using simply-express-generator.

## Project Structure

The project follows a common structure for Node.js applications. Here is the general structure:

```plaintext
src/
├── app.ts
├── controllers
│   ├── AppController.ts
│   └── index.ts
├── interfaces
│   ├── App.ts
│   └── index.ts
├── middlewares
│   └── SchemaValidator.ts
├── routes
│   ├── AppRouter.ts
│   └── index.ts
└── services
    ├── AppService.ts
    └── index.ts
test/
├── app.test.ts
└── tsconfig.json
```

## Available Scripts
In the project directory, you can run the following scripts:

`npm run start`
Runs the compiled app from the dist folder.

`npm run dev`
Runs the app in development mode using ts-node.

`npm run build`
Builds the app for production to the dist folder.

`npm run lint`
Runs ESLint to find problematic patterns or code that doesn’t adhere to certain style guidelines.

`npm run lint:fix`
Runs ESLint and automatically fixes problems.

`npm run test`
Runs the test watcher (Jest) in an interactive mode.

`npm run test:watch`
Runs the test watcher with `--watch` flag.

`npm run test:cov
Runs the test and generates a coverage report.

## Customizing Configuration
### Jest
Jest has been preconfigured for this template. However, you are free to customize the configuration to suit your needs. Refer to the Jest documentation for more details.

### ESLint
This project uses ESLint for linting. You can customize its rules by modifying the .eslintrc file. More details can be found in the ESLint documentation.
