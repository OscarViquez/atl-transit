import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

/**
 * * Types for Layout Directive
 */
type LayoutType = 'page' | 'section' | 'subsection'  | 'container' | 'sidebar' | 'header';

@Directive({
   selector: '[ryaLayout]',
   standalone: true
})
export class LayoutDirective implements AfterViewInit {
   /**
    * * Inputs would be used as attributes,
    * * e.g. <div ryaLayout layoutType="page"> ... </div>
    */
   @Input() layoutType: LayoutType = 'page';

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
      this.render.addClass(this.element.nativeElement, 'rya-layout');

      //* Add these classes to the element, based on @Inputs
      this.addClassWithPrefix(`rya-layout--type`, this.layoutType);
   }

   private addClassWithPrefix(prefix: string, value: string | boolean): void {
      if (value) {
         const className = this.setClassName([prefix, value.toString()]);
         this.render.addClass(this.element.nativeElement, className);
      }
   }

   private setClassName(classParts: string[], delimiter = '-'): string {
      return classParts.join(delimiter);
   }
}
