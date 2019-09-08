import { Component, OnInit } from '@angular/core';
import { VideoService } from 'client/video.service';

@Component({
  selector: 'app-upload-component',
  templateUrl: './upload-component.component.html',
  styleUrls: ['./upload-component.component.scss']
})
export class UploadComponentComponent implements OnInit {

  upload: any;

  constructor(private videoService: VideoService) { }

  ngOnInit() {
  }

  getFileDetails(e) {
    this.upload = e.target.files[0];
  }

  UploadVideo() {
    this.videoService.UploadVideo(this.upload).subscribe(x => x.json());
  }
}
