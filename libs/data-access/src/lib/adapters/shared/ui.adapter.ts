import { Header } from '@atl-transit/shared';
import { setHeaderUi } from '../stations';

export class UiAdapter {
   static TextToGenericHeader(
      title: string,
      description: string
   ): Header {
      return {
         title: setHeaderUi(title),
         description: description
      };
   }
}
