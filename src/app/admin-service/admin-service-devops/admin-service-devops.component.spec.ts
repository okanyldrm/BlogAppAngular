import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminServiceDevopsComponent } from './admin-service-devops.component';

describe('AdminServiceDevopsComponent', () => {
  let component: AdminServiceDevopsComponent;
  let fixture: ComponentFixture<AdminServiceDevopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminServiceDevopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminServiceDevopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
