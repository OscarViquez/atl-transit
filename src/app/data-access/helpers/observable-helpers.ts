import { distinctUntilChanged, filter, Observable } from 'rxjs';

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
