import { Component,HostListener } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import { MovieApiService } from './movie-api.service';
import { SearchService } from './search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movieDB';
  searchQuery: string = '';

  constructor(private service: MovieApiService,
    private searchService: SearchService,
    private router: Router
    ){}


    searchInNavbar(query: string): void {
      this.searchService.updateSearchQuery(query);
    }

  navbg:any;
  @HostListener('document:scroll') scrollover(){
    console.log(document.body.scrollTop,'scrolllength#')
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      this.navbg = {
        'background-color':'#000000'
      }
    }
    else {
      this.navbg = {}
    }
  }

  

  getRows(data: any[], itemsPerRow: number): number[] {
    const numberOfRows = Math.ceil(data.length / itemsPerRow);
    return Array.from({ length: numberOfRows }, (_, index) => index);
  }

}
