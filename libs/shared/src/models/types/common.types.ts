/**
 *
 *
 *
 * * Common Types for Interfaces
 * * ==================================================================
 */

/**
 * Card is a type that defines the structure of a card.
 * @property title - The title of the card.
 * @property description - The description of the card.
 * @property icon - The icon of the card. This property is optional.
 * @property link - Associated with the action a user my take such as Link, Open Modal or Sheet. This property is optional.
 * @property badges - Associated with showing a user status or badges to describe the data, represented as an array of Badges. This property is optional.
 */
export type Card = {
   title: string;
   description?: string;
   icon?: string;
   link?: Link[];
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
   id?: string;
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
export type BadgeColor = 'gold' | 'red' | 'green' | 'blue' | 'gray' | 'white';
export type BadgeSize = Size | 'auto';

//! REMOVE THIS ❌
export type Spacing =
   | 'spacing-xs'
   | 'spacing-sm'
   | 'spacing-md'
   | 'spacing-lg'
   | 'spacing-xl'
   | 'spacing-default';
