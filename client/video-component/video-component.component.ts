import { Component, OnInit } from '@angular/core';
import { VideoService } from 'client/video.service';

@Component({
  selector: 'app-video-component',
  templateUrl: './video-component.component.html',
  styleUrls: ['./video-component.component.scss']
})
export class VideoComponentComponent implements OnInit {

  videoSrc = "http://127.0.0.1:8080/video/modern_capitalism.mp4";
  list: any;
  constructor(private videoService:VideoService) { 

  }

  ngOnInit() {
    this.GetItemList();
  }
  GetItemList() {
    this.videoService.GetVideoList().subscribe((x)=> {
      this.list = x.json()
   });
  }

  GetVideo(item){
    this.videoSrc = "http://127.0.0.1:8080/video/"+item;
  }

}
