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
    
    this.valueByUser();
   
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

deleteValue(value){
  this.valueService.deleteUser(value._id).subscribe((res) => {
    console.log('producto  borrada', res);
    this.valueByUser();  
});

}

valueByUser(){
  const user = JSON.parse(localStorage.getItem('userLogin'));
  this.valueService.valueByUser(user.email).subscribe((res)=>{

    this.value = res.values;
    
    console.log (res) 
  });

}


}