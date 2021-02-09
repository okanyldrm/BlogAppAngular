import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChartsEventweekComponent } from './admin-charts-eventweek.component';

describe('AdminChartsEventweekComponent', () => {
  let component: AdminChartsEventweekComponent;
  let fixture: ComponentFixture<AdminChartsEventweekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminChartsEventweekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminChartsEventweekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
