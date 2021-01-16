import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBlogAddComponent } from './admin-blog-add.component';

describe('AdminBlogAddComponent', () => {
  let component: AdminBlogAddComponent;
  let fixture: ComponentFixture<AdminBlogAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBlogAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBlogAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
