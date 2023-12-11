import { CardDirective } from './card.directive';
import { Component, ElementRef, Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
   template: `<div
      ryaCard
      [theme]="theme"
      [margin]="margin"
      [borderRadius]="borderRadius"
      [borderColor]="borderColor"
      [border]="border"
   ></div>`
})
class TestComponent {
   theme = 'light';
   margin = 'auto';
   borderRadius = 'small';
   borderColor = 'default';
   border = false;
}

describe('CardDirective', () => {
   // let component: TestComponent;
   let fixture: ComponentFixture<TestComponent>;
   let divEl: HTMLElement;
   let rendererMock: Renderer2;
   let elementRefMock: ElementRef;

   beforeEach(() => {
      TestBed.configureTestingModule({
         declarations: [TestComponent, CardDirective]
      });

      // component = fixture.componentInstance;
      fixture = TestBed.createComponent(TestComponent);
      divEl = fixture.nativeElement.querySelector('div');
      rendererMock = { addClass: jest.fn() } as unknown as Renderer2;
      elementRefMock = { nativeElement: document.createElement('div') } as ElementRef;
   });

   it('should create an instance', () => {
      const directive = new CardDirective(rendererMock, elementRefMock);
      expect(directive).toBeTruthy();
   });

   it('should add "card" class on init', () => {
      fixture.detectChanges();
      expect(divEl.classList).toContain('card');
   });

   it('should add "theme-light" class on init', () => {
      fixture.detectChanges();
      expect(divEl.classList).toContain('theme-light');
   });

   it('should add "margin-auto" class on init', () => {
      fixture.detectChanges();
      expect(divEl.classList).toContain('margin-auto');
   });

   it('should add "radius-small" class on init', () => {
      fixture.detectChanges();
      expect(divEl.classList).toContain('radius-small');
   });

   it('should add "border-default" class on init', () => {
      fixture.detectChanges();
      expect(divEl.classList).toContain('border-default');
   });
});
