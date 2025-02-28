import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBlogsComponent } from './all-blogs/all-blogs.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'home', component: AllBlogsComponent },

  { path: 'post-detail/:id', component: BlogDetailComponent },
  {
    path: 'create-post',
    component: CreatePostComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'update/:id',
    component: UpdatePostComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },

  { path: '', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full', canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
