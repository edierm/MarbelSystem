import { Component } from '@angular/core';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class LoginClientHeaderComponent {
    items: object[] = [
        {route: ['client/productos/kitchens'], text: 'Cocina'},
        {route: ['client/productos/table'], text: 'Mesones'},
        {route: ['client/productos/bathrooms'], text: 'Baños'}
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