import { State as FlightBooking } from './flight-booking.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getFlightBookingState = createFeatureSelector('flightBooking');

export const getFlights = createSelector(
  getFlightBookingState,
  (state: FlightBooking) => state.flights
);

export const getIsFlightsPending = createSelector(
  getFlightBookingState,
  (state: FlightBooking) => state.isFlightsPending
);
