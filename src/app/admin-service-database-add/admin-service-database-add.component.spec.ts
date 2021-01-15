import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminServiceDatabaseAddComponent } from './admin-service-database-add.component';

describe('AdminServiceDatabaseAddComponent', () => {
  let component: AdminServiceDatabaseAddComponent;
  let fixture: ComponentFixture<AdminServiceDatabaseAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminServiceDatabaseAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminServiceDatabaseAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
