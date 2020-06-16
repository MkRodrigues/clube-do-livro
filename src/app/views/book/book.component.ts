import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/services/book.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  arrayBooks: Array<Book>;
  selectedBook: Book;
  insertMode = false;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.listOfBooks();
  }

  // Instancia um novo Livro quando solicitado
  newBook() {
    this.insertMode = true;
    this.selectedBook = new Book();
  }

  // Retorna a Lista de Livros salvos no CrudCrud via Rest
  listOfBooks() {
    this.bookService.listBooks().subscribe(books => {
      this.arrayBooks = books;
    });
  }

  //  Recebe os valores de determinado item quando selecionado
  select(book: Book) {
    this.insertMode = false;
    this.selectedBook = book;
  }

  // Limpa os campos quando chamado
  cancel() {
    this.selectedBook = null;
  }

  // Salva ou atualiza um Livro
  saveBook() {
    if (this.insertMode) {
      this.bookService.createBook(this.selectedBook).subscribe(() => {
        alert('Livro salvo com Sucesso!');
        this.listOfBooks();
        this.cancel();
      });
    } else {
      this.bookService.updateBook(this.selectedBook).subscribe(() => {
        alert('Livro atualizado com Sucesso!');
        this.listOfBooks();
        this.cancel();
      });
    }
  }

  // Exclui um livro após confirmação
  delete(id: string) {
    if (confirm('O item será excluído, continuar?')) {
      this.bookService.deleteBook(id).subscribe(() => {
        alert('Livro removido com Sucesso!');
        this.listOfBooks();
        this.cancel();
      });
    }
  }
}
