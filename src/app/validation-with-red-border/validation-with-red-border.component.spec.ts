import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationWithRedBorderComponent } from './validation-with-red-border.component';

describe('ValidationWithRedBorderComponent', () => {
  let component: ValidationWithRedBorderComponent;
  let fixture: ComponentFixture<ValidationWithRedBorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationWithRedBorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationWithRedBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
