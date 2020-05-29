import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingFormUsingInterpolationtoTsFileComponent } from './binding-form-using-interpolationto-ts-file.component';

describe('BindingFormUsingInterpolationtoTsFileComponent', () => {
  let component: BindingFormUsingInterpolationtoTsFileComponent;
  let fixture: ComponentFixture<BindingFormUsingInterpolationtoTsFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingFormUsingInterpolationtoTsFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingFormUsingInterpolationtoTsFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
