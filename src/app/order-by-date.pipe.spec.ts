/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { OrderByDatePipe } from './order-by-date.pipe';
//To display events from old to new dates
describe('OrderByDatePipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByDatePipe();
    expect(pipe).toBeTruthy();
  });
});
