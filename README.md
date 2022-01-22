# Challenge #1

This project is made using [Angular CLI](https://ng-ch-1.vercel.app) version 13.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Test

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

All components and services have been tested and overall test coverage is 100%

You can run `ng test --code-coverage` for more details

## About the project

In this project, we have three files. Multiply.json,Add.json and Number.json. we should get the first operand and its action from the Number.json file. the second operand is placed in the action files (Add.json and Multiply.json). now we can perform math operations with operand1, action and operand2 with the help.
All the above steps have been done using observables and the rxjs library

## modules

we have three modules in this project. core module, home module, and shared module. global components like layout and response interceptor are placed in this module .in the shared module we have angular material components,loading service and type definitions. finally, we have the home module which is a lazy loading module and we have main page and calculation services in it

## Error handling

All error Handlings(Server error and missing data) are performed by a response interceptor.
