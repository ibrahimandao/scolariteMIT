import { Injectable } from '@angular/core';
import { HashTable } from 'angular-hashtable';

type FormatFunc = (date: Date) => string;
@Injectable({
  providedIn: 'root'
})
export class DateFormatService {
  formattingTokenFunc: any = [];

  private formattingTokens = /(HH?|HH?|hh?|mm?|ss?|MM?|dd?|yy?y?y?|.)/g;

  constructor() {
    // add years function
    const getYearFunc = (date: Date) => date.getFullYear().toString();

    // Year, no leading zero (e.g. 2015 would be 15)
    this.addFormatToken('y', 0, (date: Date) =>
      (date.getFullYear() % 100).toString()
    );
    this.addFormatToken('yyy', 0, getYearFunc);
    this.addFormatToken('yyyy', 0, getYearFunc);
    // Year, leading zero (e.g. 2015 would be 015)
    this.addFormatToken('yy', 3, (date: Date) =>
      (date.getFullYear() % 100).toString()
    );

    // add months function
    const getMonthFunc = (date: Date) => (date.getMonth() + 1).toString();

    this.addFormatToken('M', 0, getMonthFunc);
    this.addFormatToken('MM', 2, getMonthFunc);

    // add day function
    const getDayFunc = (date: Date) => date.getDate().toString();

    this.addFormatToken('d', 0, getDayFunc);
    this.addFormatToken('dd', 2, getDayFunc);

    // add hours function
    const get12HrFunc = (date: Date) => (date.getHours() % 12).toString();

    // 12-hour clock, with a leading 0 eg (e.g. 06)
    this.addFormatToken('hh', 2, get12HrFunc);
    // 12-hour clock hour
    this.addFormatToken('h', 0, get12HrFunc);

    const get24HrFunc = (date: Date) => date.getHours().toString();

    this.addFormatToken('HH', 2, get24HrFunc);
    this.addFormatToken('H', 0, get24HrFunc);

    // add minute function
    const getMinFunc = (date: Date) => date.getMinutes().toString();
    this.addFormatToken('m', 0, getMinFunc);
    // Minutes with a leading zero
    this.addFormatToken('mm', 2, getMinFunc);

    // add seconds function
    const getSecFunc = (date: Date) => date.getSeconds().toString();
    this.addFormatToken('s', 0, getSecFunc);
    this.addFormatToken('ss', 2, getSecFunc);
  }

  formatToISO8601Date(date: Date | string): string {
    return this.format(date, 'yyyy-MM-dd');
  }

  format(date: Date | string, format: string): string {
    const finalDate = date instanceof Date ? date : new Date(date);

    const matches = format.match(this.formattingTokens);
    let result = '';

    if(matches != null)
      matches.forEach(match => {
        // const hasFunc = this.formattingTokenFunc.hasOwnProperty('match');
        const formatFunc = this.formattingTokenFunc[match];

        result += formatFunc ? formatFunc(finalDate) : match;
      });

    return result;
  }

  prefixZero(length: number, input: string): string {
    return `${Math.pow(10, length)}${input}`.slice(-1 * length);
  }

  prefixZeroFunc(length: number, formatFunc: FormatFunc): FormatFunc {
    return (c: Date) => this.prefixZero(length, formatFunc(c));
  }

  private addFormatToken(
    token: string,
    addZeroesLength: number,
    // formatFunc: ((date: Date) => string)
    formatFunc: FormatFunc
  ): void {
    this.formattingTokenFunc[token] =
      addZeroesLength > 0
        ? this.prefixZeroFunc(addZeroesLength, formatFunc)
        : formatFunc;
  }
}