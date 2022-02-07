import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'clientSale-cmp',

  templateUrl: 'value.component.html',
  styleUrls: ['./value.component.scss'],
})
export class ValueComponent implements OnInit {
  sale: any[];
  nameproduct : any
    valueService: any;
  constructor(  ) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('userLogin'));
    this.valueService.salesByUser(user.email).subscribe((res)=>{

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