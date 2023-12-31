import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResults } from '../../../shared';
import { gsap } from 'gsap';
import { RouterLink } from '@angular/router';
import { SharedService } from '@atl-transit/shared';

@Component({
   selector: 'rya-search-results',
   standalone: true,
   imports: [CommonModule, RouterLink],
   templateUrl: './search-results.component.html',
   styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnChanges {
   @Input() results: SearchResults[] = [];


   constructor(public shared: SharedService){}
   
   ngOnChanges(changes: SimpleChanges) {
      if (changes['results'] && changes['results'].currentValue.length > 0) {
        setTimeout(() => this.animateResults(), 0);
      }
    }
    
    animateResults() {
      const results = Array.from(document.querySelectorAll('.search-results-card'));
      results.forEach((result, index) => {
        gsap.fromTo(result, { opacity: 0 }, { opacity: 1, delay: index * 0.05 });
      });
    }

    // TODO: this is just place holder
    routerLinkUrl(index: number): string {
      return `station/${index + 1}`
    }
}
