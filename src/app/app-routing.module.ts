import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './views/book/book.component';
import { CatalogueComponent } from './views/catalogue/catalogue.component';
import { GenreComponent } from './views/genre/genre/genre.component';
import { SobreComponent } from './views/sobre/sobre/sobre.component';


const routes: Routes = [
  { path: 'book', component: BookComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'genre', component: GenreComponent },
  { path: 'sobre', component: SobreComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
