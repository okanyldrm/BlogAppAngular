import { Component, OnInit } from '@angular/core';
import { Blog } from '../models/Blog';
import { BlogPage } from '../models/BlogPage';
import { BlogService } from '../services/blog.service';
import { BlogpageService } from '../services/blogpage.service';

@Component({
  selector: 'app-client-blog',
  templateUrl: './client-blog.component.html',
  styleUrls: ['./client-blog.component.css'],
})
export class ClientBlogComponent implements OnInit {
  constructor(
    private blogpageService: BlogpageService,
    private blogService: BlogService
  ) {}

  blogpage: BlogPage = new BlogPage();
  blogs!: Blog[];

  ngOnInit(): void {
    this.blogpageService
      .getblogpage()
      .subscribe((data) => (this.blogpage = data));
    this.blogService.getallblog().subscribe((data) => (this.blogs = data));
  }
}
