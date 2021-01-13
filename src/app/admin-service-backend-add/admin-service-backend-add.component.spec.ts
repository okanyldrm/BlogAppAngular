import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminServiceBackendAddComponent } from './admin-service-backend-add.component';

describe('AdminServiceBackendAddComponent', () => {
  let component: AdminServiceBackendAddComponent;
  let fixture: ComponentFixture<AdminServiceBackendAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminServiceBackendAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminServiceBackendAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
