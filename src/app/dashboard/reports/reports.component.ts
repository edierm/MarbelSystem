import { ValueService } from './../../../services/value.service';

  import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'reports-cmp',

  templateUrl: 'reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent implements OnInit {
  value: any[];
  product : any
    
  constructor(private valueService:ValueService  ) {}

  ngOnInit(): void {
    
    const user = JSON.parse(localStorage.getItem('userLogin'));
    this.valueService.valueByUser(user.email).subscribe((res)=>{

      this.value = res.value;
      
      console.log (res) 
});
  }



Search(){
  if(this.product == ""){
      this.ngOnInit();
  }else{
      this.value = this.value.filter(res =>{
          return res.nameproduct.toLocaleLowerCase().match(this.product.toLocaleLowerCase());
      })
  }
}

deleteValue(value){
  this.valueService.deleteValue(value._id).subscribe((res) => {
    console.log('producto  borrada', res);
    this.ngOnInit();  
});

}
}





