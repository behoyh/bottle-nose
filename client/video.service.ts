import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http:Http) { 

  }

  public GetVideoList()
  {
   return this.http.get("http://127.0.0.1:8080/videos")
  }

  public UploadVideo(data:any)
  {
    var fd = new FormData();
    fd.append('upl', data, data.name);
    return this.http.put("http://127.0.0.1:8080/video", fd);
  }
}
