import { Pipe, PipeTransform } from '@angular/core';
import { SearchResults } from '../interfaces/search.interfaces';

@Pipe({
  name: 'filterSearchResults',
  standalone: true,
})
export class FilterSearchResultsPipe implements PipeTransform {
  transform(searchResults: SearchResults[], query: string): SearchResults[] {
    if (!query) {
      return [...searchResults];
    }
    return searchResults
      .map(category => ({
        ...category,
        list: category.list.filter(item => item.name.toLowerCase().includes(query.toLowerCase())),
      }))
      .filter(category => category.list.length > 0);
  }
}
