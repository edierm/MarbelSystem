import { Component } from '@angular/core';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    items: object[] = [
        {route: ['/productos/kitchens'], text: 'Cocina'},
        {route: ['/productos/table'], text: 'Mesones'},
        {route: ['/productos/bathrooms'], text: 'Baños'}
      ];

      onHidden(): void {
        console.log('Dropdown is hidden');
      }
      onShown(): void {
        console.log('Dropdown is shown');
      }
      isOpenChange(): void {
        console.log('Dropdown state is changed');
      }
}