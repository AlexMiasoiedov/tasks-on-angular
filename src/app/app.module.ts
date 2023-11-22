import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from './components/header/header.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ButtonComponent } from "./components/button/button.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
