# bottle-nose

![bottle-nose demo](https://media.giphy.com/media/f5vlPCTkfZb2M2QKoN/giphy.gif)

## Prerequisites 

- [Node.js](https://nodejs.org/en/download/)
- [Angular CLI](https://cli.angular.io/)
- ffmpeg
- [gpac 0.8.0](https://gpac.wp.imt.fr/downloads/)

## Setup

1a. Install the Linux version of ffmpeg.
  `sudo apt-get install ffmpeg`
  
1b. On Mac, use `brew install ffmpeg`

2. [Install gpac 0.8.0](https://gpac.wp.imt.fr/downloads/)

3. cd server && npm install

4a. Windows

```
DashCast  -vf dshow  -vres 640x480 -vfr 30 -v video="Integrated Webcam" -live -low-delay -frag 200 -insert-utc -seg-marker eods -min-buffer 0.2 -ast-offset -800 -pixf yuv420p
 node gpac-dash.js -segment-marker eods -chunk-media-segments
MP4Client http://127.0.0.1:8000/output/dashcast.mpd -opt Network:BufferLength=200 -opt DASH:LowLatency=chunk -opt DASH:UseServerUTC=no
```

4b. macOS (Macbook 2017)

```
DashCast -vf avfoundation -vres 848x480 -v "FaceTime Camera" -vfr 30 -live -pixf yuyv422 -conf dashcast.conf -live -v4l2f mjpeg -low-delay
```

5. `npm start`

6. `cd ../client && ng serve -o`

## Notes
##### use "FaceTime HD Camera" for Macs that support it, or another webcam.
##### use -a for audio (`arecord -l` to get a list of devices, then `-a plughw:[x],[y]`, where [x] and [y] are the card number and device number, respectively), or -av for a recording device with integrated audio.

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
