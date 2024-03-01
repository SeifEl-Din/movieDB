import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieApiService } from '../movie-api.service';
import { SuggestionsService } from '../suggestions.service';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  
  constructor(
    private service: MovieApiService,
    private searchService: SearchService,
    private suggestionsService:SuggestionsService,
    private router: Router
  ) {}
  test ="";  
  searchResult: any[] = [];
  searchForm = new FormGroup({
    movieName: new FormControl('')
  });

  ngOnInit() {
    this.searchService.searchQueryChanged.subscribe((query: string) => {
      // When search query changes, update the form value and trigger form submission
      if (query) {
        this.searchForm.patchValue({ movieName: query });
        console.log(query);
        this.test = query;
        this.submitForm();
      }
    });

   
  }

  getRows(data: any[], itemsPerRow: number): number[] {
    const numberOfRows = Math.ceil(data.length / itemsPerRow);
    return Array.from({ length: numberOfRows }, (_, index) => index);
  }

  submitForm()
  {
      const query = this.searchForm.value.movieName;
      //console.log(this.searchForm.value,'searchform#');
      this.service.getSearchMovie(this.searchForm.value).subscribe((result)=>{
          console.log(result,'searchmovie##');
          this.router.navigate(['/search']);
          this.searchResult = result.results;
          if (result.results.length > 0) {
            this.suggestionsService.addToSearchHistory(result.results);
            console.log(this.suggestionsService.searchHistory,'SearchHistory');
          }
          
        else if (result.results.length === 0) {
            // Display an alert if no movie is found
            alert('No movie is found with that name.');
          }
          
      });
  }

  
  
}
