import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable()
export class DataService {
  constructor(@Inject(String) private url: string, private http: HttpClient) {}

  getAll() {
    return this.http
      .get(this.url.toString())
      .pipe(map((response: any) => response));
  }

  Create(resource: any) {
    this.http
      .post(this.url, JSON.stringify(resource))
      .pipe(map((response: any) => response));
  }

  Update(resource: any) {
    this.http
      .put(this.url + '/' + resource.Id, JSON.stringify(resource))
      .pipe(map((response: any) => response));
  }

  Delete(id: number) {
    this.http
      .delete(this.url + '/' + id)
      .pipe(map((response: any) => response));
  }
}
