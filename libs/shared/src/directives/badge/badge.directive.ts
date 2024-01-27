import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { BadgeColor, BorderRadius } from '../../models';

@Directive({
   selector: '[ryaBadge]',
   standalone: true
})
export class BadgeDirective implements AfterViewInit {
   /**
    * * Inputs would be used as attributes,
    * * e.g. <span ryaBadge color="info" radius="small">Badge</span>
    */
   @Input() color: BadgeColor = 'info';
   @Input() radius: BorderRadius = 'none';

   constructor(private render: Renderer2, private element: ElementRef) {}

   /**
    * * After the view has been initialized,
    * * set the directive, which will add the classes to the element.
    */
   ngAfterViewInit(): void {
      this.setDirective();
   }

   private setDirective(): void {
      //* Add these default classes to the element
      this.render.addClass(this.element.nativeElement, 'rya-badge');
      this.render.addClass(this.element.nativeElement, 'rya-text--xs');
      this.render.addClass(this.element.nativeElement, 'rya-font--semibold');

      //* Add these badge classes to the element, based on @Inputs
      this.addClassWithPrefix('rya-badge--color', this.color);
      this.addClassWithPrefix('rya-badge--radius', this.radius);
   }

   private addClassWithPrefix(prefix: string, value: string | boolean): void {
      if (value) {
         const className = this.setClassName([prefix, value.toString()]);
         this.render.addClass(this.element.nativeElement, className);
      }
   }

   /**
    * @param className - the class name to be set
    * * e.g 'rya-badge--color'
    * @param delimiter - the delimiter to be used to join the class parts
    * * e.g. '-'
    * @returns the class name + the delimiter
    * * e.g. 'rya-badge--color-'
    */
   private setClassName(className: string[], delimiter = '-'): string {
      // * Join the class parts with the delimiter
      return className.join(delimiter);
   }
}
