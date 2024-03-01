import { Component } from '@angular/core';
import { MovieApiService } from '../movie-api.service';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.css'
})
export class RecommendationsComponent {
  constructor(private service: MovieApiService){}
  
  recommendedMovies: any[] = [];

  getRows(data: any[], itemsPerRow: number): number[] {
    const numberOfRows = Math.ceil(data.length / itemsPerRow);
    return Array.from({ length: numberOfRows }, (_, index) => index);
  }

  ngOnInit(): void {
    this.service.getRecommendedMovies().subscribe(
      (data) => {
        this.recommendedMovies = data.results.slice(0, 10); // Get the top 10 movies
        console.log('Top Rated Movies:', this.recommendedMovies);
        // Process the data or display top-rated movies in your component
      },
      (error) => {
        console.error('Error fetching top-rated movies:', error);
      }
    );
  }
}
