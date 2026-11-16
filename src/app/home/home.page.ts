import { Component } from '@angular/core';
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
  year: number;
  genre: string;
  poster: string;
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
  searchTerm = '';

  movies: Movie[] = [
    {
      id: 1,
      title: 'Interstellar',
      year: 2014,
      genre: 'Sci-Fi',
      poster: 'https://image.tmdb.org/t/p/w600_and_h900_face/6qdusBmmCndnYs1jkf7BSUrIoBr.jpg',
    },
    {
      id: 2,
      title: 'Inception',
      year: 2010,
      genre: 'Sci-Fi',
      poster: 'https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg',
    },
    {
      id: 3,
      title: 'Dune',
      year: 2021,
      genre: 'Adventure',
      poster: 'https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg',
    },
    {
      id: 4,
      title: 'The Dark Knight',
      year: 2008,
      genre: 'Action',
      poster: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    },
  ];

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