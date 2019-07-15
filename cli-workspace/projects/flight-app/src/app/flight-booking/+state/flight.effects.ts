import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FlightService } from '@flight-workspace/flight-api';
import { flightSearch, flightSearchReturned } from './flight.actions';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class FlightEffects {

  searchFlights$ = createEffect(() =>
    this.actions$.pipe(
      ofType(flightSearch),
      switchMap(({from, to}) =>
        this.flightService.find(from, to).pipe(
          map(flights => flightSearchReturned({flights}))
        )
      )
    )
  );

  constructor(private actions$: Actions, private flightService: FlightService) {
  }
}
