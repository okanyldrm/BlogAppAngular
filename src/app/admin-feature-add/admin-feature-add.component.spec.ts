import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFeatureAddComponent } from './admin-feature-add.component';

describe('AdminFeatureAddComponent', () => {
  let component: AdminFeatureAddComponent;
  let fixture: ComponentFixture<AdminFeatureAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFeatureAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFeatureAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
