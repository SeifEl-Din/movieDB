import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  randomMoviesResult: any = [];
  pageItems: any[] = [];
  currentPage = 1;
  itemsPerPage = 20; // You can change this to any desired value

  constructor(private service: MovieApiService) {}

  ngOnInit(): void {
    this.randomData();
  }

  randomData() {
    this.service.RandomMovies().subscribe((result) => {
      console.log(result, 'randomresult#');
      this.randomMoviesResult = result.results;
      this.pageChanged({ page: this.currentPage });
    });
  }

  pageChanged(event: any): void {
    const startIndex = (event.page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pageItems = this.randomMoviesResult.slice(startIndex, endIndex);
    console.log("PagedItems");
  }

  getRows(data: any[], itemsPerRow: number): number[] {
    const numberOfRows = Math.ceil(data.length / itemsPerRow);
    return Array.from({ length: numberOfRows }, (_, index) => index);
  }
}
