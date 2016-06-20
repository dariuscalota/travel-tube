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
var spinner_component_1 = require('../widgets/spinner/spinner.component');
var VidComponent = (function () {
    function VidComponent(_videoService, _routeParams) {
        this._videoService = _videoService;
        this._routeParams = _routeParams;
        this.isLoading = true;
    }
    VidComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._videoService.getVideo(this._routeParams.get("_id"))
            .subscribe(function (video) {
            _this.isLoading = false;
            _this.video = video;
            $('.ui.embed').embed({
                source: _this.getVideoSource(),
                id: _this.getVideoId(),
                placeholder: video.thumbnail
            });
        });
    };
    VidComponent.prototype.getVideoSource = function () {
        if (this.video.videoUrl.indexOf("vimeo") === -1) {
            return "youtube";
        }
        return "vimeo";
    };
    VidComponent.prototype.getVideoId = function () {
        if (this.getVideoSource() === "youtube") {
            var video_id = this.video.videoUrl.split('v=')[1];
            var ampersandPosition = video_id.indexOf('&');
            if (ampersandPosition != -1) {
                video_id = video_id.substring(0, ampersandPosition);
            }
            return video_id;
        }
        var regExp = /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/;
        var parseUrl = regExp.exec(this.video.videoUrl);
        return parseUrl[5];
    };
    VidComponent = __decorate([
        core_1.Component({
            selector: 'vid',
            templateUrl: 'app/vid/vid.component.html',
            providers: [video_service_1.VideoService],
            directives: [spinner_component_1.SpinnerComponent],
            styles: ["\n        .my-video {\n            margin-top:12px;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [video_service_1.VideoService, router_deprecated_1.RouteParams])
    ], VidComponent);
    return VidComponent;
}());
exports.VidComponent = VidComponent;
//# sourceMappingURL=vid.component.js.map