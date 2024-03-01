import { Component } from '@angular/core';
import { SuggestionsService } from '../suggestions.service';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrl: './suggestions.component.css'
})
export class SuggestionsComponent {
  searchHistory: any[] = [];

  constructor(private suggestionsService: SuggestionsService) {}

  ngOnInit() {
    const allSearchHistory = this.suggestionsService.getSearchHistory();
    this.searchHistory = this.removeDuplicates(allSearchHistory, 'id'); // Assuming 'id' is the unique identifier property
  }
  removeDuplicates(data: any[], key: string): any[] {
    const uniqueData = data.reduce((acc, currentItem) => {
      if (!acc.some((item: { [x: string]: any; }) => item[key] === currentItem[key])) {
        acc.push(currentItem);
      }
      return acc;
    }, []);
    return uniqueData;
  }

  getRows(data: any[], itemsPerRow: number): number[] {
    const numberOfRows = Math.ceil(data.length / itemsPerRow);
    return Array.from({ length: numberOfRows }, (_, index) => index);
  }
}
