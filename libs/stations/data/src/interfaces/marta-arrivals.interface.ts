/* NGRX Interface: Response Interface */
export type MartaArrivalResponse = {
   destination: string;
   direction: string;
   event_time: Date;
   line: string;
   next_arr: Date;
   station: string;
   train_id: number;
   waiting_seconds?: number;
   waiting_time?: string;
};

/* NGRX Interface: State Interface  */
export type MartaArrivalWithLoaded = {
   arrivals: MartaArrivalResponse[];
   isLoaded: boolean;
};
