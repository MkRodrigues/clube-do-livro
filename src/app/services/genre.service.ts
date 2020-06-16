import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genre } from '../model/genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  code = '79aa75fb8b054329a701f45ceb61fb99';

  constructor(private http: HttpClient) { }

  listGenre(): Observable<Genre[]> {
    return this.http.get<Genre[]>('https://crudcrud.com/api/' + this.code + '/genre');
  }

  createGenre(genre: Genre): Observable<Genre> {
    return this.http.post<Genre>('https://crudcrud.com/api/' + this.code + '/genre', genre);
  }

  updateGenre(genre: Genre): Observable<any> {
    const id = genre.id;
    delete genre.id;
    return this.http.put<Genre>('https://crudcrud.com/api/' + this.code + '/genre/' + id, genre);
  }

  deleteGenre(id: string): Observable<any> {
    return this.http.delete('https://crudcrud.com/api/' + this.code + '/genre/' + id);
  }
}
