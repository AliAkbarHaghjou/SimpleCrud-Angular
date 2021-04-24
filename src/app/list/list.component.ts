import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../interfaces/Task';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(private service: TaskService) {}

  tasks: Task[] = [];

  ngOnInit() {
    this.service.getAll().subscribe((result) => {
      this.tasks = result;
    });
  }
}
