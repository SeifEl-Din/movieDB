import { Injectable,EventEmitter  } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchQueryChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  updateSearchQuery(query: string): void {
    this.searchQueryChanged.emit(query);
  }
}
