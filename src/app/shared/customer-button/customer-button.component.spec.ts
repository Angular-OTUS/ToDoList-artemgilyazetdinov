import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerButtonComponent } from './customer-button.component';

describe('CustomerButtonComponent', () => {
  let component: CustomerButtonComponent;
  let fixture: ComponentFixture<CustomerButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerButtonComponent ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
