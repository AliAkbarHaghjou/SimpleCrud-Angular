import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskService } from '../services/task.service';
import { Task } from '../interfaces/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  title = new FormControl('');
  newTask: Task[] = [];

  constructor(private modalService: NgbModal, private service: TaskService) {}

  ShowModal(content: any) {
    this.modalService.open(content);
  }

  CreateTask() {
    let newpost: Task = {
      id: 201,
      userId: 1,
      title: this.title.value,
      completed: false,
    };
    this.service.Create(newpost);
    this.title.setValue('');
    this.modalService.dismissAll();
  }
}
