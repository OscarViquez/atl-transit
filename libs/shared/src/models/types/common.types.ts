/**
 *
 *
 *
 * * Common Types for Interfaces
 * * ==================================================================
 */

/**
 * Icon is a type that defines the structure of an icon based on the location of the image / icon.
 * - icon paths would be as followed: icons/{category}/{name}-{mode}.svg
 * - So based on the icon path the Icon is structured as followed and has the following properties:
 * @property category - the sub-folder where the icon is location, within the icons folder (e.g ex ).
 * @property name - The name of the icon.
 * @property mode - The mode of the icon, which can be either 'light' or 'dark'. This property is OPTIONAL.
 * @example
 * const exampleIcon: Icon = {
 *   category: 'navigation',
 *   name: 'overview',
 *   mode: 'light'
 * };
 * This would correspond to the icon located at: icons/navigation/overview-light.svg
 */
export type Icon = {
   category: string;
   name: string;
   mode?: string;
};

/**
 * Card is a type that defines the structure of a card.
 * @property title - The title of the card.
 * @property description - The description of the card.
 * @property icon - The icon of the card. This property is optional.
 * @property action - Associated with the action a user my take such as Link, Open Modal or Sheet. This property is optional.
 * @property badges - Associated with showing a user status or badges to describe the data, represented as an array of Badges. This property is optional.
 */
export type Card = {
   title: string;
   description?: string;
   icon?: Icon | string;
   url?: string;
   action?: Link[];
   badges?: Badges[];
};

/**
 * Badges is a type that defines the structure of a badge.
 * @property label - The text displayed on the badge.
 * @property color - The color of the badge.
 */
export type Badges = {
   label: string;
   color: BadgeColor;
};

/**
 * Link is a type that defines the structure of a hyperlink.
 * @property label - The text displayed for the hyperlink.
 * @property url - The URL that the hyperlink points to.
 * @example
 * const exampleLink: Link = {
 *   label: 'GitHub',
 *   url: 'https://github.com'
 * };
 *
 */
export type Link = {
   label: string;
   url: string;
};

/**
 *
 *
 *s
 * * Common Style Types
 * * ==================================================================
 */

// * Main Types
export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type Alignment = 'left' | 'right' | 'center';
export type Size = 'small' | 'medium' | 'large';
export type Color = 'red' | 'orange' | 'gold' | 'green' | 'blue' | 'pink' | 'white' | 'black';
export type Shape = 'square' | 'rounded' | 'pill';
export type UiModes = 'light' | 'dark';

// * Types with extended values
export type BorderRadius = Size | 'none' | 'x-large' | 'pill';
export type Padding = Size | 'x-large' | 'none' | 'x-small' | 'xx-large' | 'xxx-large';
export type BadgeColor = Color | 'info';

/**
 *
 *
 *
 * * DELETING TYPES BELOW
 * * ==================================================================
 */
// ! DELETING TYPES BELOW
// TODO: these types might repurposed, deleted, or moved to a different file

//! REMOVE THIS ❌
export type Spacing =
   | 'spacing-xs'
   | 'spacing-sm'
   | 'spacing-md'
   | 'spacing-lg'
   | 'spacing-xl'
   | 'spacing-default';

//! REMOVE THIS ❌
export type ButtonType = 'default' | 'menu' | 'text';
//! REMOVE THIS ❌
export enum ButtonInputType {
   BUTTON = 'button',
   HYPERLINK = 'link',
   SUBMIT = 'submit',
   RESET = 'reset',
   REFRESH = 'refresh'
}

// TODO: Will delete when intergrating button directive
//! REMOVE THIS ❌
export type ButtonContent = {
   label: string;
   routerLink?: string;
   href?: string;
   id: string;
   disabled?: boolean;
};

// TODO: Will delete when intergrating button directive
//! REMOVE THIS ❌
export type Variants = 'primary' | 'secondary' | 'accent' | 'text' | 'link';
