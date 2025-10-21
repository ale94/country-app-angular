import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries';
import { catchError, map, Observable, throwError } from 'rxjs';
import { CountryMapper } from '../mappers/country-mapper';
import { Country } from '../interfaces/country';

const API_URL = "https://restcountries.com/v3.1";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient);

  searchByCapital(query: string): Observable<Country[]> {
    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query.toLowerCase()}`)
      .pipe(
        map(resp => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
        catchError(error => {
          // console.log("Error fetching", error);
          return throwError(() => new Error(`No se pudo obtener paises con ese query ${query}`))
        })
      )
  }

  searchByCountry(query: string): Observable<Country[]> {
    return this.http.get<RESTCountry[]>(`${API_URL}/name/${query.toLowerCase()}`)
      .pipe(
        map(resp => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
        catchError(error => {
          // console.log("Error fetching", error);
          return throwError(() => new Error(`No se pudo obtener paises con ese query ${query}`))
        })
      )
  }

}
