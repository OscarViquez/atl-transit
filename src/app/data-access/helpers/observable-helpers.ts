import { combineLatest, distinctUntilChanged, filter, map, Observable } from 'rxjs';

/**
 * Filters out invalid items from an observable stream.
 * @param observable Pass in any observable.
 * @param predicate Pass in a predicate `function` to determine if an item is valid.
 *
 * e.g. We can use this to determine whether the observable is NOT Null:
 * e.g code: `filterValidItems(observable$, item => item !== null)`
 */
export function filterValidItems<T>(
  observable: Observable<T>,
  predicate: (item: T) => boolean
): Observable<T> {
  return observable.pipe(filter(predicate), distinctUntilChanged());
}

/**
 * Filters and maps train arrivals based on the user's location.
 * @param currentData$ e.g Pass in the user's station train arrival data observable.
 * @param booleanFlag$ e,g pass in isLocationOn$ observable.
 */
export function filterAndMapArrivalsFromFlag<T>(
  currentData$: Observable<T>,
  booleanFlag$: Observable<boolean>
): Observable<T> {
  return combineLatest([currentData$, booleanFlag$]).pipe(
    filter(([_, booleanFlag]) => booleanFlag), // Only allow through when booleanFlag is true
    map(([data]) => data) // Map to the data part of the tuple
  );
}
