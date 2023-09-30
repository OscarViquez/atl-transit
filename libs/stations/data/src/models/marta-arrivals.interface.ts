/* NGRX Interface: Response Interface */
export type MartaArrivalResponse = {
   DESTINATION: string;
   DIRECTIOn: string;
   EVENT_TIME: Date;
   LINE: string;
   NEXT_ARR: string;
   STATION: string;
   TRAIN_ID: number;
   WAITING_SECONDS?: number;
   WAITING_TIME?: string;
};

/* NGRX Interface: State Interface  */
export type MartaArrivalWithLoaded = {
   arrivals: MartaArrivalResponse[];
   isLoaded: boolean;
};
