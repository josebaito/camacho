import { Component } from '@angular/core';
import { CreateButtonComponent } from './components/create-button/create-button.component';
import { AddTaskInputComponent } from './components/add-task-input/add-task-input.component';
import { TaskComponent } from './components/task/task.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Adicionar FormsModule para ngModel

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CreateButtonComponent, AddTaskInputComponent, TaskComponent, CommonModule, FormsModule]
})
export class AppComponent {
  tasks: { title: string; description: string }[] = [];

  pendingTaskText: string = '';

  onNewTask(taskText: string) {
    if (taskText.trim()) {
      this.tasks.push({
        title: taskText,
        description: 'Descrição da tarefa adicionada'
      });
      this.pendingTaskText = taskText;
    }
  }

  /*addTask() {
    if (this.pendingTaskText.trim()) {
      this.tasks.push({
        title: this.pendingTaskText,
        description: 'Descrição da tarefa adicionada.'
      });
      this.pendingTaskText = '';
    }
  }*/

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
