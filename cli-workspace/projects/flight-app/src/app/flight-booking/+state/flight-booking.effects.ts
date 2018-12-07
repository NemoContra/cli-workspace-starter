import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  FlightBookingActionTypes, FlightsLoadedSuccess,
  LoadFlights
} from './flight-booking.actions';
import { Flight, FlightService } from '@flight-workspace/flight-api';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class FlightBookingEffects {

  @Effect()
  loadFlights$ = this.actions$.pipe(
    ofType(FlightBookingActionTypes.LoadFlights),
    switchMap((action: LoadFlights) => {
      // Effects logic here
      return this.fs
        .find(action.payload.from, action.payload.to)
        .pipe(
          map((flights: Flight[]) => new FlightsLoadedSuccess({flights: flights})),
        );
    })
  )


  constructor(private actions$: Actions, private fs: FlightService) {}
}
