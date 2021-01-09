import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInfoboxComponent } from './admin-infobox.component';

describe('AdminInfoboxComponent', () => {
  let component: AdminInfoboxComponent;
  let fixture: ComponentFixture<AdminInfoboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminInfoboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInfoboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
