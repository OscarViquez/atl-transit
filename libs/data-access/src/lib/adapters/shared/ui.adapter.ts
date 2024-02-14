import { Header } from '@atl-transit/shared';
import { TrainUiAdapter } from '../train-arrivals';

export class UiAdapter {
   static TextToGenericHeader(
      title: string,
      description: string
   ): Header {
      return {
         title: TrainUiAdapter.MapHeaderToUiView(title),
         description: description
      };
   }
}
