import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientHappyClientsComponent } from './client-happy-clients.component';

describe('ClientHappyClientsComponent', () => {
  let component: ClientHappyClientsComponent;
  let fixture: ComponentFixture<ClientHappyClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientHappyClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientHappyClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
