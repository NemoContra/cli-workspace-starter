import { Component, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'fl-app-navbar',
  templateUrl: 'navbar.component.html'
})
export class NavbarComponent {

  private sidebarVisible = false;

  constructor(@Inject(DOCUMENT) private document: Document,
              private renderer: Renderer2) {
  }

  sidebarToggle() {
    if (this.sidebarVisible === false) {
      this.renderer.addClass(this.document.body, 'nav-open');
      this.sidebarVisible = true;
    } else {
      this.sidebarVisible = false;
      this.renderer.removeClass(this.document.body, 'nav-open');
    }
  }
}
