import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkUpdateFormComponent } from './work-update-form.component';

describe('WorkUpdateFormComponent', () => {
  let component: WorkUpdateFormComponent;
  let fixture: ComponentFixture<WorkUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkUpdateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
