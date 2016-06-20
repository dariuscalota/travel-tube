// angular
import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

// models
import { Video } from '../models/video';

// services
import { VideoService } from '../services/video.service';

// utils
declare var $:any; 

// components
import { SpinnerComponent } from '../widgets/spinner/spinner.component';



@Component ({
    selector: 'vid',
    templateUrl: 'app/vid/vid.component.html',
    providers: [VideoService],
    directives: [SpinnerComponent],
    styles: [`
        .my-video {
            margin-top:12px;
        }
    `]
})

export class VidComponent implements OnInit{
    id: string;
    isLoading: boolean = true;
    video;

    constructor(private _videoService: VideoService, private _routeParams: RouteParams) {
    }

    ngOnInit() {
        

        this._videoService.getVideo(this._routeParams.get("_id"))
            .subscribe(video => {
                this.isLoading = false;
                this.video = video;
                $('.ui.embed').embed({
                    source: this.getVideoSource(),
                    id: this.getVideoId(),
                    placeholder: video.thumbnail
                });
                
            });
    }

    getVideoSource():string {
        if(this.video.videoUrl.indexOf("vimeo")===-1){
            return "youtube";
        }
        return "vimeo";
    }

    getVideoId():string {
        if(this.getVideoSource() ==="youtube"){
            let video_id = this.video.videoUrl.split('v=')[1];
            let ampersandPosition = video_id.indexOf('&');
            if (ampersandPosition != -1) {
                video_id = video_id.substring(0, ampersandPosition);
            }
            return video_id;
        }

        let regExp = /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/;
        let parseUrl = regExp.exec(this.video.videoUrl);
        return parseUrl[5];

    }
}