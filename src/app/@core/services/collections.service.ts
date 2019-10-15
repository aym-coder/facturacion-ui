import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Service } from './service';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService extends Service {

  protected prefix = 'collections';

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

}
