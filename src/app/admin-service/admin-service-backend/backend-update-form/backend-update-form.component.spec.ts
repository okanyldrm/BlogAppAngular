import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendUpdateFormComponent } from './backend-update-form.component';

describe('BackendUpdateFormComponent', () => {
  let component: BackendUpdateFormComponent;
  let fixture: ComponentFixture<BackendUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackendUpdateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
