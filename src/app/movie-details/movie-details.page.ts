
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
} from '@ionic/angular';

interface Movie {
  id: number;
  title: string;
  year: number;
  genre: string;
  poster: string;
}

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
  ],
})
export class MovieDetailsPage {

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
  ];

  movie: Movie = this.movies[0];

  movieId: string | null = null;

  constructor(private route: ActivatedRoute) {
    this.movieId = this.route.snapshot.paramMap.get('id');

    const id = Number(this.movieId);

    this.movie = this.movies.find((movie) => movie.id === id) ?? this.movies[0];
  }

}
