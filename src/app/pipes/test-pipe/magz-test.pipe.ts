import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'MagzTestPipe' })
export class MagzTestPipe implements PipeTransform {
  transform(value: string): string {
    return value + '-Magz';
  }
}
