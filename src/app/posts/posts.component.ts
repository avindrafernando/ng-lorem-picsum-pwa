import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { shuffle } from 'lodash';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  private posts: any[];

  constructor(private postsService: PostsService) { 
    this.postsService.getPosts().subscribe(
      posts => {
        this.posts = posts.slice(0, 100);
      }
    );
  }

  ngOnInit() {
  }

  getRandom(arrayToBeShuffled): any[]{
    return shuffle(arrayToBeShuffled);
 }

}
