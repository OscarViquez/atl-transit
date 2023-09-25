export interface IconComponent {
   ref?: HTMLElement;
   id?: string;
   size?: string | number;
   className?: string;
}

export interface Header {
   title: string;
   subtitle?: string;
}

export interface UserInterface {
   name?: string;
   longitude: number;
   latitude: number;
}
