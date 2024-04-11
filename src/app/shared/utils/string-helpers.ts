import { Injectable } from '@angular/core';

@Injectable()
export class StringHelpers {
  public static format(baseUrl: string, ...replacements: string[]) {
    const args = replacements;
    return baseUrl.replace(/{(\d+)}/g, (match: string, numberParam: any) => {
      return typeof args[numberParam] !== 'undefined'
        ? args[numberParam]
        : match;
    });
  }
}
