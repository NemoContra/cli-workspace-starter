import { Action, createReducer, on } from '@ngrx/store';
import { Flight } from '@flight-workspace/flight-api';
import { flightSearch, flightSearchReturned } from './flight.actions';

export interface FlightState {
  flights: Flight[];
}

export const initialState: FlightState = {
  flights: []
};

const reducer = createReducer(
  initialState,
  on(flightSearch,
    (state): FlightState => ({
      ...state
    })
  ),
  on(flightSearchReturned,
    (state, {flights}): FlightState => ({
      ...state,
      flights
    })
  )
);

export function flightReducer(state: FlightState, action: Action) {
  return reducer(state, action);
}
