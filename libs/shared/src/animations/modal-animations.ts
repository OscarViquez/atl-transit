import { gsap } from 'gsap';

/**
 * `fadeIn` is a function that creates a fade-in animation on a given HTML element using GSAP Library.
 *
 * @param {HTMLElement} element - The HTML element to apply the animation to.
 *
 * The function uses GSAP's `fromTo` method to animate the element's opacity from 0 (fully transparent) to 1 (fully opaque).
 * The animation lasts for 0.2 seconds, as specified by the `duration` property.
 *
 * Example usage:
 * ```typescript
 * const element = document.getElementById('myElement');
 * fadeIn(element);
 * ```
 */
export function fadeIn(element: HTMLElement) {
   gsap.fromTo(element, { opacity: 0 }, { opacity: 1, duration: 0.2 });
}

