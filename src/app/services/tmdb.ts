import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Tmdb {
    private apiUrl = 'https://api.themoviedb.org/3';
    // email: hekak82517@dvdee.com
    private apiToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMmE1NmEzMjY5ZGUyOGRiY2VhZDQ4ZTgyYzQ4MGJiMyIsIm5iZiI6MTc5NTQ0MDc0MS43NDMsInN1YiI6IjZiMDQ0MDY1ZTQ5MWJlZGQxYTUyZGU2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vvjwCfoNhms7L0TUPNgpBnZu6GmTdXpWZ8IPnwIiwJg';
    constructor(private http: HttpClient) {}
}