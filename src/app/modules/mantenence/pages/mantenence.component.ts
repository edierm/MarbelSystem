import { Validators, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';


@Component({
    selector: 'app-mantenence',
    templateUrl: './mantenence.component.html',
    styleUrls: ['./mantenence.component.scss']
})
export class MantenenceComponent {

    MantenenceForm = this.fb.group({
        name:['',[Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        check: ['',[Validators.required]],
        made:['',[Validators.required ]],
        phone:['',[Validators.required, Validators.minLength(3)]],
        adress:['',[Validators.required, Validators.minLength(5)]],
        city:['',[Validators.required, Validators.minLength(5)]],
        idCity:['',[Validators.required]]
    })
    constructor(private fb: FormBuilder) { }

    mantenence(){
        console.log(this.MantenenceForm.value);
    }
    
}