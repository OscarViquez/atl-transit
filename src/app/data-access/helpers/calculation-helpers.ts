import { GeoLocation } from '../models/api.interfaces';

/**
 * We are using the Haversine formula to calculate the distance between two points on the Earth
 * Link to the resources:
 * - https://community.esri.com/t5/coordinate-reference-systems-blog/distance-on-a-sphere-the-haversine-formula/ba-p/902128
 * - https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula
 */
export function calculateDistanceBetweenCoordinates(
  location1: GeoLocation,
  location2: GeoLocation
): number {
  const earthRadiusKm = 6371; // Radius of the Earth in km
  const deltaLatitudeRadians = degreesToRadians(location2.latitude - location1.latitude);
  const deltaLongitudeRadians = degreesToRadians(location2.longitude - location1.longitude);
  const halfChordLengthSquared =
    Math.sin(deltaLatitudeRadians / 2) * Math.sin(deltaLatitudeRadians / 2) +
    Math.cos(degreesToRadians(location1.latitude)) *
      Math.cos(degreesToRadians(location2.latitude)) *
      Math.sin(deltaLongitudeRadians / 2) *
      Math.sin(deltaLongitudeRadians / 2);
  const angularDistanceRadians =
    2 * Math.atan2(Math.sqrt(halfChordLengthSquared), Math.sqrt(1 - halfChordLengthSquared));
  return earthRadiusKm * angularDistanceRadians;
}

/**
 * * Convert degrees to radians because the trigonometric functions in JavaScript use radians
 * - MY NOTE: A radian is the angle subtended at the center of a circle by an arc that is equal in length to the radius of the circle.
 * - The circumference of a circle is 2πr, and there are 360 degrees in a full circle. Therefore, there are 2π radians in a full circle.
 * - To convert degrees to radians, multiply the number of degrees by π/180.
 */
export function degreesToRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}
