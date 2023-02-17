import { Component, OnInit } from '@angular/core';
import { BtnColor } from 'src/app/shared/todo-button/todo-button.component';
import { todoList } from "../../mock-todos";
import { Todo } from "../../todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  public BtnColor = BtnColor;
  todos: Todo[] = todoList;
  inputValue = '';
  isLoading = true;

  ngOnInit() {
    console.log('todos', this.todos)
    setTimeout(() => this.isLoading = false, 500);
  }

  deleteTodoItem(itemId: number) {
    this.todos = this.todos.filter(value => value.id != itemId);
  }

  onAddButtonClick() {
    const newTodo: Todo = {
      id: this.getMaxItemId() + 1,
      text: this.inputValue.trim(),
    }
    this.todos = [...this.todos, newTodo];

    this.inputValue = '';
  }

  private getMaxItemId() {
    return Math.max(...this.todos.map(todo => todo.id));
  }
}
