import { Router } from '@angular/router';
import { ValueService } from './../../../services/value.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'value-cmp',

  templateUrl: 'value.component.html',
  styleUrls: ['./value.component.scss'],
})
export class ValueComponent implements OnInit {
  value: any[];
  nameproduct : any
    
  constructor(private valueService:ValueService, private router: Router  ) {}

  ngOnInit(): void {
    
    this.getValue();
   
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
  this.valueService.deleteValue(value._id).subscribe((res) => {
    console.log('producto  borrada', res);
    this.getValue();  
});

}

getValue(){
  this.valueService.getAllValues().subscribe(({value})=>{

    this.value = value;
    
  
  });

}
editValue(value) {
  localStorage.setItem('selectValue', JSON.stringify(value));
  this.router.navigate([`/dashboard/value/edit/${value._id}`]);
}






}