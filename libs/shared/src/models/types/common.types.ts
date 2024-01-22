/** For Light Mode and Dark Mode  */
export type UiModes = 'light' | 'dark';
export type Spacing =
   | 'spacing-xs'
   | 'spacing-sm'
   | 'spacing-md'
   | 'spacing-lg'
   | 'spacing-xl'
   | 'spacing-default';

/** For When passing icons to components */
export type Icon = {
   category: string;
   name: string;
   mode?: string;
};
// TODO: these types might repurposed, deleted, or moved to a different file
export type ButtonSize = 'small' | 'med' | 'large';
export type ButtonType = 'default' | 'menu' | 'text';

export enum ButtonInputType {
   BUTTON = 'button',
   HYPERLINK = 'link',
   SUBMIT = 'submit',
   RESET = 'reset',
   REFRESH = 'refresh'
}

// TODO: Will delete when intergrating button directive
export type ButtonContent = {
   label: string;
   routerLink?: string;
   href?: string;
   id: string;
   disabled?: boolean;
};

// TODO: Will delete when intergrating button directive
export type Variants = 'primary' | 'secondary' | 'accent' | 'text' | 'link';

/**
 * * Common Style Types:
 * * - Main Types
 * * - Types with extended values
 */

// * Main Types
export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type Alignment = 'left' | 'right' | 'center';
export type Size = 'small' | 'medium' | 'large';
export type Color = 'red' | 'orange' | 'gold' | 'green' | 'blue' | 'pink' | 'white' | 'black';
export type Shape = 'square' | 'rounded' | 'pill';

// * Types with extended values
export type BorderRadius = Size | 'none' | 'x-large' | 'pill';
export type Padding = Size | 'x-large' | 'none' | 'x-small' | 'xx-large' | 'xxx-large';
