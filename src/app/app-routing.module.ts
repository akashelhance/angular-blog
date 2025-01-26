import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBlogsComponent } from './all-blogs/all-blogs.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'home', component: AllBlogsComponent ,
  }, // Home route for all blogs
  
  { path: 'post-detail/:id', component: BlogDetailComponent,   }, // Blog detail route
  { path: 'create-post', component: CreatePostComponent,         canActivate: [AuthGuard],
  }, // Create post route

  { path: '', component: LoginComponent
  }, 
  { path: '**', redirectTo: '', pathMatch: 'full' ,        canActivate: [AuthGuard],
  } // Redirect unknown routes to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
