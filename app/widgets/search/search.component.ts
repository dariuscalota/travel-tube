import {Component, Input} from '@angular/core';
import { Router } from '@angular/router-deprecated';

@Component ({
    selector: 'search',
    templateUrl: 'app/widgets/search/search.component.html',
    inputs: ['searchSize']
})

export class SearchComponent {
    @Input() searchSize:string = "small"; /* can be: mini / small / large / big / huge / massive */ 
    constructor(private router: Router) { }
    onSubmit(data) {
        let params = (data.search === null) ? "" : data.search;
        this.router.navigateByUrl('/videos?search='+params);
    }
}