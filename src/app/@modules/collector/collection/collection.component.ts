import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base.component';
import { CollectionsService } from '../../../@core/services/collections.service';
import { ToastrService } from '../../../../../node_modules/ngx-toastr';
import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { ApiResponse } from '../../../@core/models/ApiResponse';
import types from '../../../../assets/files/collectionTypes.json';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.sass']
})
export class CollectionComponent extends BaseComponent implements OnInit {

  public collectionTypes;
  public newObject = { name: '', img: '', status: 0, amount: 0 };

  constructor(public service: CollectionsService,
    public toastr: ToastrService,
    public router: Router,
    public activatedRoute: ActivatedRoute) {
    super();

    this.collectionTypes = types;
    activatedRoute.params.subscribe(params => {
      this.loadElement(params['id']);
    });
  }

  ngOnInit() {
  }

  createObject(closeBtn, form) {
    console.log(this.newObject);

    this.loading = true;
    closeBtn.click();
    // this.newCollection.user = this.service.getCurrentUser().user;

    this.service.update(this.element._id, this.newObject)
    .subscribe((response: ApiResponse) => {
      this.loading = false;
      this.newObject = { name: '', img: '', status: 0, amount: 0 };
      if (response.result) {
        console.log(response);
        this.toastr.success('El artículo se ha agregado.');
        form.resetForm();
        // this.data.push(response.data);
      } else {
        this.toastr.error(response.message);
      }
    }, (error) => {
      this.loading = false;
      form.resetForm();
      this.newObject = { name: '', img: '', status: 0, amount: 0 };
      this.toastr.error('Ha ocurrido un error inesperado por favor vuelve a intentarlo.');
      console.log('server error!', error);
    });

  }

  getCollectionType(type) {
    const pos = this.collectionTypes.map(function(e) { return e.id; }).indexOf(type);
    return `${this.collectionTypes[pos].icon} ${this.collectionTypes[pos].name}`;
  }

}
