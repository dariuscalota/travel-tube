// angular
import { Component, OnInit } from '@angular/core';
import { RouteParams, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

// services
import { VideoService } from '../services/video.service';

// models
import { Video } from '../models/video';

// components
import { SearchComponent } from '../widgets/search/search.component';
import { SpinnerComponent } from '../widgets/spinner/spinner.component';

@Component ({
    selector: 'videos',
    templateUrl: 'app/videos/videos.component.html',
    styleUrls: ['app/videos/videos.css'],
    providers: [VideoService],
    directives: [SearchComponent, SpinnerComponent, ROUTER_DIRECTIVES]
})

export class VideosComponent implements OnInit{

    isLoading:boolean = true;
    searchSize:string="large";
    videos:Video[];
    searchParams:string="";

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