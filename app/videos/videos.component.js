"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// angular
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
// services
var video_service_1 = require('../services/video.service');
// components
var search_component_1 = require('../widgets/search/search.component');
var spinner_component_1 = require('../widgets/spinner/spinner.component');
var VideosComponent = (function () {
    function VideosComponent(_videoService, _routeParams) {
        this._videoService = _videoService;
        this._routeParams = _routeParams;
        this.isLoading = true;
        this.searchSize = "large";
        this.searchParams = "";
        this.searchParams = _routeParams.get('search');
    }
    VideosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._videoService.getVideos(this.searchParams)
            .subscribe(function (videos) {
            _this.isLoading = false;
            _this.videos = videos;
        });
    };
    VideosComponent = __decorate([
        core_1.Component({
            selector: 'videos',
            templateUrl: 'app/videos/videos.component.html',
            styleUrls: ['app/videos/videos.css'],
            providers: [video_service_1.VideoService],
            directives: [search_component_1.SearchComponent, spinner_component_1.SpinnerComponent, router_deprecated_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [video_service_1.VideoService, router_deprecated_1.RouteParams])
    ], VideosComponent);
    return VideosComponent;
}());
exports.VideosComponent = VideosComponent;
//# sourceMappingURL=videos.component.js.map