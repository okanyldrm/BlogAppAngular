import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../models/Blog';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-client-blog-page',
  templateUrl: './client-blog-page.component.html',
  styleUrls: ['./client-blog-page.component.css']
})
export class ClientBlogPageComponent implements OnInit {

  constructor(private blogService:BlogService ,private activatedRoute:ActivatedRoute) { }

  blog:Blog = new Blog();
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      this.blogService.getbyblog(params["blogId"]).subscribe((data)=>this.blog=data) 
    })
  }

}
