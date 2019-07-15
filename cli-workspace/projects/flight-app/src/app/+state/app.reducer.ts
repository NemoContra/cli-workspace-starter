import { createReducer, on, Action } from '@ngrx/store';
import { increment } from './app.actions';

export interface AppState {
  count: number;
}

export const initialState: AppState = {
  count: 0
};

const reducer = createReducer(
  initialState,
  on(increment,
    (state): AppState => ({
      ...state,
      count: state.count + 1
    })
  )
);

export function appReducer(state: AppState, action: Action) {
  return reducer(state, action);
}
