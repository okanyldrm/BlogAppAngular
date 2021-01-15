import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminServiceFrontendAddComponent } from './admin-service-frontend-add.component';

describe('AdminServiceFrontendAddComponent', () => {
  let component: AdminServiceFrontendAddComponent;
  let fixture: ComponentFixture<AdminServiceFrontendAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminServiceFrontendAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminServiceFrontendAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
