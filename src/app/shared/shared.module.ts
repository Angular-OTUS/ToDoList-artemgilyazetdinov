import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoButtonComponent } from './todo-button/todo-button.component';

@NgModule({
  declarations: [
    TodoButtonComponent,
  ],
  imports: [
    CommonModule],
  exports: [TodoButtonComponent],
})
export class SharedModule { }
