import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Video} from '../models/video';

@Injectable()
export class VideoService {
    private _url = "https://api-traveltube.herokuapp.com/videos";

    constructor(private _http: Http) {

    }

    getVideos() : Observable<Video[]> {
        return this._http.get(this._url)
            .map(res => res.json());
    }
}