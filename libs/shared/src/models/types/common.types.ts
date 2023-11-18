/** For Light Mode and Dark Mode  */
export type UiModes = 'light' | 'dark';
export type Spacing = 'spacing-xs' | 'spacing-sm' | 'spacing-md' | 'spacing-lg' | 'spacing-xl' | 'spacing-default';

/** For When passing icons to components */
export type Icon = {
   path: string;
   url?: string;
};

export type ButtonContent = {
   label: string;
   href?: string;
   id?: string;
   disabled?: boolean;
};

export type Variants = 'primary' | 'secondary' | 'accent' | 'text' | 'link';
export type Alignment = 'left' | 'right' | 'center';
