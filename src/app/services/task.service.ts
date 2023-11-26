import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../Task'
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksApiUrl: string = 'http://localhost:4201/tasks';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksApiUrl);
  }

  toggleTask(task: Task): Observable<Task> {
    const apiUrl = `${this.tasksApiUrl}/${task.id}`;
    const reminder = !task.reminder;
    return this.http.patch<Task>(apiUrl, { reminder: reminder }, httpOptions);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.tasksApiUrl, task, httpOptions);
  }

  deleteTask(task: Task): Observable<Task> {
    const apiUrl = `${this.tasksApiUrl}/${task.id}`;
    return this.http.delete<Task>(apiUrl);
  }
}
