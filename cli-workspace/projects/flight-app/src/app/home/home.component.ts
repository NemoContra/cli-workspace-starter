import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { AppState } from '../+state/app.reducer';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCount } from '../+state/app.selectors';
import { increment } from '../+state/app.actions';

@Component({
  selector: 'fl-app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  constructor(private route: ActivatedRoute, private store: Store<AppState>) {
    this.count$ = this.store.pipe(select(selectCount));
  }

  count$: Observable<number>;

  needsLogin: boolean;
  _userName = '';

  ngOnInit() {
    this.route.params
      .pipe(pluck('needsLogin'))
      .subscribe(
        (v: boolean) => this.needsLogin = v
      );
  }

  get userName(): string {
    return this._userName;
  }

  login(): void {
    this._userName = 'Login will be implemented in another exercise!';
  }

  logout(): void {
    this._userName = '';
  }

  increment(): void {
    this.store.dispatch(increment());
  }
}
