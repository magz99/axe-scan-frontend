# AxeScanTool

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.3.

Purpose of this project: Give the user the ability to scan a whole website for accessibility issues, using the Deque aXe library.
The Angular front end will eventually load accessiblity scans for particular websites, which will allow the user to drill down and view results on a per-page basis, instead of manually loading a page, and running the Chrome plugin.
The user will be presented with a summary view for a website, and then a more detailed view per page, where they will be able to see which accessibility issues exist, and the HTML element affected.

## Development server (Front-end)

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## JSON server (temporary back-end)

In a new terminal window, CD in the `json-server` folder and run `npm start`. This will listen on port 3000.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Next Steps

- Should be printer-friendly (or PDF friendly)
- This app will eventually be setup on an EC2 instance
- Authentication for different users
