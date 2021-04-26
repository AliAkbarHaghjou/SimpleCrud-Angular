import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskService } from './services/task.service';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';

@NgModule({
  declarations: [AppComponent, ListComponent, AddTaskComponent, UpdateTaskComponent, DeleteTaskComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [TaskService],
  bootstrap: [AppComponent],
})
export class AppModule {}
