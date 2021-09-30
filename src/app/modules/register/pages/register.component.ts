import { Component } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    
    RegisterForm = this.fb.group({
        name:['',[Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['',[Validators.required, Validators.minLength(3)]],
        id:['',[Validators.required, Validators.minLength(7),Validators.maxLength(10) ]],
        phone:['',[Validators.required, Validators.minLength(3)]],
        adress:['',[Validators.required, Validators.minLength(5)]],
        city:['',[Validators.required, Validators.minLength(5)]],
      
    })
    constructor(private fb: FormBuilder) { }

    register(){
        console.log(this.RegisterForm.value);
    }
}