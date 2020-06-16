import { Component, OnInit } from '@angular/core';
import { GenreService } from 'src/app/services/genre.service';
import { Genre } from 'src/app/model/genre';


@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})

export class GenreComponent implements OnInit {
  arrayGenre: Array<Genre>;
  selectedGenre: Genre;
  insertMode = false;

  constructor(private genreService: GenreService) { }

  ngOnInit(): void {
    this.listOfGenre();
  }

  // Instancia um novo |Genero quando solicitado
  newGenre() {
    this.insertMode = true;
    this.selectedGenre = new Genre();
  }

  // Retorna a Lista de Generos salvos no CrudCrud via Rest
  listOfGenre() {
    this.genreService.listGenre().subscribe(genre => {
      this.arrayGenre = genre;
    });
  }

  //  Recebe os valores de determinado item quando selecionado
  select(genre: Genre) {
    this.insertMode = false;
    this.selectedGenre = genre;
  }

  // Limpa os campos quando chamado
  cancel() {
    this.selectedGenre = null;
  }

  // Salva ou atualiza um Genero
  saveGenre() {
    if (this.insertMode) {
      this.genreService.createGenre(this.selectedGenre).subscribe(() => {
        alert('Genero salvo com Sucesso!');
        this.listOfGenre();
        this.cancel();
      });
    } else {
      this.genreService.updateGenre(this.selectedGenre).subscribe(() => {
        alert('Genero atualizado com Sucesso!');
        this.listOfGenre();
        this.cancel();
      });
    }
  }

  delete(id: string) {
    this.genreService.deleteGenre(id).subscribe(() => {
      alert('Genero removido com Sucesso!');
      this.listOfGenre();
    });
  }
}
