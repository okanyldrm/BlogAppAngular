import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendUpdateFormComponent } from './frontend-update-form.component';

describe('FrontendUpdateFormComponent', () => {
  let component: FrontendUpdateFormComponent;
  let fixture: ComponentFixture<FrontendUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontendUpdateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontendUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
