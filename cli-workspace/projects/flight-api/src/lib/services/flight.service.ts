import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Flight } from '../models/flight';

@Injectable()
export class FlightService {
  flights: Flight[] = [];
  baseUrl = `http://www.angular.at/api`;
  reqDelay = 1000;

  constructor(private http: HttpClient) {
  }

  load(from: string, to: string, urgent: boolean): void {
    this.find(from, to, urgent)
      .subscribe(
        flights => {
          this.flights = flights;
        },
        err => console.error('Error loading flights', err)
      );
  }

  find(from: string, to: string, urgent: boolean = false): Observable<Flight[]> {

    // For offline access
    // let url = '/assets/data/data.json';

    // For online access
    let url = `${this.baseUrl}/secureflight`;

    if (urgent) {
      url = `${this.baseUrl}/error?code=403`;
    }

    const params = new HttpParams()
      .set('from', from)
      .set('to', to);

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    const reqObj = { params, headers };
    return this.http.get<Flight[]>(url, reqObj);
    // return of(flights).pipe(delay(this.reqDelay))

  }

  findById(id: string): Observable<Flight> {
    const reqObj = { params: null };
    reqObj.params = new HttpParams().set('id', id);
    const url = `${this.baseUrl}/secureflight`;
    return this.http.get<Flight>(url, reqObj);
    // return of(flights[0]).pipe(delay(this.reqDelay))
  }

  save(flight: Flight): Observable<Flight> {
    const url = `${this.baseUrl}/secureflight`;
    return this.http.post<Flight>(url, flight);
  }

  delay(): void {
    const ONE_MINUTE = 1000 * 60;

    const oldFlights = this.flights;
    const oldFlight = oldFlights[0];
    const oldDate = new Date(oldFlight.date);

    // Mutable
    oldDate.setTime(oldDate.getTime() + 15 * ONE_MINUTE);
    oldFlight.date = oldDate.toISOString();
  }
}
