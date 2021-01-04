import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFeatureUpdateComponent } from './admin-feature-update.component';

describe('AdminFeatureUpdateComponent', () => {
  let component: AdminFeatureUpdateComponent;
  let fixture: ComponentFixture<AdminFeatureUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFeatureUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFeatureUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
