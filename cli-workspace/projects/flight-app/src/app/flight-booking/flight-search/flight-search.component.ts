import { Component, OnDestroy, OnInit } from '@angular/core';
import { Flight, FlightService } from '@flight-workspace/flight-api';
import { select, Store } from '@ngrx/store';
import * as fromFlightBooking from '../+state/flight-booking.selectors'
import { LoadFlights } from '../+state/flight-booking.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'fl-app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit, OnDestroy {
  from = 'Hamburg'; // in Germany
  to = 'Graz'; // in Austria
  urgent = false;

  flightSubscription: Subscription;
  flights: Flight[];

  // "shopping basket" with selected flights
  basket: { [key: number]: boolean } = {
    3: true,
    5: true
  };

  constructor(private flightService: FlightService,
              private store: Store<any>) {
    this.store.pipe(select(fromFlightBooking.getFlights)).subscribe((flights: Flight[]) => {
      this.flights = flights;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.flightSubscription.unsubscribe();
  }

  search(): void {
    if (!this.from || !this.to) return;

    const action = new LoadFlights({from: this.from, to: this.to});
    this.store.dispatch(action);
  }

  delay(): void {
    this.flightService.delay();
  }
}
