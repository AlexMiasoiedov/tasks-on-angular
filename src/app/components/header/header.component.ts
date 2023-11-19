import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title: string = 'Task Tracker';

  toggleAddTask() {
    console.log('toggle');
  }
}
