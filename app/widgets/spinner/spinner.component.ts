import { Component, Input } from '@angular/core';

@Component({
    selector: 'spinner',
    templateUrl: 'app/widgets/spinner/spinner.component.html'
})

export class SpinnerComponent {
    @Input() isLoading: boolean = true;
}