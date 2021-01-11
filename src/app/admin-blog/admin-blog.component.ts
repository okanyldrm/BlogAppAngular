import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BlogPage } from '../models/BlogPage';
import { BlogpageService } from '../services/blogpage.service';
import { Sweetalert2Service } from '../services/sweetalert2.service';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.css']
})
export class AdminBlogComponent implements OnInit {

  constructor(private blogpageService:BlogpageService, private sweetAlert:Sweetalert2Service) { }

  blogpage!:BlogPage;
  ngOnInit(): void {

    this.blogpageService.getblogpage().subscribe((data)=>this.blogpage=data)

  }

  updateform(form:NgForm){
this.blogpageService.updateBlogPage(this.blogpage).subscribe((data)=>{
  this.sweetAlert.fire("Güncelleme Basarılı");
})
  }

}
