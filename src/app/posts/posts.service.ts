import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class PostsService {
  
  constructor(private http: HttpClient) { }

  public getPosts(): Observable<any[]> {
    return this.http.get<Array<any>>('https://picsum.photos/list');
  }
}
