import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'fl-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private snackBar: MatSnackBar, private swUpdate: SwUpdate) {
    this.setupUpdates();
  }

  setupUpdates() {
    this.swUpdate.available.subscribe(u => {
      this.swUpdate.activateUpdate().then(e => {
        this.snackBar.open("App updated -- please reload!", "OK");
      });
    });

    this.swUpdate.checkForUpdate();

  }
}
