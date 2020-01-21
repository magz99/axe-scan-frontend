import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'stripSuffix' })
export class StripSuffixPipe implements PipeTransform {
  transform(value: string, replaceMe?: string): string {
    const replaceRegex = replaceMe
      ? new RegExp(replaceMe, 'g')
      : new RegExp(/[\/]/, 'g');
    return value.replace(replaceRegex, '');
  }
}
