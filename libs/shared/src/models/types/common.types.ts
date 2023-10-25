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
   name: string;
   alt: string;
   path: string;
   url?: string;
};
