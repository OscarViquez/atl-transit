# HOW TO STRUCTURE THE ADAPTERS

The adapter pattern is a design pattern that allows two incompatible interfaces to work together.

An adapter serves as a bridge between two objects. It catches calls for one object and transforms them to format and interface recognizable by the second object.

For example, if you have a UI component that expects data in a certain format, but you're getting the data from an API that returns it in a different format, you could use an adapter to convert the data from the API format to the format that your UI component expects.

<br>

## Folder Structure:

Adapters will be structured based on their feature library counterpart. Example:

This is the struture of the feature-ui library.

```
feature/
    breeze/
    overview/
    stations/
```

This means that our adapters folder should be structured similarly.

```
adapters/
    breeze/
    overview/
    stations/
```

We utilize adapters to convert data from the API/Endpoint format into to the matching _interface_ that our UI Components consume data.

<br>

## Creating Adapter Files:

In the same way that we organize our folder structure to reflect our UI Components, we should also structure our files based on these components.

For instance, our feature/stations is arranged as follows:

```
 stations/
    components/
        station-amenity/
        station-arrival/
        station-bus-route/
```

In line with this, our adapter files should be structured in a similar way.

```
adapters/
    stations/
        station-amenity.adapter.ts
        station-arrival.adapter.ts
        station-bus-route.adapter.ts
```

NOTE:
However, It's not always necessary to create an adapter for each individual UI component.

If we were to have a `product-list` and a `product-item` component, we should be fine with just creating a `product-list.adapter.ts` file.

This is because our `product-list` is a parent component for the `product-item`. It will iterate the data and pass it to the `product-item` component.

<br>

## Creating up the Adapter File:

Adapter files should _not_ be a class. Should be a collection of **pure** **static** functions / methods.

Here is an example of how an Adapter File would be set up for `nearest-station` component:  


> `getNearestStationArrivals()` is the main method that will be exported to the selectors.
```typescript
export const getNearestStationArrivals = (
   userLocation: Coordinates,
   arrivals: MartaArrivalResponse[],
   stationInfo: StationInfo[]
): StationArrival[] => {
   try {
      // Find the two nearest stations
      const nearestStations = setNearestStations(userLocation, stationInfo);

      // If no station was found, return an empty array
      if (nearestStations.length === 0) return [];

      // Get the arrivals for the nearest stations
      const stationArrivals = arrivals.filter(arrival => 
         nearestStations.some(station => station.name === arrival.STATION)
      );

      // Map the arrivals to the StationArrival format
      const formattedArrivals = stationArrivals.map(arrival => ({
         id: arrival.TRAIN_ID,
         name: arrival.DESTINATION,
         arrivalTime: arrival.WAITING_TIME
      }));

      return formattedArrivals;
   } catch (error) {
      console.error('Failed to get nearest station arrivals:', error);
      // Sets a Generic Message for when there are no data for nearest stations 
      return setGenericMessage('EMPTY')<StationArrival[]>;
   }
};

const setNearestStations = (
   userLocation: Coordinates,
   stations: Station[]
): Station[] => {
   try {
      // Calculate the distance between the user's location and each station
      const stationDistances = stations.map(station => {
         const distance = Math.sqrt(
            Math.pow(station.x - userLocation.x, 2) +
            Math.pow(station.y - userLocation.y, 2)
         );
         return {
            ...station,
            distance
         };
      });
      // Sort the stations by distance (ascending order)
      stationDistances.sort((a, b) => a.distance - b.distance);

      // Return the two closest stations
      return stationDistances.slice(0, 2);
   } catch (error) {
      console.error('Failed to set nearest stations:', error);
      return [];
   }
};

const findClosestStation = (
   userLocation: Coordinates,
   stations: Station[]
): Station | null => {
   try {
      /* Calculate the distance between the user's location and each station */
      const stationDistances = stations.map(station => {
         const distance = Math.sqrt(
            Math.pow(station.x - userLocation.x, 2) +
            Math.pow(station.y - userLocation.y, 2)
         );
         return {
            ...station,
            distance
         };
      });

      /* Sort the stations by distance (ascending order) */
      stationDistances.sort((a, b) => a.distance - b.distance);

      /*  Return the closest station */
      return stationDistances[0] || null;
   } catch (error) {
      console.error('Failed to find closest station:', error);
      return null;
   }
};

```

Most of these methods should have a way to handle errors, whether it is `try / catch`, or returning empty `object{} / array[]` if it can not process the data.

Adapters should always return the same `interface` and should return the same data, **_every_** time.

<br>

## Naming Convention for Adapter Functions:

Methods should be following this Naming Pattern.

`Verb / Feature / Modifier`

**Verb:** general action that is happening when function is called/

> Example: get / sort / order / set / find / check

**Feature:** general _feature_ or _component_ that this function is associated with.

> Example: StationArrivals / StationAmenities or Amenities / StationBusRoute or BusRoute

**Modifier:** ( _optional_ ) describes the condition in which the function is following.

> Example: ByOrder / ById / ByDate / Ascending / WithDetails
