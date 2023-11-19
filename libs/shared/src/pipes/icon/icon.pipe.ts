import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'icon',
   standalone: true,
})
export class IconPathPipe implements PipeTransform {
   transform(category: string, icon: string, mode?: string): string {
      return `/assets/icons/${category}/${icon}${mode ? '-' + mode : ''}.svg`;
   }
}
