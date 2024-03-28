// movie.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './components/movie-list.component';
import { MovieService } from './services/movie.service';

@NgModule({
  declarations: [
    MovieListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    MovieService
  ],
  exports: [
    MovieListComponent
  ]
})
export class MovieModule { }
