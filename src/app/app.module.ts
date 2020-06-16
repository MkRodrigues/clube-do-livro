import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BookComponent } from './views/book/book.component';
import { CatalogueComponent } from './views/catalogue/catalogue.component';
import { FormsModule } from '@angular/forms';
import { SobreComponent } from './views/sobre/sobre/sobre.component';
import { GenreComponent } from './views/genre/genre/genre.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    CatalogueComponent,
    SobreComponent,
    GenreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
