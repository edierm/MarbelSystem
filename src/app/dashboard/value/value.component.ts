import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'value-cmp',

  templateUrl: 'value.component.html',
  styleUrls: ['./value.component.scss'],
})
export class ValueComponent implements OnInit {
  value: any[];
  nameproduct : any
    valueService: any;
  constructor(  ) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('userLogin'));
    this.valueService.salesByUser(user.email).subscribe((res)=>{

      this.value = res.values;
      
      console.log (res) 
    });
   
}


Search(){
  if(this.nameproduct == ""){
      this.ngOnInit();
  }else{
      this.value = this.value.filter(res =>{
          return res.nameproduct.toLocaleLowerCase().match(this.nameproduct.toLocaleLowerCase());
      })
  }
}


}