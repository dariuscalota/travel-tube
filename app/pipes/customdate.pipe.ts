import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'customdate'
})

export class CustomDatePipe implements PipeTransform{
    transform(value: string, args: string) {
        // var limit = (args) ? parseInt(args) : "value";
        return new Date(value);
    }
}