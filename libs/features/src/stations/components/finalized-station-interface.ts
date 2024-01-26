// TODO: Delete this file after refactoring the main inteface file for this feature.


// /*
//  *  Station Feature Pages Interfaces
//  * =================================
//  */

// interface StationDetailsPage {
//     // * General Info of the Station e.g. Name of Station, Description, Badges
//     header: GenericHeader<string, string, Badges[]>;
//     // * Content for Scheduled Arrival Card
//     scheduleInfo: Card;
//     // * Real Time Arrivals for the Station
//     arrivals: StationArrival | Card;
//     // * Content Station Amenities
//     amenity: StationAmenity;
//     // * Content for connecting bus routes to the station
//     bus: StationBusRoute;
//     // * Content for station map
//     map: StationMap; 
//     // * Content for station parking
//     parking: StationParking;
//   }
  
//   interface TrainPage {
//     // * Page header for Train Page
//     header: Header;
//     // * Content for Nearest Stations with Train Arrival Info
//     nearest: StationArrival[] | Card;
//     // * Content for Saved Stations with Train Arrival Info
//     saved: StationArrival[] | Card;
//     // * Content for stationResources
//     resource: StationResources;
//     // * Content for station map
//     map: StationMap;
//   }
  
//   /*
//    *  Component Overview Interfaces
//    * =================================
//    */
  
//   interface StationArrival {
//     // * ID for storing / saving station
//     id: number;
//     // * Station Name & Description
//     header: Header;
//     // * Array of Train Arrival Information ( e.g. Train Arrival Time, Train Arrival Status )
//     arrivals: StationArrivalSlot[];
//   }
  
//   interface StationArrivalSlot {
//     // * Train Arrival Time ( e.g. Arriving, 5 min, 10 min )
//     arrivalTime: string;
//     // * Last Station Destination of Train Line ( e.g. Doraville, Airport )
//     destination: string;
//     // * Direction of Train Line ( e.g. North, South, East, West )
//     direction: string;
//     // * Train Line ( e.g. Red, Gold, Blue )
//     line: string;
//   }
  
//   interface StationBusRoute {
//     // * Station Name & Description
//     header: Header;
//     // * Array of Bus Route Information ( e.g. Bus Route Name, Bus Route Description )
//     busRoutes: BusRoutesSlot[];
//   }
  
//   interface BusRoutesSlot {
//     image: Icon;
//     // * Bus Route Number ( e.g. 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 )
//     route: string;
//     // * Bus Route Description ( e.g. North, South, East, West )
//     description: string;
//     // * Bus Route Link ( e.g. https://www.itsmarta.com/ )
//     link: Link;
//   }
  
//   interface StationMap {
//     // * Station Map Image
//     image: string;
//   }
  
//   // * This Type will be used for Station Amenities
//   type StationAmenity = GenericCard<Header, Card[]>;
  
//   // * This Type will be used for Station Parking
//   type StationParking = GenericCard<Header, Card>;
  
//   // * This Type will be used for Station Resources / Explore Resources
//   type StationResources = GenericCard<Header, Card[]>;
  
//   /*
//    *  Shared Interfaces
//    * =================================
//    */
  
//   interface Link {
//     label: string;
//     url: string;
//   }
  
//   interface Header {
//     title: string;
//     description?: string;
//     badges?: Badges[];
//   }
  
//   type Card = {
//     title: string;
//     description: string;
//     icon?: Icon;
//     action?: Link[];
//     badges?: Badges[];
//   };
  
//   type Badges = {
//     label: string;
//     color: string;
//   };
  
//   type Icon = {};
  
//   // * Generic Interfaces =================================
//   /**
//    * * GenericHeader is a generic interface that can be used to define headers with different types of title, description, and badges.
//    *
//    * @template T The type of the title.
//    * @template D The type of the description.
//    * @template B The type of the badges.
//    *
//    * @example
//    * * // Define a header with a string title, string description, and array of string badges
//    * let header1: GenericHeader<string, string, string> = {
//    *   title: "Title 1",
//    *   description: "Description 1",
//    *   badges: ["Badge1", "Badge2"]
//    * };
//    *
//    * @example
//    * * // Define a header with a string title, no description, and no badges
//    * let header2: GenericHeader<string, null, null> = {
//    *   title: "Title 2",
//    *   description: null
//    * };
//    */
  
//   type GenericHeader<T, D, B> = {
//     title: T;
//     description: D;
//     badges?: B[];
//   };
  
//   /**
//    * * // GenericCard is a generic type that can be used to define a card-like structure with different types of headers and content.
//    *
//    * @template H The type of the header.
//    * @template C The type of the content. 
//    * * ^^^ It is an array because the content be slots of...
//    * *    information like live arrivals or live bus routes
//    *
//    * @example
//    * * // Define a card with a string header and number array content
//    * let card1: GenericCard<string, number> = {
//    *   header: "Card 1",
//    *   content: [42, 43, 44]
//    * };
//    *
//    * @example
//    * * // Define a card with an object header and string array content
//    * interface Header {
//    *   title: string;
//    *   subtitle: string;
//    * }
//    *
//    * let card2: GenericCard<Header, string> = {
//    *   header: {
//    *     title: "Card 2",
//    *     subtitle: "An array of strings"
//    *   },
//    *   content: ["one", "two", "three"]
//    * };
//    */
  
//   type GenericCard<H, C> = {
//     header: H;
//     content: C[];
//   };
  
//   type GenericArrival<T, A> = {
//     id: number;
//     title: T;
//     arrivals: A[];
//   };
  