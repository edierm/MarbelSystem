import { RentService } from './../../../services/rent.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'clientRent-cmp',

  templateUrl: 'client-rent.component.html',
  styleUrls: ['./client-rent.component.scss'],
})
export class ClientRentComponent implements OnInit {
  
  rent: any [];
  nameproduct : any
  constructor( private rentService: RentService  ) {}

  ngOnInit(): void {
    const userRent = JSON.parse(localStorage.getItem('userLogin'));
    
    this.rentService.rentsByUser(userRent.email).subscribe((res)=>{

      this.rent = res.rents;
      
      console.log (res) 
    })
}


Search(){
  if(this.nameproduct == ""){
      this.ngOnInit();
  }else{
      this.rent = this.rent.filter(res =>{
          return res.nameproduct.toLocaleLowerCase().match(this.nameproduct.toLocaleLowerCase());
      })
  }
}


}
