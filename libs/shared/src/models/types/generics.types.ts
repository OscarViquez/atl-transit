/**
 * * GenericCard is a generic type that can be used to define a card-like structure with different types of headers and content.
 *
 * @template H The type of the header.
 * @template C The type of the content.
 * * ^^^ It is an array because the content be slots of...
 * *    information like live arrivals or live bus routes
 *
 * @example
 * * // Define a card with a string header and number array content
 * let card1: GenericCard<string, number> = {
 *   header: "Card 1",
 *   content: [42, 43, 44]
 * };
 *
 * @example
 * * // Define a card with an object header and string array content
 * interface Header {
 *   title: string;
 *   subtitle: string;
 * }
 *
 * let card2: GenericCard<Header, string> = {
 *   header: {
 *     title: "Card 2",
 *     subtitle: "An array of strings"
 *   },
 *   content: ["one", "two", "three"]
 * };
 */

export type GenericCard<H, C> = {
   header: H;
   content: C[];
};

/**
 * TableProps is a generic interface that defines the properties for a table component.
 * @property data - An array of items of type T that the table will display.
 * @property columns - An array of keys of type T that the table will use to create columns.
 * @example
 * interface User {
 *   name: string;
 *   age: number;
 * }
 * const exampleTableProps: TableProps<User> = {
 *   data: [
 *     { name: 'Marta Aria', age: 25 },
 *     { name: 'John Smith', age: 30 }
 *   ],
 *   columns: ['name', 'age']
 * };
 * This would create a table with two columns ('name' and 'age') and two rows of data.
 */
export interface TableProps<T> {
   data: T[];
   columns: Array<keyof T>;
}

/**
 * EventHandler is a generic type that defines the structure of an event handler function.
 * @property E - A type that extends the built-in Event type. This is the type of event that the handler will receive.
 * @example
 * const clickHandler: EventHandler<MouseEvent> = (event) => {
 *   console.log(`Mouse was clicked at coordinates: ${event.clientX}, ${event.clientY}`);
 * };
 * This would create an event handler for mouse click events. The handler logs the coordinates of the mouse click.
 */
export type EventHandler<E extends Event> = (event: E) => void;
