export interface MartaSignPostResponse {
    lineCode: number;
    direction: string;
    destination: string;
    lastIocId: number; //location ID
    lastArrivalTrack: string;
    lastArrivalLocation: string;
    lastArrivalTime: Date;
    lastTrackIndex: string;
    lastPosition: number[];
    trainId: string;
 }
 
 export interface MartaRailPredictionsResponse {
    internalId: string;
    iocId: string;
    direction: string;
    line: string;
    station: string;
    destination: string;
    seconds: number;
    nextArr: Date;
 }

 
 /* NGRX Interface: Response Interface */
export type MartaArrivalResponse = {
    DESTINATION: string;
    DIRECTION: string;
    EVENT_TIME: Date;
    LINE: string;
    NEXT_ARR: string;
    STATION: string;
    TRAIN_ID: number;
    WAITING_SECONDS: number;
    WAITING_TIME: string;
 };
 

 
