import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Blog } from '../models/Blog';
import { BlogService } from '../services/blog.service';
import { Sweetalert2Service } from '../services/sweetalert2.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-blog-add',
  templateUrl: './admin-blog-add.component.html',
  styleUrls: ['./admin-blog-add.component.css'],
})
export class AdminBlogAddComponent implements OnInit {
  constructor(
    private blogService: BlogService,
    private sa: Sweetalert2Service,
    private _location: Location
  ) {}
  blog: Blog = new Blog();

  ngOnInit(): void {}

  addform(form: NgForm) {
    this.blogService.addblog(this.blog).subscribe((data) => {
      this.sa.fire('Added : ' + this.blog.title);
      this._location.back();
    });
  }

  
}
