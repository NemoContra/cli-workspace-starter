import { createAction, props } from '@ngrx/store';
import { Flight } from '@flight-workspace/flight-api';

export const flightSearch = createAction(
  '[Flight] search flights',
  props<{from: string, to: string}>()
);

export const flightSearchReturned = createAction(
  '[Flight] search flights returned',
  props<{ flights: Flight[] }>()
);
