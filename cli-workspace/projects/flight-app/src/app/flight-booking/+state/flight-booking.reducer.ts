import { FlightBookingActions, FlightBookingActionTypes } from './flight-booking.actions';
import { Flight } from '@flight-workspace/flight-api';

export interface State {
  flights: Flight[]
}

export const initialState: State = {
  flights: []
};

export function reducer(state = initialState, action: FlightBookingActions): State {
  switch (action.type) {
    case FlightBookingActionTypes.FlightsLoadedSuccess:
      return {
        ...state,
        flights: action.payload.flights
      };
    default:
      return state;
  }
}
