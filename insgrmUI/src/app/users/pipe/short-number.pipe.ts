import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortNumber'
})
export class ShortNumberPipe implements PipeTransform {

  transform(value: number): string {
    if (isNaN(value)) return '-';

    if (value >= 1000000)
        return (value / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';

    if (value >= 1000)
        return (value / 1000).toFixed(1).replace(/\.0$/, '') + 'K';

    return value.toString();
  }

}