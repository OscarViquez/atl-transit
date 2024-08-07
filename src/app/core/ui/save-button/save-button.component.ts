import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-save-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      class="grid place-content-center h-12 w-12 border border-neutral-400
           rounded-full transition-all ease-linear duration-100 focus-state-secondary">
      @if (isSaved) {
        <!-- Bookmark SVG  -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="18"
          viewBox="0 0 14 18"
          fill="none"
          class="animate-modal">
          <path
            d="M1.12565 17.865C0.655555 18.2032 0 17.8672 0 17.2881V3.07939C0 1.37869 1.37869 0 3.07939 0H10.1842C11.8849 0 13.2636 1.37869 13.2636 3.07939V17.2881C13.2636 17.8672 12.608 18.2032 12.1379 17.865L6.63178 13.9035L1.12565 17.865Z"
            class="fill-gold" />
        </svg>
      } @else {
        <!-- Add Bookmark SVG -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="20"
          viewBox="0 0 16 20"
          fill="none"
          class="animate-modal">
          <path
            d="M16 5.55654C16 2.85612 13.8109 0.666992 11.1104 0.666992C8.41002 0.666992 6.2209 2.85612 6.2209 5.55654C6.2209 8.25697 8.41002 10.4461 11.1104 10.4461C13.8109 10.4461 16 8.25697 16 5.55654ZM11.5555 6.00106L11.5559 8.2267C11.5559 8.47219 11.3569 8.6712 11.1114 8.6712C10.8659 8.6712 10.6669 8.47219 10.6669 8.2267L10.6665 6.00106H8.43951C8.19426 6.00106 7.99544 5.80205 7.99544 5.55655C7.99544 5.31106 8.19426 5.11205 8.43951 5.11205H10.6664L10.6659 2.88886C10.6659 2.64337 10.865 2.44436 11.1104 2.44436C11.3559 2.44436 11.555 2.64337 11.555 2.88886L11.5554 5.11205H13.7744C14.0197 5.11205 14.2185 5.31106 14.2185 5.55655C14.2185 5.80205 14.0197 6.00106 13.7744 6.00106H11.5555ZM11.1112 17.364V11.3351C11.5702 11.335 12.0166 11.2815 12.4447 11.1803V18.6651C12.4447 19.2084 11.8296 19.5236 11.3885 19.2063L6.22235 15.4894L1.05616 19.2063C0.615083 19.5236 0 19.2084 0 18.6651V5.33353C0 3.73783 1.29358 2.44425 2.88928 2.44425H6.24078C5.97705 2.85604 5.76412 3.3035 5.61084 3.77777H2.88928C2.03005 3.77777 1.33351 4.47431 1.33351 5.33353V17.364L5.83295 14.1268C6.06558 13.9594 6.37913 13.9594 6.61175 14.1268L11.1112 17.364Z"
            fill="#111111" />
        </svg>
      }
    </button>
  `,
})
export class SaveButtonComponent {
  @Input() isSaved: boolean = false;

  @Output() savedChange = new EventEmitter<boolean>();
}
