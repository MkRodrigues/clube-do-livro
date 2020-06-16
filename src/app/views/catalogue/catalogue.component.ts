import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/model/book';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  booksSharing: Array<Book>;

  constructor(private sharingContent: BookService) { }

  ngOnInit(): void {
    this.sharingBooks();
  }

  // Busca as informações salvas na API e joga no componente de Catálogo
  sharingBooks() {
    this.sharingContent.listBooks().subscribe(books => {
      this.booksSharing = books;
    });
  }
}
