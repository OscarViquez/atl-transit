import { Injectable } from '@angular/core';
import { SideBarButtonProps, Sidebar, SidebarMenuItem, sideBarContent } from '../../shared';
import { ButtonProps, Icon, MenuProps } from '@atl-transit/shared';

@Injectable({
   providedIn: 'root'
})
export class StaticContentService {
   static setMenuContent(menu: SidebarMenuItem[], buttonProps: SideBarButtonProps): MenuProps[] {
      return menu.map((item) => ({
         title: item.title,
         divider: item.divider,
         items: this.setMenuItems(item.items, buttonProps)
      }));
   }

   static setMenuItems(items: string[], props: SideBarButtonProps): ButtonProps[] {
      return items.map((item) => ({
         content: {
            label: item.charAt(0).toUpperCase() + item.slice(1),
            routerLink: item.toLowerCase(),
            id: item.toLowerCase()
         },
         type: props.type,
         variant: props.variant,
         mode: props.mode,
         align: props.align,
         icon: {
            category: props.category,
            name: item.toLowerCase().replace(/ /g, '-'),
            mode: props.mode
         }
      }));
   }

   setSidebarContent(): Sidebar {
      const icon: Icon = {
         category: sideBarContent.logo.category,
         name: sideBarContent.logo.name,
         mode: sideBarContent.logo.mode
      };
      const menu: MenuProps[] = StaticContentService.setMenuContent(
         sideBarContent.menu,
         sideBarContent.button
      );
      return {
         icon,
         menu
      };
   }
}
