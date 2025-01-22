import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task-input',
  templateUrl: './add-task-input.component.html',
  styleUrls: ['./add-task-input.component.scss'],
  imports: [FormsModule]
})
export class AddTaskInputComponent {
  @Output() newTask = new EventEmitter<string>();
  taskText: string = '';

  emitTask() {
    if (this.taskText.trim()) {
      this.newTask.emit(this.taskText);
      this.taskText = '';
    }
  }
}

