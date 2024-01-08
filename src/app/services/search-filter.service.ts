import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchFilterService {
  searchChanged = new EventEmitter<string>();

  emitSearchChanged(search: string): void {
    this.searchChanged.emit(search);
  }
}
