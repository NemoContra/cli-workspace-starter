import { Component, OnInit } from '@angular/core';
import { Flight, FlightService } from '@flight-workspace/flight-api';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromFlightBooking from '../+state/flight-booking.selectors'
import { FlightsLoadedSuccess } from '../+state/flight-booking.actions';

@Component({
  selector: 'fl-app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {
  from = 'Hamburg'; // in Germany
  to = 'Graz'; // in Austria
  urgent = false;

  flights$: Observable<Flight[]>;

  get flights(): Flight[] {
    return this.flightService.flights;
  }

  // "shopping basket" with selected flights
  basket: { [key: number]: boolean } = {
    3: true,
    5: true
  };

  constructor(private flightService: FlightService,
              private store: Store<any>) {
    this.flights$ = this.store.pipe(select(fromFlightBooking.getFlights));
  }

  ngOnInit() {
  }

  search(): void {
    if (!this.from || !this.to) return;

    this.flightService
      .find(this.from, this.to, this.urgent)
      .subscribe(
        flights => {
          const action = new FlightsLoadedSuccess({flights: flights});
          this.store.dispatch(action);
        }
      );
  }

  delay(): void {
    this.flightService.delay();
  }
}
