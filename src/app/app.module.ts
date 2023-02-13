import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { TodoListComponent, TodoItemComponent } from './components';
import { SharedModule } from './shared/shared-module.module';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    TodoListComponent,
  ],
})
export class AppModule { }
