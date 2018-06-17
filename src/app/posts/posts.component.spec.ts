import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

import { PostsComponent } from './posts.component';
import { PostsService } from './posts.service';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  const postsServiceStub = {
    getPosts: function () {
      return of([
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
      ]);
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsComponent ],
      providers: [
        { provide: PostsService, useValue: postsServiceStub },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
