import { Component } from '@angular/core';
import { SearchComponent } from '../widgets/search/search.component';

@Component({
    selector: 'landing',
    templateUrl: 'app/landing/landing.component.html',
    styleUrls: ['app/landing/landing.css'],
    directives: [SearchComponent]
})

export class LandingComponent {
    searchSize="massive";
}