import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DaterangepickerComponent } from './ng2-daterangepicker.component';

describe('Ng2DaterangepickerComponent', () => {
  let component: DaterangepickerComponent;
  let fixture: ComponentFixture<DaterangepickerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DaterangepickerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaterangepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
