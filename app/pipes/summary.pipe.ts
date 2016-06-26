import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'summary'
})

export class SummaryPipe implements PipeTransform{
    transform(value: string, args: string) {
        var limit = (args) ? parseInt(args) : 50;
        if(value){
            return value.substring(0, limit) +  "...";
        }
    }
}