import { Component, OnInit } from '@angular/core';
import { VideoService } from 'client/video.service';

@Component({
  selector: 'app-video-component',
  templateUrl: './video-component.component.html',
  styleUrls: ['./video-component.component.scss']
})
export class VideoComponentComponent implements OnInit {

  videoSrc = null;
  list: any;
  live = true;
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
    this.live=false;
    this.videoSrc = "http://127.0.0.1:8080/video/"+item;
  }
  Live(){
    this.live = true;
  }

}
