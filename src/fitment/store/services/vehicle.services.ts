import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class VehicleServices {
  public endpoint = 'https://6080be3273292b0017cdbf2a.mockapi.io';

  public handleError(apiCall: string) {
    return (error: HttpErrorResponse): Observable<any> => {
      return throwError(error);
    };
  }

  getYears(): Observable<[]> {
    const url = `${this.endpoint}/years`;
    return this.http.get<any>(url).pipe(
      map((response) => response.year),
      catchError(this.handleError('getYears'))
    );
  }

  getMakes(year: string): Observable<[]> {
    const url = `${this.endpoint}/makes?year=${year}`;
    return this.http.get<any>(url).pipe(
      map((response) => response.make),
      catchError(this.handleError('getMakes'))
    );
  }

  getModels(year: string, make: string): Observable<[]> {
    const url = `${this.endpoint}/models?year=${year}&make=${make}`;
    return this.http.get<any>(url).pipe(
      map((response) => response.model),
      catchError(this.handleError('getModels'))
    );
  }

  getTrims(year: string, make: string, model: string): Observable<[]> {
    const url = `${this.endpoint}/trim?year=${year}&make=${make}&model=${model}`;
    return this.http.get<any>(url).pipe(
      map((response) => response.trim),
      catchError(this.handleError('getTrims'))
    );
  }

  constructor(private http: HttpClient) {}
}
