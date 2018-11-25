import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Flight } from '@flight-workspace/flight-api';
import { delay, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public data$: Observable<Flight[]>;

  private flights$: Observable<Flight[]> = this.httpClient.get<Flight[]>('/api/flight');

  private clickSubject = new Subject<boolean>();

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.data$ = this.clickSubject.pipe(
      switchMap(() => this.flights$)
    );
  }

  onClick(): void {
    this.clickSubject.next(true);
  }
}
