import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PostsService } from './posts.service';

describe('PostsService', () => {
  let injector: TestBed;
  let service: PostsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostsService]
    });

    injector = getTestBed();
    service = injector.get(PostsService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return posts', () => {
    const dummyPosts = [
      {
        "format": "jpeg",
        "width": 5616,
        "height": 3744,
        "filename": "0000_yC-Yzbqy7PY.jpeg",
        "id": 0,
        "author": "Alejandro Escamilla",
        "author_url": "https://unsplash.com/@alejandroescamilla",
        "post_url": "https://unsplash.com/photos/yC-Yzbqy7PY"
      },
      {
        "format": "jpeg",
        "width": 5616,
        "height": 3744,
        "filename": "0001_LNRyGwIJr5c.jpeg",
        "id": 1,
        "author": "Alejandro Escamilla",
        "author_url": "https://unsplash.com/@alejandroescamilla",
        "post_url": "https://unsplash.com/photos/LNRyGwIJr5c"
      }
    ];

    service.getPosts().subscribe(posts => {
      expect(posts.length).toBe(2);
      expect(posts).toEqual(dummyPosts);
    });

    const req = httpMock.expectOne(`https://picsum.photos/list`);
    expect(req.request.method).toBe("GET");
    req.flush(dummyPosts);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
