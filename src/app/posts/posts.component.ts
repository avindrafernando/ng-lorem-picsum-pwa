import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { shuffle } from 'lodash';

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

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  private posts: post[];
  private imagePostWidth: number = 250;
  private imagePostHeight: number = 375;

  constructor(private postsService: PostsService) {
    this.postsService.getPosts().subscribe(
      posts => {
        this.posts = posts.slice(0, 100);
      }
    );
  }

  ngOnInit() {
  }

  getShuffledArray(arrayToBeShuffled): post[] {
    return shuffle(arrayToBeShuffled);
  }

  getSrc(id: number): string {
    return 'https://picsum.photos/' + this.imagePostWidth + '/' + this.imagePostHeight + '?image=' + id;
  }

}
