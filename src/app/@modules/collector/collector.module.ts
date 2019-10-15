import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectorRoutingModule } from './collector-routing.module';
import { CollectorComponent } from './collector.component';
import { CollectionsComponent } from './collections/collections.component';
import { SharedModule } from '../../@shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollectionComponent } from './collection/collection.component';

@NgModule({
  declarations: [
    CollectorComponent,
    CollectionsComponent,
    CollectionComponent
  ],
  imports: [
    CommonModule,
    CollectorRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CollectorModule { }
