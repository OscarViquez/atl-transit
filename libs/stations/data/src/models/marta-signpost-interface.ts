export interface MartaSignPostInterface {
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
