import { Component, OnInit } from '@angular/core';
import { VideoService } from '../services/video.service';
import { RouteParams } from '@angular/router-deprecated';
import { SearchComponent } from '../widgets/search/search.component';
declare var $:any;

@Component ({
    selector: 'videos',
    templateUrl: 'app/videos/videos.component.html',
    styleUrls: ['app/videos/videos.css'],
    providers: [VideoService],
    directives: [SearchComponent]
})

export class VideosComponent implements OnInit{
    isLoading=true;
    searchSize="large";
    videos;
    searchParams="";
    ngOnInit() {
        this._videoService.getVideos(this.searchParams)
            .subscribe(videos => {
                this.isLoading = false;
                this.videos = videos;
            });
    }

    constructor(private _videoService: VideoService, private _routeParams: RouteParams) {
        this.searchParams = _routeParams.get('search');
    }
}