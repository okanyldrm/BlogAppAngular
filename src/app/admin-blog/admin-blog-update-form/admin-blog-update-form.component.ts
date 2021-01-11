import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog.service';
import { Sweetalert2Service } from 'src/app/services/sweetalert2.service';

@Component({
  selector: 'app-admin-blog-update-form',
  templateUrl: './admin-blog-update-form.component.html',
  styleUrls: ['./admin-blog-update-form.component.css'],
})
export class AdminBlogUpdateFormComponent implements OnInit {
  constructor(
    private blogService: BlogService,
    private activatedRoute: ActivatedRoute,
    private sweetAlert:Sweetalert2Service
  ) {}

  blog: Blog = new Blog();

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.blogService
        .getbyblog(params['blogId'])
        .subscribe((data) => (this.blog = data));
    });
  }

  updateform(form: NgForm) {
    this.blogService.updateblog(this.blog).subscribe((data) => {
      this.sweetAlert.fire("Güncelleme Başarılı")
    });
  }
}
