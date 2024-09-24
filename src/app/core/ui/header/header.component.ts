import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../models';

@Component({
  selector: 'core-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="header header--{{ variant }}">
      <h2 class="header__title tracking-normal">{{ content.title }}</h2>
      <p class="header__subtitle">{{ content.description }}</p>
    </div>
  `,
})
export class HeaderComponent {
  @Input() content!: Header;
  @Input() variant: 'page' | 'section' | 'card' = 'page';
}
