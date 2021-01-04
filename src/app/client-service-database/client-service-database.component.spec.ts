import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientServiceDatabaseComponent } from './client-service-database.component';

describe('ClientServiceDatabaseComponent', () => {
  let component: ClientServiceDatabaseComponent;
  let fixture: ComponentFixture<ClientServiceDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientServiceDatabaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientServiceDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
