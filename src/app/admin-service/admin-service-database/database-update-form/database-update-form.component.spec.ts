import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseUpdateFormComponent } from './database-update-form.component';

describe('DatabaseUpdateFormComponent', () => {
  let component: DatabaseUpdateFormComponent;
  let fixture: ComponentFixture<DatabaseUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabaseUpdateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
