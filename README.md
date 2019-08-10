# bottle-nose

Node.js bolierplate for silky-smooth media streaming

---
## What you will need to do:

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

***

## Version History
A list of all versions
###v0.0.0.1 Just Hacking
Unmodified source from HackWSU 2016

### v0.0.0.2 Just Cleaning
Sanitized code

### v0.0.0.3 Just Renaming
Rename `encoder.js` to `bottle-nose.js`

### v.0.0.0.4 Just Adding
Functions for MPEG-DASH and Apple HLS added, encoder.js module added for file type encoding 

### v.0.0.0.4 Just MIME-ing
encoder.js now returns correct mime-type for content

---
# Roadmap
☑ Publish working code <br>
☐ Abrstact more functions of fluent-ffmpeg into cool one-liners (In-Progress)<br>
☐ Upgrade client-side player to support the aforemetioned functions<br>
☐ Complie into an npm package
