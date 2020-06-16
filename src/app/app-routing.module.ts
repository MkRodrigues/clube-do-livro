import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './views/book/book.component';
import { CatalogueComponent } from './views/catalogue/catalogue.component';


const routes: Routes = [
  { path: 'book', component: BookComponent },
  // { path: 'genre', component: Genre },
  { path: 'catalogue', component: CatalogueComponent },
  // { path: 'about', component: aboutComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
