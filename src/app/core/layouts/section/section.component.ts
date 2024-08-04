import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'core-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="flex flex-col gap-8" [id]="sectionId">
      <h2 class="text-7 font-bold">
        <ng-content select="[section-title]"></ng-content>
      </h2>
      <div>
        <ng-content select="[section-content]"></ng-content>
      </div>
    </section>
  `,
})
export class SectionComponent {
  @Input() sectionId!: string;
}
