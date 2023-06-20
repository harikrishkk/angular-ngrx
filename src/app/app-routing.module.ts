import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookPagesComponent } from './pages/book-pages/book-pages.component';
import { HomePageComponent } from './pages/home-page/home-page.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomePageComponent },
  { path: 'books', component: BookPagesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
