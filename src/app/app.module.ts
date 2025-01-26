import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MatListModule } from '@angular/material/list';
import { AllBlogsComponent } from './all-blogs/all-blogs.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { CreatePostComponent } from './create-post/create-post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AllBlogsComponent,
    BlogDetailComponent,
    CreatePostComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    AppRoutingModule,
    RouterModule, 
    MatListModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
