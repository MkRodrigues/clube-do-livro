import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  listBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('https://crudcrud.com/api/ed3433d202a84c988937555c6b3e0127/book');
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>('https://crudcrud.com/api/ed3433d202a84c988937555c6b3e0127/book', book);
  }

  updateBook(book: Book): Observable<any> {
    const id = book._id;
    delete book._id;
    return this.http.put<Book>('https://crudcrud.com/api/ed3433d202a84c988937555c6b3e0127/book/' + id, book);
  }

  deleteBook(id: string): Observable<any> {
    return this.http.delete('https://crudcrud.com/api/ed3433d202a84c988937555c6b3e0127/book/' + id);
  }
}
