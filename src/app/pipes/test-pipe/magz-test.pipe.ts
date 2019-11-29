import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'stripSuffix' })
export class MagzTestPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace('/', '');
  }
}
