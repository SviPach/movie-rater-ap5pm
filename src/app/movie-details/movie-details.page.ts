import { Component, ChangeDetectorRef } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Tmdb } from '../services/tmdb';
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
    DecimalPipe,
  ],
})
export class MovieDetailsPage {

  movie: any = null;

  movieId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private tmdb: Tmdb,
    private changeDetector: ChangeDetectorRef,
  ) {
    this.movieId = this.route.snapshot.paramMap.get('id');

    const id = Number(this.movieId);

    this.tmdb.getMovieDetails(id).subscribe((response) => {
      this.movie = response;
      console.log('Movie details:', this.movie);
      this.changeDetector.detectChanges();
    });
  }

}
