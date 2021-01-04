import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientServiceFrontendComponent } from './client-service-frontend.component';

describe('ClientServiceFrontendComponent', () => {
  let component: ClientServiceFrontendComponent;
  let fixture: ComponentFixture<ClientServiceFrontendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientServiceFrontendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientServiceFrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
