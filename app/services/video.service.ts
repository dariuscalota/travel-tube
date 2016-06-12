import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';

@Injectable()
export class VideoService {
    private _url = "https://api-traveltube.herokuapp.com/videos";

    constructor(private _http: Http) {

    }

    getVideos() {
        return this._http.get(this._url)
            .map(res => res.json());
    }
}