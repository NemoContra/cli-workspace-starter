import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FlightState } from './flight.reducer';

const getFlightState = createFeatureSelector<FlightState>('flight');

export const selectFlights = createSelector(
  getFlightState,
  (state: FlightState) => state.flights
);
