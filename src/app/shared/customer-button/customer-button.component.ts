import { Component, EventEmitter, Input, Output } from '@angular/core';

export enum BtnColor  {
  default = "default",
  green = "green",
  red = "red",
}

@Component({
  selector: 'app-customer-button',
  templateUrl: './customer-button.component.html',
  styleUrls: ['./customer-button.component.scss'],
})
export class CustomerButtonComponent {
  @Input() isDisabled = false;
  @Output() btnClickHandler = new EventEmitter();

  @Input() title = '';
  @Input() color: BtnColor = BtnColor.default;

  clickHandler() {
    this.btnClickHandler.emit();
  }

  // classExpression: string = "red";

  get classExpression() {

    return `${this.color}`
  }
}
