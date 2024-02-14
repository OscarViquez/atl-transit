import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { FlexDirection, Shape, Size } from '../../models';

/**
 * * Types for Button Directive ONLY
 */
type ButtonSize = Size | 'full';
type ButtonAppearance = 'subtle' | 'secondary' | 'primary' | 'transparent' | 'tertiary' | 'square' | 'quaternary';
type IconPosition = 'before' | 'after';
type ButtonAlignment = 'left' | 'center' | 'right';

@Directive({
   selector: '[ryaButton]',
   standalone: true
})
export class ButtonDirective implements AfterViewInit {
   /**
    * * Inputs would be used as attributes,
    * * e.g. <div ryaButton >Content</div>
    */
   // TODO: @Input shape: Move it into common types
   // * Inputs with default values
   @Input() shape: Shape = 'rounded';
   @Input() size: ButtonSize = 'medium';
   @Input() appearance: ButtonAppearance = 'secondary';
   @Input() alignment: ButtonAlignment = 'center';
   @Input() direction: FlexDirection = 'row';
   @Input() animation = true;
   @Input() popStyle = false;


   // * Inputs without default values
   @Input() iconPosition: IconPosition = 'before';

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
      this.render.addClass(this.element.nativeElement, 'rya-button');

      //* Add these classes to the element, based on @Inputs
      this.addClassWithPrefix('rya-button--shape', this.shape);
      this.addClassWithPrefix('rya-button--size', this.size);
      this.addClassWithPrefix('rya-button--appearance', this.appearance);
      this.addClassWithPrefix('rya-button--align', this.alignment);
      this.addClassWithPrefix('rya-button--direction', this.direction);
      this.addClassWithPrefix('rya-button--icon-position', this.iconPosition);
      this.addClassWithPrefix('rya-button--pop-style', this.popStyle);
      this.addClassWithPrefix('rya-button--animation', this.animation);

      // * Add a class if the element has no text, only an icon
      if (this.element.nativeElement.textContent.trim().length === 0) {
         this.render.addClass(this.element.nativeElement, 'rya-button--icon-only');
      }
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
