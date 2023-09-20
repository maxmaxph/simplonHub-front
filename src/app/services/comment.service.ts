import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  url = 'http://localhost:3000/api/comment';

  constructor(private http: HttpClient) { }

  getComment(){
    return this.http.get<Comment[]>(this.url)
  };
}
