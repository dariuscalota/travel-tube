import { Component } from '@angular/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component ({
    selector: 'navbar',
    templateUrl: 'app/widgets/navbar/navbar.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class NavbarComponent {
    constructor (private _router: Router){

    }
    isActive(instruction: any[]): boolean {
        return this._router.isRouteActive(this._router.generate(instruction));
    }
}