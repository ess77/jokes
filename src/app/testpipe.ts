import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({name: 'positiveNumbers'})
export class PositivePipe implements PipeTransform {
    transform(value: number[]) {
        return value.filter(v => v > 0);
    }
}
