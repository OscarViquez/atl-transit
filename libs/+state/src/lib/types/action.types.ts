export enum ActionTypes {
   GET_RAIL_ARRIVALS = '[Railway] Get Railway Information',
   GET_RAIL_ARRIVALS_SUCCESS = '[Railway] Get Railway Information Success',
   GET_RAIL_ARRIVALS_FAILURE = '[Railway] Get Railway Information Failure',
}


export enum UserActionTypes {
   LocateType = 'Location',
   LocateUserSuccess = 'Locate User Success',
   LocateUserFailure = 'Locate User Failure',
   StationType = 'Station',
   StationUserSuccess = 'User Station Mapping Success', 
   StationUserFailure = 'User Station Mapping Failure',
}

export enum ArrivalActionTypes {

}

export enum StationActionTypes {
   GeneralInformationType = 'Station',
   GeneralInformationSuccess = 'General Station Success',
   GeneralInformationFailure = 'General Station Failure', 
   ArrivalResponseType = 'Arrival Response',
   ArrivalResponseSuccess = 'Arrival Response Success', 
   ArrivalResponseFailure = 'Arrival Response Failure', 
   ArrivalMappingType = 'Arrival Mapping', 
   ArrivalMappingSuccess = 'Arrival Mapping Success', 
   ArrivalMappingFailure = 'Arrival Mapping Failure',
}