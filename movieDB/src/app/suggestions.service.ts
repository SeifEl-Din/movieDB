import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuggestionsService {
  constructor() { }

  searchHistory: any[] = [];

  addToSearchHistory(searchResults: any[]): void {
    if (searchResults.length > 0) {
      this.searchHistory.push(...searchResults);
    }
  }

  getSearchHistory(): any[] {
    return this.searchHistory;
  }

  removeDuplicatesFromSearchHistory(): void {
    this.searchHistory = this.searchHistory.filter(
      (value, index, self) =>
        index ===
        self.findIndex(
          (t) =>
            t.id === value.id &&
            t.title === value.title &&
            t.releaseYear === value.releaseYear
        )
    );
  }
}
