import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() isDone = false;

  @Output() taskDeleted = new EventEmitter<void>();
  @Output() taskToggled = new EventEmitter<void>();

  deleteTask() {
    this.taskDeleted.emit(); // Notifica o pai sobre a exclusão
  }

  toggleDone() {
    this.taskToggled.emit(); // Notifica o pai sobre a alteração no estado de conclusão
  }
}
