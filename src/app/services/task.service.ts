import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

@Injectable()
export class TaskService extends DataService {
  constructor(http: HttpClient) {
    super('https://jsonplaceholder.cypress.io/todos', http);
  }
}
