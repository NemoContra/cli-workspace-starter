import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'fl-app-navbar',
  templateUrl: 'navbar.component.html'
})
export class NavbarComponent {

  private sidebarVisible = false;

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  sidebarToggle() {
    const body: HTMLBodyElement = this.document.querySelector('body');

    if (this.sidebarVisible === false) {
      body.classList.add('nav-open');
      this.sidebarVisible = true;
    } else {
      this.sidebarVisible = false;
      body.classList.remove('nav-open');
    }
  }
}
