import { Injectable } from '@angular/core';
import { SearchResults } from '../../../packages/search/interfaces/search.interfaces';
import { STATIONS_INFO_CONSTANTS } from '../../constants/station.constants';
import { StationMetadata } from '../../models/transit.interfaces';
import { formatStationName, generateStationUrl } from '../../utils/trains-utils';

@Injectable({
  providedIn: 'root',
})
export class SearchStoreService {
  mapAllStationsList(): SearchResults {
    return {
      catergory: 'All Stations',
      list: STATIONS_INFO_CONSTANTS.map((station: StationMetadata) => {
        return {
          name: formatStationName(station.name),
          url: generateStationUrl(station.name),
        };
      }),
    };
  }
}
