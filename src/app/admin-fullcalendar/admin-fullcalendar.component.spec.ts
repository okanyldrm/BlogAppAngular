import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFullcalendarComponent } from './admin-fullcalendar.component';

describe('AdminFullcalendarComponent', () => {
  let component: AdminFullcalendarComponent;
  let fixture: ComponentFixture<AdminFullcalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFullcalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFullcalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
