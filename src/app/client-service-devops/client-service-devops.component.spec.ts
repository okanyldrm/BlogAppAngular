import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientServiceDevopsComponent } from './client-service-devops.component';

describe('ClientServiceDevopsComponent', () => {
  let component: ClientServiceDevopsComponent;
  let fixture: ComponentFixture<ClientServiceDevopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientServiceDevopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientServiceDevopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
