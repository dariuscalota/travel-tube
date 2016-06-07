import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';

@Component({
    selector: 'landing',
    templateUrl: 'app/landing/landing.component.html',
    styleUrls: ['app/landing/landing.css']
})

export class LandingComponent {
    constructor(private router: Router) { }
    data: string;
    onSubmit(data) {
        this.data = JSON.stringify(data, null, 2);
        console.log(this.data);
        this.router.navigate(['Videos']);
    }
}