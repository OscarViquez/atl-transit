export enum EndpointResponse {
   PREDICTIONS_RESPONSE = 'http://labs.itsmarta.com/signpost/predictions',
   SIGNPOST_TRAIN_RESPONSE = 'http://labs.itsmarta.com/signpost/trains',
   RAIL_ARRIVAL_TIMES_RESPONSE = 'https://atl-transit-community-proxy.cyclic.app/arrivals',
   GENERAL_STATION_RESPONSE = 'https://atl-transit-community-proxy.cyclic.app/api/get/all/stations',
   AMENITIES_STATION_RESPONSE = 'https://atl-transit-community-proxy.cyclic.app/api/get/all/amenities',
   STATION_SCHEDULE_RESPONSE = 'https://atl-transit-community-proxy.cyclic.app/api/get/all/stationschedules'
}

export enum DevEndPointResponse {
   RAIL_ARRIVAL_TIMES_RESPONSE = 'http://localhost:3000/arrivals',
   GENERAL_STATION_RESPONSE = 'http://localhost:3000/api/get/all/stations',
   AMENITIES_STATION_RESPONSE = 'http://localhost:3000/api/get/all/amenities',
   STATION_SCHEDULE_RESPONSE = 'http://localhost:3000/api/get/all/stationschedules'
}
