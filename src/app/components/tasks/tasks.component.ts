import { Component } from '@angular/core';

import { Task } from '../../Task'
import { TaskService } from '../../services/task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  tasks: Task[] = [];
  taskService: TaskService;

  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

  toggleTask(task: Task) {
    this.taskService.toggleTask(task).subscribe((updatedTask) => {
      const index = this.tasks.findIndex(t => t.id === updatedTask.id);
      this.tasks[index] = updatedTask;
    });
  }

  addTask(newTask: Task) {
    this.taskService.addTask(newTask).subscribe((task) => {
      this.tasks.push(task);
    })
  }

  // EMIT: emitted event calls component method
  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => (this.tasks = this.tasks.filter(t => t.id !== task.id)));
  }
}
