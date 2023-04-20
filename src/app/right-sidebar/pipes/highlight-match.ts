import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Highlight',
})
export class Highlight implements PipeTransform {
  transform(value: string, args: string, ..._args: any): string {
    if (!args) {
      return value;
    }
    
    const regex = new RegExp(args, 'gi');
    const match = value.match(regex);
    console.log("args",args)
    console.log("value",value)
    console.log("match",match)
    if (!match) {
      return value;
    }

    return value.replace(regex, `<span class='highlight'>${match[0]}</span>`);
  }
}
