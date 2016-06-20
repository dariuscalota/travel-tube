import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {Observable} from 'rxjs/Rx';

import { VidComponent } from './vid/vid.component';
import { LandingComponent } from './landing/landing.component';
import { VideosComponent } from './videos/videos.component';
import { NavbarComponent } from './widgets/navbar/navbar.component';

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
    },
    {
        path: '/videos/:title/:_id',
        name: 'Vid',
        component: VidComponent
    }
])

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES, NavbarComponent],
    providers: [ROUTER_PROVIDERS]
})

export class AppComponent { 
    
}
