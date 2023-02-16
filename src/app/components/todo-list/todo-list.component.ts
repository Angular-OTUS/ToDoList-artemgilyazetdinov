import { Component } from '@angular/core';
import { todoList } from "../../mock-todos";
import { Todo } from "../../todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  todos: Todo[] = todoList;
  inputValue: string = '';

  deleteTodoItem(itemId: number) {
    this.todos = this.todos.filter(value => value.id != itemId);
  };

  onAddButtonClick() {
    const newTodo: Todo = {
      id: this.getMaxItemId() + 1,
      text: this.inputValue.trim()
    }
    this.todos = [...this.todos, newTodo];

    this.inputValue = '';
  }

  private getMaxItemId() {
    return Math.max(...this.todos.map(todo => todo.id));
  };
}
