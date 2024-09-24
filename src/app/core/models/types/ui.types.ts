/**
 * Represents the color options for badges used in the UI.
 * These colors can be used to indicate different statuses or categories, even different rail lines for example.
 */
export type BadgeColor = 'gold' | 'red' | 'orange' | 'green' | 'blue' | 'gray' | 'white' | 'black';

/**
 * Different types of loading skeletons used in the UI.
 * These skeletons are used as placeholders while content is being loaded.
 */
export type LoadingSkeleton =
  | 'search'
  | 'card'
  | 'header'
  | 'icon'
  | 'list'
  | 'image'
  | 'button'
  | 'icon';

export type Link = {
  /**
   * The URL that the hyperlink points to
   */
  url: string;
  /**
   * The label of the hyperlink.
   */
  label?: string;
  /**
   * an optional id for the link
   */
  id?: string;
};
