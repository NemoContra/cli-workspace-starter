import { Action } from '@ngrx/store';
import {Flight} from '@flight-workspace/flight-api';

export enum FlightBookingActionTypes {
  LoadFlights = '[FlightBooking] Load Flights',
  FlightsLoadedSuccess = '[FlightBooking] Flights Loaded Success',
}

export class LoadFlights implements Action {
  readonly type = FlightBookingActionTypes.LoadFlights;
  constructor(public payload: { from: string, to: string }) {}
}

export class FlightsLoadedSuccess implements Action {
  readonly type = FlightBookingActionTypes.FlightsLoadedSuccess;
  constructor(public payload: { flights: Flight[]}) {}
}

export type FlightBookingActions = LoadFlights | FlightsLoadedSuccess;
