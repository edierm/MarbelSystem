import { UsersServices } from './../../../../services/users.services';
import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['',[Validators.required, Validators.minLength(3)]],
    })
    constructor(private fb: FormBuilder, private userservices: UsersServices) {


     }

    loguear(){
        console.log(this.loginForm.value);
        this.userservices.login(this.loginForm.value).subscribe((res)=>{
            console.log (res)
        })
    }
    
}