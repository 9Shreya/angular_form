import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationWithIfConditionComponent } from './validation-with-if-condition.component';

describe('ValidationWithIfConditionComponent', () => {
  let component: ValidationWithIfConditionComponent;
  let fixture: ComponentFixture<ValidationWithIfConditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationWithIfConditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationWithIfConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
