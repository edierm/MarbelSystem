import { NavigationEnd, Router } from '@angular/router';
import { Component } from '@angular/core';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marbelSystem';
  inClient = true;
  constructor(private router: Router) {
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(route => {
      const url: string= route['url'];
      if(url.includes('dashboard')) {
        this.inClient = false;
      }else {
        this.inClient = true;
      }
    });
  }
}
