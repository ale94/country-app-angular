import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country';
import { NotFound } from '../../../shared/components/not-found/not-found';
import { CountryInfo } from '../../components/country-info/country-info';

@Component({
  selector: 'app-country-page',
  imports: [NotFound, CountryInfo],
  templateUrl: './country-page.html'
})
export class CountryPage {

  countryCode = inject(ActivatedRoute).snapshot.params['code'];
  countryService = inject(CountryService);

  countryResource = rxResource({
    params: () => ({ code: this.countryCode }),
    stream: ({ params }) => this.countryService.searchByCountryAlphaCode(params.code)
  })

}
