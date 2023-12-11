import { AfterViewInit, Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

type Theme = 'light' | 'dark';
type BorderColor = 'default' | 'light' | 'dark';
type BorderRadius = 'small' | 'medium' | 'large';
type Padding = 'auto' | 'xs' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'xxxl';

@Directive({
   selector: '[ryaCard]',
   standalone: true
})
export class CardDirective implements AfterViewInit {
   @Input() theme: Theme = 'light';
   @Input() spacing: Padding = 'auto';
   @Input() borderRadius: BorderRadius = 'small';
   @Input() borderColor: BorderColor = 'default';
   @Input() shadow = false;

   constructor(private render: Renderer2, private element: ElementRef) {}
   ngAfterViewInit(): void {
      this.setDirective();
   }

   private setDirective(): void {
      this.render.addClass(this.element.nativeElement, 'card');
      this.addClassWithPrefix('card--theme', this.theme);
      this.addClassWithPrefix('card--border', this.borderColor);
      this.addClassWithPrefix('card--spacing', this.spacing);
      this.addClassWithPrefix('card--radius', this.borderRadius);
      this.addClassWithPrefix(`card--shadows-${this.theme}`, this.shadow);
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
