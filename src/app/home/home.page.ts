import { Component, ChangeDetectorRef } from '@angular/core';
import { Tmdb } from '../services/tmdb';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonSearchbar,
} from '@ionic/angular';

interface Movie {
  id: number;
  title: string;
  release_date: string;
  genre_ids: number[];
  poster_path: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonSearchbar,
  ],
})
export class HomePage {
  constructor(
    private tmdb: Tmdb,
    private changeDetector: ChangeDetectorRef,
  ) {
    this.tmdb.getPopularMovies().subscribe((response) => {
      this.movies = (response as any).results;
      this.changeDetector.detectChanges();

      // console.log('First movie:', this.movies[0]?.title);
      // console.log('Movies count:', this.movies.length);
      // console.log('Search term:', this.searchTerm);
      // console.log('Filtered movies:', this.filteredMovies);
    });
  }
  searchTerm = '';

  movies: Movie[] = [];

  get filteredMovies(): Movie[] {
    const query = this.searchTerm.trim().toLowerCase();

    if (!query) {
      return this.movies;
    }

    return this.movies.filter((movie) =>
      movie.title.toLowerCase().includes(query),
    );
  }
}