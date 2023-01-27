import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerButtonComponent } from './customer-button/customer-button.component';

@NgModule({
  declarations: [
    CustomerButtonComponent,
  ],
  imports: [
    CommonModule],
  exports: [CustomerButtonComponent],
})
export class SharedModule { }
