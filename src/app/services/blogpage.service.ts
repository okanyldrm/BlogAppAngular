import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPage } from '../models/BlogPage';

@Injectable({
  providedIn: 'root'
})
export class BlogpageService {

  path="http://localhost:5000/api/blogpage/getblogpage";
  path2="http://localhost:5000/api/blogpage/updateblogpage"
  constructor(private http:HttpClient) { }

getblogpage():Observable<BlogPage>{
return this.http.get<BlogPage>(this.path);
}

updateBlogPage(blogpage:BlogPage):Observable<BlogPage>{
return this.http.post<BlogPage>(this.path2,blogpage);
}


}
