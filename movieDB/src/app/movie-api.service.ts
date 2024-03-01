import { Injectable } from '@angular/core';
import { HttpClient,HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private http: HttpClient) { }

 private key = "70f8dd88ed0894b8f7c85108edcc352e"
 private url = "https://api.themoviedb.org/3"

RandomMovies(): Observable<any> {
  const endpoint = `${this.url}/discover/movie`;

  // Set query parameters
  const params = new HttpParams()
    .set('api_key', this.key)
    .set('sort_by', 'popularity.desc')
    .set('page', Math.floor(Math.random() * 100).toString()) // Fetch random page
    .set('language', 'en-US')
    .set('include_adult', 'false')
    .set('include_video', 'false')
    .set('vote_count.gte', '100');

  // Make GET request
  return this.http.get(endpoint, { params });
}

getSearchMovie(data: any): Observable<any> {
  console.log(data, 'movie#');
  return this.http.get(`${this.url}/search/movie?api_key=${this.key}&query=${data.movieName}`);
}



getRecommendedMovies(): Observable<any> {
  return this.http.get<any>(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.key}&page=1`);
}

getMovieDetails(movieId: string): Observable<any> {
  return this.http.get(`${this.url}/movie/${movieId}?api_key=${this.key}`);
}


}


