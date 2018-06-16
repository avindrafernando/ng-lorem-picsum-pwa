import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface post {
  format: string;
  width: number;
  height: number;
  filename: string;
  id: number;
  author: string;
  author_url: string;
  post_url: string;
}

@Injectable()

export class PostsService {
  
  constructor(private http: HttpClient) { }

  public getPosts(): Observable<post[]> {
    return this.http.get<Array<post>>('https://picsum.photos/list');
  }
}
