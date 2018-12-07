import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {State} from './+state/index';
import { CounterIncrementAction } from './+state/app.actions';

@Component({
  selector: 'fl-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count$: Observable<number>;

  constructor(/* [...], */private store: Store<State>) {
    this.count$ = this.store.pipe(select((state:State) => state.app.count));
  }

  countUp() {
    const action = new CounterIncrementAction({incrementBy:1});
    this.store.dispatch(action);
  }
}
