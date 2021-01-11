import { Component, OnInit } from '@angular/core';
import { BlogPage } from '../models/BlogPage';
import { BlogpageService } from '../services/blogpage.service';

@Component({
  selector: 'app-client-blog',
  templateUrl: './client-blog.component.html',
  styleUrls: ['./client-blog.component.css']
})
export class ClientBlogComponent implements OnInit {

  constructor(private blogpageService:BlogpageService) { }


  blogpage!:BlogPage;

  ngOnInit(): void {

      this.blogpageService.getblogpage().subscribe((data)=>this.blogpage=data);

  }

}
