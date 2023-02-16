import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todo!: Todo;

  @Output() onDelete = new EventEmitter<number>();

  onDeleteButtonClick() {
    this.onDelete.emit(this.todo.id);
  };
}
