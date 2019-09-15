# bottle-nose

![bottle-nose demo](https://media.giphy.com/media/f5vlPCTkfZb2M2QKoN/giphy.gif)

## Prerequisites 

- [Node.js](https://nodejs.org/en/download/)
- [Angular CLI](https://cli.angular.io/)
- ffmpeg
- [gpac 0.8.0](https://download.tsi.telecom-paristech.fr/gpac/release/0.8.0/gpac-0.8.0-rev1-gc1990d5c-master.pkg)

## Setup

1a. Install the Linux version of ffmpeg.
  * `sudo add-apt-repository ppa:jon-severinsson/ffmpeg`
  * `sudo apt-get update`
  * `sudo apt-get install ffmpeg`
  * `sudo apt-get install frei0r-plugins`
  
1b. On Mac, use `brew install ffmpeg`

2. run ```npm install``` in both client and server folders
3. run ```npm start```  in the server folder.
4. run ```ng serve -o``` in the client folder.

## Live Streaming
1. [Install gpac 0.8.0](https://download.tsi.telecom-paristech.fr/gpac/release/0.8.0/gpac-0.8.0-rev1-gc1990d5c-master.pkg)

2a. Windows

```
cd server
npm install
DashCast  -vf dshow  -vres 640x480 -vfr 30 -v video="Integrated Webcam" -live -low-delay -frag 200 -insert-utc -seg-marker eods -min-buffer 0.2 -ast-offset -800 -pixf yuv420p
 node gpac-dash.js -segment-marker eods -chunk-media-segments
MP4Client http://127.0.0.1:8000/output/dashcast.mpd -opt Network:BufferLength=200 -opt DASH:LowLatency=chunk -opt DASH:UseServerUTC=no
```

2b. macOS (Macbook 2017)

```
cd server
npm install
DashCast -vf avfoundation -vres 848x480 -v "FaceTime Camera" -vfr 30 -live -pixf yuyv422 -conf dashcast.conf -live -v4l2f mjpeg -low-delay
```



3. `npm start`
4. `cd ../client && ng serve -o`

## Notes
##### use "FaceTime HD Camera" for Macs that support it, or another webcam.
##### use -a for audio (-a plughw:[x],[y] , where x and y are the card number and device number, respectively), or -av for a recording device with integrated audio.

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
