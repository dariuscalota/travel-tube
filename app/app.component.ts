import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {Observable} from 'rxjs/Rx';


import { LandingComponent } from './landing/landing.component';
import { VideosComponent } from './videos/videos.component';

@RouteConfig([
    {
        path: '/landing',
        name: 'Landing',
        component: LandingComponent,
        useAsDefault: true
    },
    {
        path: '/videos',
        name: 'Videos',
        component: VideosComponent
    }
])

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})

export class AppComponent { 
    
}
