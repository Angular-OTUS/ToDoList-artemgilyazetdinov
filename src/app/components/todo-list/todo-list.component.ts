import { Component } from '@angular/core';
import { TodoList } from "../../mock-todos";
import { Todo } from "../../todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  todos: Todo[] = TodoList;
  inputValue: string = '';

  getMaxCurrentId() {
    return Math.max(...this.todos.map(todo => todo.id));
  };

  deleteItemTodo(itemId: number) {
    this.todos = this.todos.filter(value => value.id != itemId);
  };

  addNewTodo() {
    const newTodo: Todo = {
      id: this.getMaxCurrentId() + 1,
      text: this.inputValue.trim()
    }
    this.todos = [...this.todos, newTodo];

    this.inputValue = '';
  }

}
