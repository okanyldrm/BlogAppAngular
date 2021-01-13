import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBlogUpdateFormComponent } from './admin-blog-update-form.component';

describe('AdminBlogUpdateFormComponent', () => {
  let component: AdminBlogUpdateFormComponent;
  let fixture: ComponentFixture<AdminBlogUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBlogUpdateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBlogUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
