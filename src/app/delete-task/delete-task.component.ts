import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Task } from '../interfaces/Task';
import { DataService } from '../services/data.service';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css'],
})
export class DeleteTaskComponent implements OnInit {
  @Input() currentTask: Task;
  title: string = '';

  constructor(private serviceModal: NgbModal, private service: TaskService) {}

  ngOnInit(): void {}

  ShowModal(content: any) {
    this.title = this.currentTask.title;
    this.serviceModal.open(content);
  }

  DeleteTask() {
    this.service.Delete(this.currentTask.id);
    this.serviceModal.dismissAll();
  }
}
