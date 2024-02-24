import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { BorderRadius, Padding, FlexDirection } from '../../models';

/**
 * * Types for Card Directive
 */
type FlexGap = 'none' | 'x-small' | 'small' | 'medium' | 'large';

@Directive({
   selector: '[ryaCard]',
   standalone: true
})
export class CardDirective implements AfterViewInit {
   /**
    * * Inputs would be used as attributes,
    * * e.g. <div ryaCard  spacing="auto">Content</div>
    */
   @Input() spacing: Padding = 'medium';
   @Input() borderRadius: BorderRadius = 'small';
   @Input() direction: FlexDirection = 'column';
   @Input() gap: FlexGap = 'small';
   // * These bools Based on Figma design
   @Input() shadow = false;
   @Input() border = false;
   @Input() transparent = false;

   constructor(private render: Renderer2, private element: ElementRef) {}

   /**
    * * After the view has been initialized,
    * * set the directive, which will add the classes to the element.
    */
   ngAfterViewInit(): void {
      //* Add these default classes to the element
      this.setDirective();
   }

   private setDirective(): void {
      //* Add these default classes to the element
      this.render.addClass(this.element.nativeElement, 'rya-card');

      //* Add these classes to the element, based on @Inputs
      this.addClassWithPrefix('rya-radius-', this.borderRadius);
      this.addClassWithPrefix('rya-card--spacing', this.spacing);
      this.addClassWithPrefix('rya-card--flex', this.direction);
      this.addClassWithPrefix('rya-card--gap', this.gap);
      this.addClassWithPrefix(`rya-card--shadow`, this.shadow);
      this.addClassWithPrefix(`rya-card--border`, this.border);
      this.addClassWithPrefix(`rya-card--transparent`, this.transparent);

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
