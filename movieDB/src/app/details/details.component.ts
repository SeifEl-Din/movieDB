import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiService } from '../movie-api.service'; // Assuming you have a movie API service


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  movieId: any;
  movieDetails: any; // Define a property to store movie details

  constructor(private service: MovieApiService,
    private route: ActivatedRoute
    ){}


    ngOnInit() {
      // Retrieve movie ID from route parameters
      this.route.paramMap.subscribe((params) => {
        this.movieId = params.get('id');
        if (this.movieId) {
          this.fetchMovieDetails(this.movieId);
        }
      });
    }
  
    // Function to fetch movie details using the movie ID
    fetchMovieDetails(movieId: string) {
      this.service.getMovieDetails(movieId).subscribe(
        (result) => {
          this.movieDetails = result; // Store fetched movie details
          // Handle retrieved movie details as required
          console.log('Movie details:', this.movieDetails);
        },
        (error) => {
          console.error('Error fetching movie details:', error);
        }
      );
    }


}
