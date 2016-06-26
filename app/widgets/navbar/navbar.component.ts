import { Component } from '@angular/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {RegisterComponent} from '../register/register.component';
import {LoginComponent} from '../login/login.component';

declare var $:any;

@Component ({
    selector: 'navbar',
    templateUrl: 'app/widgets/navbar/navbar.component.html',
    directives: [ROUTER_DIRECTIVES, RegisterComponent, LoginComponent]
})

export class NavbarComponent {
    constructor (private _router: Router){

    }
    isActive(instruction: any[]): boolean {
        return this._router.isRouteActive(this._router.generate(instruction));
    }
    onRegisterClick() {
        $('.ui.modal.register').modal('show');
    }
    onLoginClick() {
        $('.ui.modal.login').modal('show');
    }
}