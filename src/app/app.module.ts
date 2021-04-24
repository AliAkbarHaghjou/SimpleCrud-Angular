import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskService } from './services/task.service';

@NgModule({
  declarations: [AppComponent, ListComponent, AddTaskComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule],
  providers: [TaskService],
  bootstrap: [AppComponent],
})
export class AppModule {}
