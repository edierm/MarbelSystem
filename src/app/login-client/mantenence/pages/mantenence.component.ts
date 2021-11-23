import { Validators, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';


@Component({
    selector: 'app-mantenence',
    templateUrl: './mantenence.component.html',
    styleUrls: ['./mantenence.component.scss']
})
export class LoginClientMantenenceComponent {

    MantenenceForm = this.mf.group({
        name:['',[Validators.required, Validators.minLength(3)]],
        phone:['',[Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        adress:['',[Validators.required, Validators.minLength(5)]],
        city:['',[Validators.required, Validators.minLength(5)]],
     
        
      
    })
    constructor(private mf: FormBuilder) { }

    mantenence(){
        console.log(this.MantenenceForm.value);
    }
    
}