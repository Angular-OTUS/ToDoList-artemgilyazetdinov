import { Component, EventEmitter, Input, Output } from '@angular/core';

export enum BtnColor  {
  Default = "default",
  Green = "green",
  Red = "red",
}

@Component({
  selector: 'app-todo-button',
  templateUrl: './todo-button.component.html',
  styleUrls: ['./todo-button.component.scss'],
})
export class TodoButtonComponent {
  @Input() isDisabled = false;
  @Output() btnClickHandler = new EventEmitter();

  @Input() title = '';
  @Input() btnColor = BtnColor.Default;

  clickHandler() {
    this.btnClickHandler.emit();
  }
}
