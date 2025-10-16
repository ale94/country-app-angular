import { Country } from "../interfaces/country";
import { RESTCountry } from "../interfaces/rest-countries";

export class CountryMapper {

  static mapRestCountryToCountry(restCountry: RESTCountry): Country {
    return {
      "cca2": restCountry.cca2,
      "flag": restCountry.flag,
      "flagSvg": restCountry.flags.svg,
      "name": restCountry.name.common,
      "capital": restCountry.capital.join(","),
      "population": restCountry.population
    }
  }

  static mapRestCountryArrayToCountryArray(restcountries: RESTCountry[]): Country[] {
    return restcountries.map(this.mapRestCountryToCountry);
  }

}
