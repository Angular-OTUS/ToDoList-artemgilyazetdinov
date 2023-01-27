import { Component, OnInit } from '@angular/core';
import { BtnColor } from 'src/app/shared/customer-button/customer-button.component';
import { TodoList } from "../../mock-todos";
import { Todo } from "../../todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  public btnColor: typeof BtnColor = BtnColor;
  todos: Todo[] = TodoList;
  inputValue = '';
  isLoading = true;

  ngOnInit() {
    setTimeout(() => this.isLoading = false, 500)
  }

  getMaxCurrentId() {
    return Math.max(...this.todos.map(todo => todo.id));
  }

  deleteItemTodo(itemId: number) {
    this.todos = this.todos.filter(value => value.id != itemId);
  }

  addNewTodo() {
    const newTodo: Todo = {
      id: this.getMaxCurrentId() + 1,
      text: this.inputValue.trim(),
    }
    this.todos = [...this.todos, newTodo];

    this.inputValue = '';
  }

}
