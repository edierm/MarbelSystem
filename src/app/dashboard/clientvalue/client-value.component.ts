import { Router } from '@angular/router';
import { ValueService } from './../../../services/value.service';

  import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'clientValue-cmp',

  templateUrl: 'client-value.component.html',
  styleUrls: ['./client-value.component.scss'],
})
export class ClientValueComponent implements OnInit {
  value: any[];
  product : any
    
  constructor(private valueService:ValueService, private router: Router  ) {}

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
          return res.pruduct.toLocaleLowerCase().match(this.product.toLocaleLowerCase());
      })
  }
}

deleteValue(value){
  this.valueService.deleteValue(value._id).subscribe((res) => {
    console.log('producto  borrada', res);
    this.ngOnInit();  
});

}
editValue(value) {
    localStorage.setItem('selectValue', JSON.stringify(value));
    this.router.navigate([`/dashboard/value/edit/${value._id}`]);
  }
}





