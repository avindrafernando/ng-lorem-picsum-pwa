import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PostsComponent } from './posts.component';
import { PostsRoutingModule } from './posts.routing';
import { PostsService } from './posts.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    PostsRoutingModule
  ],
  declarations: [
    PostsComponent
  ],
  providers: [PostsService]
})

export class PostsModule { }