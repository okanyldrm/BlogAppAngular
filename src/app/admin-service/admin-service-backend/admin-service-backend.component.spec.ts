import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminServiceBackendComponent } from './admin-service-backend.component';

describe('AdminServiceBackendComponent', () => {
  let component: AdminServiceBackendComponent;
  let fixture: ComponentFixture<AdminServiceBackendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminServiceBackendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminServiceBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
