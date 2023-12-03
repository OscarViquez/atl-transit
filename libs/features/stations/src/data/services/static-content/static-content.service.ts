import { Injectable } from '@angular/core';
import {
   GenericTrainErrorMocks,
   SectionHeaderMocks,
   TabContentMocks,
   TrainPageContent
} from '../../../shared';

@Injectable({
   providedIn: 'root'
})
export class StaticContentService {
   setTrainPageContent(): TrainPageContent {
      return {
         header: SectionHeaderMocks,
         tab: TabContentMocks,
         errorMessages: GenericTrainErrorMocks
      };
   }
}
