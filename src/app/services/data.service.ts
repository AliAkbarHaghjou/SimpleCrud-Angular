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
}
