import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminServiceFrontendComponent } from './admin-service-frontend.component';

describe('AdminServiceFrontendComponent', () => {
  let component: AdminServiceFrontendComponent;
  let fixture: ComponentFixture<AdminServiceFrontendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminServiceFrontendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminServiceFrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
