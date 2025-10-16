import { Component, input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'country-list',
  imports: [],
  templateUrl: './list.html'
})
export class List {

  countries = input.required<Country[]>();

}
