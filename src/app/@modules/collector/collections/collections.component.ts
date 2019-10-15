import { Component, OnInit } from '@angular/core';
import types from '../../../../assets/files/collectionTypes.json';
import { BaseComponent } from '../../base.component';
import { CollectionsService } from '../../../@core/services/collections.service';
import { ToastrService } from 'ngx-toastr';
import { ApiResponse } from '../../../@core/models/ApiResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.sass']
})
export class CollectionsComponent extends BaseComponent implements OnInit {

  public newCollection = { name: '', type: 1, user: '' };
  public collectionTypes;

  constructor(public service: CollectionsService,
    public toastr: ToastrService,
    private router: Router) {
    super();
    this.collectionTypes = types;
  }

  ngOnInit() {
    this.loadData();
  }

  createCollection(closeBtn, form) {

    this.loading = true;
    closeBtn.click();
    this.newCollection.user = this.service.getCurrentUser().user;

    this.service.create(this.newCollection)
    .subscribe((response: ApiResponse) => {
      this.loading = false;
      this.newCollection = { name: '', type: 1, user: '' };
      if (response.result) {
        this.toastr.success('La colección ha sido creada.');
        form.resetForm();
        this.data.push(response.data);
      } else {
        this.toastr.error(response.message);
      }
    }, (error) => {
      this.loading = false;
      form.resetForm();
      this.newCollection = { name: '', type: 1, user: '' };
      this.toastr.error('Ha ocurrido un error inesperado por favor vuelve a intentarlo.');
      console.log('server error!', error);
    });
  }

  changeCollection(collection) {
    this.router.navigate([`/collection/${collection}`]);
  }

  getCollectionType(type) {
    const pos = this.collectionTypes.map(function(e) { return e.id; }).indexOf(type);
    return `${this.collectionTypes[pos].icon} ${this.collectionTypes[pos].name}`;
  }

}
