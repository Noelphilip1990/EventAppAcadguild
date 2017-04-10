import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByDate'
})
export class OrderByDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
	  value.sort((a: any, b: any) => {
		  if (a.date < b.date) {
			  return -1;
		  } else if (a.date > b.date) {
			  return 1;
		  } else {
			  return 0;
		  }
	  });
	  return value;
  }

}
