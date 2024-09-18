import { Component, OnInit, OnDestroy, importProvidersFrom } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { SearchWidgetComponent } from './packages/search';
import { BottomNavComponent, SidebarComponent, TopNavComponent } from '@atl-transit/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    SidebarComponent,
    BottomNavComponent,
    TopNavComponent,
    SearchWidgetComponent,
  ],
  template: `
    <main class="flex flex-col justify-center mx-auto my-auto max-w-[84rem] md:gap-6 lg:flex-row">
      <div class="w-full max-w-[12rem] hidden lg:block lg:pl-8">
        <core-sidebar />
      </div>
      <div class="flex-1 mb-14 lg:p-8 lg:mt-0 xl:max-w-[96rem]">
        @if (showTopBar) {
          <core-top-nav />
        }
        @if (showSearchWidget) {
          <div class="hidden lg:block lg:mb-10">
            <app-search-widget />
          </div>
        }
        <router-outlet />
      </div>
      <core-bottom-nav />
    </main>
  `,
})
export class AppComponent implements OnInit, OnDestroy {
  showSearchWidget = true;
  showTopBar = true;

  private _destroy$ = new Subject<void>();

  /**
   * Inject the Router service to listen to the router events.
   * ActivatedRoute service was not used since we are only interested in the route changes
   * */
  constructor(private router: Router) {}

  // Check the current route and hide the search widget if the route is '/stations/'
  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this._destroy$)
      )
      .subscribe(() => {
        this.checkRoute();
      });
  }

  /**
   * Check the current route and hide the search widget if the route is '/stations/'
   * because the sticky search widget is not needed on the Station Details page
   * */
  private checkRoute() {
    const currentRoute = this.router.url;
    this.showTopBar = !currentRoute.includes('/stations/');
  }

  // Unsubscribe from the router events to prevent memory leaks
  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
