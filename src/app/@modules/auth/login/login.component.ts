import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BaseComponent } from '../../base.component';
import { UserService } from '../../../@core/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { ApiResponse } from '../../../@core/models/ApiResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent extends BaseComponent implements OnInit {

  public user = {
    email: '',
    password: ''
  };

  constructor(public service: UserService,
    public toastr: ToastrService) {
    super();
  }

  ngOnInit() {
  }

  login() {
    this.loading = true;

    this.service.login(this.user.email, this.user.password)
    .subscribe((response: ApiResponse) => {
      this.loading = false;
      if (response.result) {
        window.location.replace('');
      } else {
        this.toastr.error(response.message);
      }
    }, (error) => {
      this.loading = false;
      this.toastr.error('Ha ocurrido un error inesperado por favor vuelve a intentarlo.');
      console.log('server error!', error);
    });

  }

}
