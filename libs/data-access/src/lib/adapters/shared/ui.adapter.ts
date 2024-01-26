import { GenericHeader } from '@atl-transit/shared';
import { TrainUiAdapter } from '../train-arrivals';

export class UiAdapter {
   static TextToGenericHeader(title: string, description: string): GenericHeader {
      return {
         title: TrainUiAdapter.MapHeaderToUiView(title),
         subtitle: description
      };
   }
}
