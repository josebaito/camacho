import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Output() taskDeleted = new EventEmitter<void>();

  isDone: boolean = false;

  toggleDone() {
    this.isDone = !this.isDone;
  }

  deleteTask() {
    this.taskDeleted.emit();
  }
}
