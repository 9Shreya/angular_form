import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchedPristinValidComponent } from './touched-pristin-valid.component';

describe('TouchedPristinValidComponent', () => {
  let component: TouchedPristinValidComponent;
  let fixture: ComponentFixture<TouchedPristinValidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouchedPristinValidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouchedPristinValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
