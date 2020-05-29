import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModelGroupFormComponent } from './ng-model-group-form.component';

describe('NgModelGroupFormComponent', () => {
  let component: NgModelGroupFormComponent;
  let fixture: ComponentFixture<NgModelGroupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgModelGroupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgModelGroupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
