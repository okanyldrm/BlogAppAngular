import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevopsUpdateFormComponent } from './devops-update-form.component';

describe('DevopsUpdateFormComponent', () => {
  let component: DevopsUpdateFormComponent;
  let fixture: ComponentFixture<DevopsUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevopsUpdateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevopsUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
