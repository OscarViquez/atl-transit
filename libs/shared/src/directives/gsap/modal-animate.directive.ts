import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { gsap } from 'gsap';

@Directive({
   selector: '[ryaModalAnimation]',
   standalone: true
})
export class ModalAnimationDirective implements OnChanges {
   @Input() element!: string;
   @Input() active!: boolean;
   @Input() duration!: number;

   constructor(private el: ElementRef) {}

   ngOnChanges() {
      this.modalAnimation(this.active, this.element, this.duration);
   }

   private fadeIn(element: string, duration: number): void {
      gsap.from(element, {
         opacity: 0,
         duration,
         stagger: 0.1
      });
   }

   private fadeOut(element: string, duration: number): void {
      gsap.to(element, {
         opacity: 0,
         duration,
         stagger: 0.1
      });
   }

   private modalAnimation(active: boolean, element: string, duration: number): void {
      if (active) {
         this.fadeIn(element, duration);
      } else {
         this.fadeOut(element, duration);
      }
   }
}
