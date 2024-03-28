import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[] = [
    { id: 1, title: 'Inception', director: 'Christopher Nolan', releaseYear: 2010 },
    { id: 2, title: 'The Godfather', director: 'Francis Ford Coppola', releaseYear: 1972 },
    { id: 3, title: 'Pulp Fiction', director: 'Quentin Tarantino', releaseYear: 1994 }
  ];

  constructor() {}

  getMovies(): Movie[] {
    return this.movies;
  }
}
