// angular
import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

// models
import { Video } from '../models/video';

// services
import { VideoService } from '../services/video.service';

// components
import { SpinnerComponent } from '../widgets/spinner/spinner.component';

//pipes
import { CustomDatePipe } from '../pipes/customdate.pipe';

// utils
declare var google: any;
declare var $: any;


@Component({
    selector: 'vid',
    templateUrl: 'app/vid/vid.component.html',
    providers: [VideoService],
    directives: [SpinnerComponent],
    styleUrls: ['app/vid/vid.css'],
    host: { 'class': 'ng-animate vid' },
    pipes: [CustomDatePipe]
})

export class VidComponent implements OnInit {
    id: string;
    isLoading: boolean = true;
    video;

    constructor(private _videoService: VideoService, private _routeParams: RouteParams) {
    }

    // initMap() {
        
    //     $(".ui.stackable.large.menu").css({
    //         "opacity":"0.3",
    //         "filter": "blur(5px)",
    //         "-webkit-filter": "blur(5px)"
    //     });
    //     $(".five.wide.column").css({
    //         "opacity": "0.3",
    //         "filter": "blur(5px)",
    //         "-webkit-filter": "blur(5px)"
    //     });
    //     $(".ui.segment.my-video-toolbar").css({
    //         "opacity": "0.3",
    //         "filter": "blur(5px)",
    //         "-webkit-filter": "blur(5px)"
    //     });
    //     $("body").css({
    //         "background": "none",
    //         "background-color": "black"
    //     });
    // }

    ngOnInit() {
        

        this._videoService.getVideo(this._routeParams.get("_id"))
            .subscribe(video => {
                this.isLoading = false;
                this.video = video;

                // set placehodler picture and source for video
                $('.ui.embed').embed({
                    source: this.getVideoSource(),
                    id: this.getVideoId(),
                    placeholder: video.thumbnail
                });
                
                // after placeholder for video loaded, load google map
                $('img').attr('class', 'placeholder').load(function() {  
                    var map = new google.maps.Map(document.getElementById("map"), {
                        center: {lat: 45.7410431, lng: 21.1465501},
                        zoom: 8
                    });
                });  
                
                

            });
    }

    getVideoSource(): string {
        if (this.video.videoUrl.indexOf("vimeo") === -1) {
            return "youtube";
        }
        return "vimeo";
    }

    getVideoId(): string {
        if (this.getVideoSource() === "youtube") {
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