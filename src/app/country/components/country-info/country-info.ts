import { Component, computed, input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'country-info',
  imports: [DecimalPipe],
  templateUrl: './country-info.html',
})
export class CountryInfo {

  country = input.required<Country>();

  currentYear = computed(() => new Date().getFullYear());

}
