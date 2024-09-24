/**
 * Represents the header information for a UI component.
 */
export interface Header {
  /**
   * The title of the header.
   */
  title: string;

  /**
   * An optional description for the header.
   */
  description?: string;
}

/**
 * Represents a navigation menu item.
 */
export interface NavMenuItem {
  /**
   * The label of the navigation menu item.
   */
  label: string;

  /**
   * The router link associated with the navigation menu item.
   */
  routerLink: string;
}

/**
 * Represents a list item.
 */
export interface ListItem {
  /**
   * The name of the list item.
   */
  name: string;

  /**
   * An optional badge label for the list item.
   */
  badgeLabel?: string;

  /**
   * An optional description for the list item.
   */
  description?: string;
}
