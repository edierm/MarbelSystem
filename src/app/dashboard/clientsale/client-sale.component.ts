
import { SaleService } from './../../../services/sale.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'clientSale-cmp',

  templateUrl: 'client-sale.component.html',
  styleUrls: ['./client-sale.component.scss'],
})
export class ClientSaleComponent implements OnInit {
  sale: any[];
  nameproduct : any
  constructor(private saleService: SaleService  ) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('userLogin'));
    this.saleService.salesByUser(user.email).subscribe((res)=>{

      this.sale = res.sales;
      
      console.log (res) 
    });
   
}


Search(){
  if(this.nameproduct == ""){
      this.ngOnInit();
  }else{
      this.sale = this.sale.filter(res =>{
          return res.nameproduct.toLocaleLowerCase().match(this.nameproduct.toLocaleLowerCase());
      })
  }
}


}
