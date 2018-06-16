import { NgModule } from '@angular/core';
import { Routes, RouterModule , PreloadAllModules} from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'posts',
    loadChildren: './posts/posts.module#PostsModule'
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {preloadingStrategy: PreloadAllModules}
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
