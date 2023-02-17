import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BtnColor } from 'src/app/shared/todo-button/todo-button.component';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  public BtnColor = BtnColor;
  @Input() todo!: Todo;

  @Output() delete = new EventEmitter<number>();

  ngOnInit() {
    console.log('todos', this.todo)
  }

  onDeleteButtonClick() {
    
    this.delete.emit(this.todo.id);
  }
}
