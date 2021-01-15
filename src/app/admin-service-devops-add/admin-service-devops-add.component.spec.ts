import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminServiceDevopsAddComponent } from './admin-service-devops-add.component';

describe('AdminServiceDevopsAddComponent', () => {
  let component: AdminServiceDevopsAddComponent;
  let fixture: ComponentFixture<AdminServiceDevopsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminServiceDevopsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminServiceDevopsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
