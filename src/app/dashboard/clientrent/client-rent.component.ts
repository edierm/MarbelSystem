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
    
    this.rentService.rentsByUser(userRent.email).subscribe((rents)=>{

      this.rent = rents.rents;
      
      console.log (rents) 
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
