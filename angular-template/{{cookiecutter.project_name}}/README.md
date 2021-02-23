# Angular single SPA starter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.0.
It's custom starter with additional dependencies:
- angular single spa (@single-spa, @single-spa-angular)
- custom components based on stanciljs (@dkhir/common-components)

## Development server
There are two possible cases how to run this project: 
- like common angular spa project 
- like single-spa-angular project (which is part of outer shell application)

## Common angular spa project 
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Single-spa-angular project
Run `serve:single-spa` for a dev server.

To use such approach go to https://coexisting-angular-microfrontends.surge.sh/ and in the right bottom corner click on the box.
Select here your generated js chunk to work like a part on single-spa application.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `build:single-spa` - for building project specially for single spa
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Code style

Base pattern taken from [Airbnb](https://github.com/airbnb/javascript)
There are:
- tslint (deprecated)
- eslint
- prettier
- pre-commit hook

## Using svg icons

For better performance and easier use there is library svg-go and svg-sprites.
If you want to use svg icons install optional dependencies.
- go to `src/assets/images/icons`
- add here needed icon
- run command `npm run sprites`
- after that `sprite.svg` sprite will be generated
where your added icon will be.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
