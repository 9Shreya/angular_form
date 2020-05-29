import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModulesComponent } from './forms-modules.component';

describe('FormsModulesComponent', () => {
  let component: FormsModulesComponent;
  let fixture: ComponentFixture<FormsModulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsModulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
