import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  template: `<div class="container">
              <router-outlet></router-outlet>
             </div>`,
  styles: []
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
