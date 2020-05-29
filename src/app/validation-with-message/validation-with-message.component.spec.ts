import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationWithMessageComponent } from './validation-with-message.component';

describe('ValidationWithMessageComponent', () => {
  let component: ValidationWithMessageComponent;
  let fixture: ComponentFixture<ValidationWithMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationWithMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationWithMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
