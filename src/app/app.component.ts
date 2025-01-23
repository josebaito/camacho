
import { Component } from '@angular/core';
import { CreateButtonComponent } from './components/create-button/create-button.component';
import { AddTaskInputComponent } from './components/add-task-input/add-task-input.component';
import { TaskComponent } from './components/task/task.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CreateButtonComponent, AddTaskInputComponent, TaskComponent, CommonModule, FormsModule],
})
export class AppComponent {
  tasks: { title: string; description: string; isDone: boolean }[] = [];
  createdCount = 0; // Contador para tarefas criadas
  completedCount = 0; // Contador para tarefas concluídas
  pendingTaskText: string = '';

  onNewTask(taskText: string) {
    if (taskText.trim()) {
      this.tasks.push({
        title: taskText,
        description: 'Descrição da tarefa adicionada',
        isDone: false, // Nova tarefa começa como não concluída
      });
      this.createdCount++; // Incrementa o contador de criadas
      this.pendingTaskText = taskText;

    }
  }

  deleteTask(index: number) {
    const removedTask = this.tasks.splice(index, 1)[0];
    if (removedTask.isDone) {
      this.completedCount--; // Decrementa se a tarefa removida era concluída
    } else {
      this.createdCount--; // Decrementa se a tarefa removida não era concluída
    }
  }

  toggleTaskCompletion(index: number) {
    const task = this.tasks[index];
    task.isDone = !task.isDone; // Alterna o estado de conclusão
    if (task.isDone) {
      this.completedCount++; // Incrementa o contador de concluídas
    } else {
      this.completedCount--; // Decrementa o contador de concluídas
    }
  }
}
