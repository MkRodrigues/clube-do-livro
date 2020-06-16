import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  code = '79aa75fb8b054329a701f45ceb61fb99';

  constructor(private http: HttpClient) { }

  // Lista os livros cadastrados na na API
  listBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('https://crudcrud.com/api/' + this.code + '/book');
  }

  // Cria um novo Livro e adiciona na API
  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>('https://crudcrud.com/api/' + this.code + '/book', book);
  }

  // Atualiza um livro selecionado na API
  updateBook(book: Book): Observable<any> {
    const id = book._id;
    delete book._id;
    return this.http.put<Book>('https://crudcrud.com/api/' + this.code + '/book/' + id, book);
  }

  // Exclui um livro selecionado na API
  deleteBook(id: string): Observable<any> {
    return this.http.delete('https://crudcrud.com/api/' + this.code + '/book/' + id);
  }
}
