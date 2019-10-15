import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collector',
  template: `
            <app-nav></app-nav>
            <div class="container-fluid mt-4">
              <div class="row">
                <div class="col-2 d-none d-lg-block" style="border-right: 1px solid #dee2e6;">
                  <app-side-nav [onMainCollection]="onMainCollection"></app-side-nav>
                </div>
                <div class="col-lg-10 col-12">
                  <router-outlet (activate)="changeOfRoute()"></router-outlet>
                </div>
              </div>
             </div>`,
  styles: []
})
export class CollectorComponent implements OnInit {

  public onMainCollection = true;

  constructor(public router: Router) { }

  ngOnInit() {
  }

  changeOfRoute() {
    if (this.router.url.startsWith('/collection')) {
      this.onMainCollection = false;
    } else {
      this.onMainCollection = true;
    }
  }

}
