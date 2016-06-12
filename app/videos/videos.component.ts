import { Component, OnInit } from '@angular/core';
import {VideoService} from '../services/video.service';

@Component ({
    selector: 'videos',
    templateUrl: 'app/videos/videos.component.html',
    styleUrls: ['app/videos/videos.css'],
    providers: [VideoService]
})


export class VideosComponent implements OnInit{
    ngOnInit() {
        this._videoService.getVideos()
                          .subscribe(videos => console.log(videos));
    }

    constructor(private _videoService: VideoService) {
        
    }
}