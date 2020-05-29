import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalHtmlFormComponent } from './normal-html-form.component';

describe('NormalHtmlFormComponent', () => {
  let component: NormalHtmlFormComponent;
  let fixture: ComponentFixture<NormalHtmlFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalHtmlFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalHtmlFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
