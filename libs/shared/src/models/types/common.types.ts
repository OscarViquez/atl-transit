/** For Light Mode and Dark Mode  */
export type UiModes = 'light' | 'dark';
export type Spacing = 'spacing-xs' | 'spacing-sm' | 'spacing-md' | 'spacing-lg' | 'spacing-xl' | 'spacing-default';

/** For When passing icons to components */
export type Icon = {
   category: string;
   name: string;
   mode: string;
};

export type ButtonContent = {
   label: string;
   routerLink?: string;
   href?: string;
   id: string;
   disabled?: boolean;
};

// text and
export type Variants = 'primary' | 'secondary' | 'accent' | 'text' | 'link';
export type Alignment = 'left' | 'right' | 'center';
