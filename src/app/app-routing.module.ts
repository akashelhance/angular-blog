import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBlogsComponent } from './all-blogs/all-blogs.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

const routes: Routes = [
  { path: '', component: AllBlogsComponent }, // Home route for all blogs
  { path: 'post-detail/:id', component: BlogDetailComponent }, // Blog detail route
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect unknown routes to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
