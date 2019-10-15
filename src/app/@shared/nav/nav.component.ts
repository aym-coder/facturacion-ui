import { Component, OnInit } from '@angular/core';
import { UserService } from '../../@core/services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  constructor(public service: UserService) { }

  ngOnInit() {
  }

  logout() {
    this.service.logout();
  }

}
