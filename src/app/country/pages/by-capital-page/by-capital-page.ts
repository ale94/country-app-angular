import { Component, inject, signal } from '@angular/core';
import { SearchInput } from '../../components/search-input/search-input';
import { List } from "../../components/list/list";
import { CountryService } from '../../services/country';
import { RESTCountry } from '../../interfaces/rest-countries';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInput, List],
  templateUrl: './by-capital-page.html'
})
export class ByCapitalPage {

  countryService = inject(CountryService);
  isLoading = signal(false);
  isError = signal<string | null>(null);
  countries = signal<Country[]>([]);

  onSearch(query: string) {
    if (this.isLoading()) return;
    this.isLoading.set(true);
    this.isError.set(null);
    this.countryService.searchByCapital(query).subscribe(countries => {
      this.isLoading.set(false);
      this.countries.set(countries);
    });
  }
}
