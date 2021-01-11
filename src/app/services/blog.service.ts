import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../models/Blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
path="http://localhost:5000/api/blog/getallblog";
path2="http://localhost:5000/api/blog/getbyblog";
path3="http://localhost:5000/api/blog/updateblog";
  constructor(private http:HttpClient) { }

getallblog():Observable<Blog[]>{

  return this.http.get<Blog[]>(this.path);
}

getbyblog(blogId:any):Observable<Blog>{

  let newpath=this.path2;
  if (blogId) {
    newpath+="/"+blogId;
  }

  return this.http.get<Blog>(newpath)

}

updateblog(blog:Blog):Observable<Blog>{

  return this.http.post<Blog>(this.path3,blog);
}


}
