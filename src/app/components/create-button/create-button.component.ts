import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-button',
  templateUrl: './create-button.component.html',
  styleUrls: ['./create-button.component.scss'],
})
export class CreateButtonComponent {
  @Input() taskText: string = '';
  @Output() taskCreated = new EventEmitter<string>();

  createTask() {
    if (this.taskText.trim()) {
      this.taskCreated.emit(this.taskText);
    }
  }
}
