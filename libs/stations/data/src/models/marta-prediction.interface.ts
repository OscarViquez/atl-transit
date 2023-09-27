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
