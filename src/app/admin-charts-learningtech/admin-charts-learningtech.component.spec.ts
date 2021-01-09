import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChartsLearningtechComponent } from './admin-charts-learningtech.component';

describe('AdminChartsLearningtechComponent', () => {
  let component: AdminChartsLearningtechComponent;
  let fixture: ComponentFixture<AdminChartsLearningtechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminChartsLearningtechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminChartsLearningtechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
