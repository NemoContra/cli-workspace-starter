import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Flight } from '@flight-workspace/flight-api';
import { concatMap, delay, exhaustMap, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public updateCounter = 0;
  public data$: Observable<Flight[]>;

  private flights$: Observable<Flight[]> = this.httpClient.get<Flight[]>('/api/flight');
  private clickSubject = new Subject<boolean>();

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.data$ = this.clickSubject.pipe(
      switchMap(() => this.flights$),
      tap(() => this.updateCounter++)
    );
  }

  loadFlights(): void {
    this.clickSubject.next(true);
  }

  resetCounter(): void {
    this.updateCounter = 0;
  }
}
