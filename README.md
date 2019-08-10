# BottleNose

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.4.

## Development server

1a. Install the Linux version of ffmpeg.
  * `sudo add-apt-repository ppa:jon-severinsson/ffmpeg`
  * `sudo apt-get update`
  * `sudo apt-get install ffmpeg`
  * `sudo apt-get install frei0r-plugins`
  
1b. On mac use `brew install ffmpeg`
2. Link the [FlowPlayer](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg/tree/master/examples/flowplayer) flowplayer.min.js file and flowplayer.swf to index.html.
3. run ```npm install```
4. run ```node streamserver.js```
5. Navigate to index.html

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
