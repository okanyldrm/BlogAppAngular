import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminServiceDatabaseComponent } from './admin-service-database.component';

describe('AdminServiceDatabaseComponent', () => {
  let component: AdminServiceDatabaseComponent;
  let fixture: ComponentFixture<AdminServiceDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminServiceDatabaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminServiceDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
