import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task-input',
  templateUrl: './add-task-input.component.html',
  styleUrls: ['./add-task-input.component.scss'],
  standalone: true, // Adicione standalone se necessário
  imports: [FormsModule], // Certifique-se de incluir FormsModule
})
export class AddTaskInputComponent {
  @Output() newTask = new EventEmitter<string>();
  @Output() taskTextChanged = new EventEmitter<string>();
  taskText: string = '';

  emitTask() {
    if (this.taskText.trim()) {
      this.newTask.emit(this.taskText);
      this.taskText = '';
    }
  }

  updatePendingTask(taskText: string) {
    this.taskTextChanged.emit(taskText);
  }
}
