import { Injectable } from '@angular/core';
import { StationFeedbackMessages, SectionHeaderMocks, TabContentMocks, TrainPageContent } from '../../shared';

@Injectable({
   providedIn: 'root'
})
export class StaticContentService {
   setTrainPageContent(): TrainPageContent {
      return {
         header: SectionHeaderMocks,
         tab: TabContentMocks,
         feedback: StationFeedbackMessages
      };
   }
}
