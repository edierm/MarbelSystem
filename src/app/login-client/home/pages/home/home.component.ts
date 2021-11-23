import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class LoginClientHomeComponent implements OnInit {
    



ngOnInit(){}
 
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}