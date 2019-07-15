import { Component, OnInit } from '@angular/core';
import {Flight, FlightService} from '@flight-workspace/flight-api';
import { FlightState } from '../+state/flight.reducer';
import { select, Store } from '@ngrx/store';
import { selectFlights } from '../+state/flight.selectors';
import { Observable } from 'rxjs';
import { flightSearch } from '../+state/flight.actions';

@Component({
  selector: 'fl-app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {
  from = 'Hamburg'; // in Germany
  to = 'Graz'; // in Austria
  urgent = false;

  get flights$(): Observable<Flight[]> {
    return this.store.pipe(select(selectFlights));
  }

  // "shopping basket" with selected flights
  basket: {[key: number]: boolean} = {
    3: true,
    5: true
  };

  constructor(
    private flightService: FlightService,
    private store: Store<FlightState>) {
  }

  ngOnInit() {
  }

  search(): void {
    if (!this.from || !this.to) {
      return;
    }

    this.store.dispatch(flightSearch({from: this.from, to: this.to}));
  }

  delay(): void {
    this.flightService.delay();
  }
}
