import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Task } from '../../Task'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent {
  @Input() task: Task = {
    id: undefined,
    text: '',
    day: '',
    reminder: false,
  };
  // EMIT: declare emitter
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleTask: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;

  onToggle(task: Task) {
    this.onToggleTask.emit(task);
  }

  // EMIT: trigger emitter
  deleteTask(task: Task) {
    this.onDeleteTask.emit(task);
  }
}
