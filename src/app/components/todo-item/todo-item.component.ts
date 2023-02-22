import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BtnColor } from 'src/app/shared/components/todo-button/todo-button.component';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  public BtnColor = BtnColor;
  @Input() todo!: Todo;

  @Output() delete = new EventEmitter<number>();

  onDeleteButtonClick() {
    this.delete.emit(this.todo.id);
  }
}
