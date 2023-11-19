import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../Task'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksApiUrl: string = 'http://localhost:4201/tasks';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksApiUrl);
  }
}
