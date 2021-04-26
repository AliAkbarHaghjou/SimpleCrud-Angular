import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Task } from '../interfaces/Task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css'],
})
export class UpdateTaskComponent implements OnInit {
  title = new FormControl('');
  @Input() currentTask: Task;

  constructor(private modelService: NgbModal, private service: TaskService) {}

  ngOnInit(): void {}

  ShowModal(content: any) {
    this.title.setValue(this.currentTask?.title);
    this.modelService.open(content);
  }

  update() {
    this.currentTask.title = this.title.value;
    this.service.Update(this.currentTask);
    console.log(this.currentTask);
    this.modelService.dismissAll();
  }
}
