import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientServiceBackendComponent } from './client-service-backend.component';

describe('ClientServiceBackendComponent', () => {
  let component: ClientServiceBackendComponent;
  let fixture: ComponentFixture<ClientServiceBackendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientServiceBackendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientServiceBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
