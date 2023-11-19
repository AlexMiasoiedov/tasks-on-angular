import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './components/header/header.component';
import { TasksComponent } from './components/tasks/tasks.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    TasksComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
