import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Blog } from '../models/Blog';
import { BlogPage } from '../models/BlogPage';
import { BlogService } from '../services/blog.service';
import { BlogpageService } from '../services/blogpage.service';
import { Sweetalert2Service } from '../services/sweetalert2.service';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.css'],
})
export class AdminBlogComponent implements OnInit {
  constructor(
    private blogpageService: BlogpageService,
    private sweetAlert: Sweetalert2Service,
    private blogService:BlogService
  ) {}

  blogpage:BlogPage= new BlogPage();
  blogs!:Blog[];
  blogName!: string;
  pblog: number = 1;
  ngOnInit(): void {
    this.blogpageService
      .getblogpage()
      .subscribe((data) => (this.blogpage = data));
      this.blogService.getallblog().subscribe((data)=>this.blogs=data);
  }

  updateform(form: NgForm) {
    this.blogpageService.updateBlogPage(this.blogpage).subscribe((data) => {
      this.sweetAlert.fire('Güncelleme Basarılı');
    });
  }
  
  deleteblog(blogId: any) {
    this.blogService.deleteblog(blogId).subscribe((data) => {
      setTimeout(() => {
        window.location.reload();
      }, 2990);
      this.sweetAlert.toast('Deleted : ' + blogId, 3000);
    });
  }

   
  SearchBlog() {
    if (this.blogName == '') {
      this.ngOnInit();
    } else {
      this.blogs = this.blogs.filter((res) => {
        return res.title
          .toLocaleLowerCase()
          .match(this.blogName.toLocaleLowerCase());
      });
    }
  }

  
  key: string = 'id';
  reverse: boolean = false;
  sortbyid(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }

}
