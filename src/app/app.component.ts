import { Component, OnInit, OnDestroy, importProvidersFrom } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { SearchWidgetComponent } from './packages/search';
import { BottomNavComponent, SidebarComponent, TopNavComponent } from '@atl-transit/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

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
    <main class="flex flex-col justify-center mx-auto my-auto max-w-[120rem] md:gap-6 lg:flex-row">
      <core-top-nav />
      <div class="w-full max-w-[12rem] hidden lg:block lg:pl-8">
        <core-sidebar />
      </div>
      <div class="flex-1 p-6 pt-12 lg:p-8 mb-14 mt-10 lg:mt-0 xl:max-w-[96rem]">
        @if (showSearchWidget) {
          <div class="hidden lg:block lg:mb-10">
            <app-search-widget />
          </div>
        }
        <router-outlet />
      </div>
      <core-bottom-nav />
      <!-- <div class="fixed top-2/4 left-2/4"></div> -->
    </main>
  `,
})
export class AppComponent implements OnInit, OnDestroy {
  showSearchWidget = true;

  //
  /**
   * privatize the routerSubscription because it is only used in
   *  this typescript portion of this component
   * */
  private routerSubscription!: Subscription;

  /**
   * Inject the Router service to listen to the router events.
   * ActivatedRoute service was not used since we are only interested in the route changes
   * */
  constructor(private router: Router) {}

  // Check the current route and hide the search widget if the route is '/stations/'
  ngOnInit() {
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.checkRoute();
      });
  }

  // Unsubscribe from the router events to prevent memory leaks
  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  /**
   * Check the current route and hide the search widget if the route is '/stations/'
   * because the sticky search widget is not needed on the Station Details page
   * */
  private checkRoute() {
    const currentRoute = this.router.url;
    this.showSearchWidget = !currentRoute.includes('/stations/');
  }
}
