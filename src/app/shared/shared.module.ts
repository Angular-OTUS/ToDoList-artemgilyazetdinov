import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoButtonComponent } from './components';

@NgModule({
  declarations: [
    TodoButtonComponent,
  ],
  imports: [
    CommonModule],
  exports: [TodoButtonComponent],
})
export class SharedModule { }
