import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {
  FlightBookingActionTypes,
  LoadFlights
} from './flight-booking.actions';

@Injectable()
export class FlightBookingEffects {

  @Effect()
  effect$ = this.actions$.pipe(ofType<LoadFlights>(FlightBookingActionTypes.LoadFlights));

  constructor(private actions$: Actions) {}
}
