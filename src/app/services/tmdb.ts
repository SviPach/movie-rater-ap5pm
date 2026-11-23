import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Tmdb {
    private apiUrl = 'https://api.themoviedb.org/3';
    // email: hekak82517@dvdee.com
    private apiToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YWQzNzA1M2FiNWNiZDAxY2M0NTliOTBhZDZjYjhiYyIsIm5iZiI6MTc5NTQ0MDc0MS43NDMsInN1YiI6IjZiMDQ0MDY1ZTQ5MWJlZGQxYTUyZGU2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gLeLnRkNHydKGhqvfEF0RRnXlbFsZBgaia34nvG8XyE';
    constructor(private http: HttpClient) {}
    getPopularMovies() {
        // console.log('Popular request, token exists:', !!this.apiToken);
        // console.log('Popular token length:', this.apiToken.length);
        return this.http.get(`${this.apiUrl}/movie/popular`, {
            headers: {
                Authorization: `Bearer ${this.apiToken}`,
            },
        });
    }

    getMovieDetails(id: number) {
        // console.log('Details request, token exists:', !!this.apiToken);
        // console.log('Details token length:', this.apiToken.length);
        return this.http.get(`${this.apiUrl}/movie/${id}`, {
            headers: {
                Authorization: `Bearer ${this.apiToken}`,
            },
        });
    }
}