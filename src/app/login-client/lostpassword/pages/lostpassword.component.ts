import { UsersServices } from './../../../../services/users.services';
import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';


@Component({
    selector: 'app-lost',
    templateUrl: './lostpassword.component.html',
    styleUrls: ['./lostpassword.component.scss']
})
export class LoginClientLostComponent {
    lostForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
       
    })
    constructor(private fb: FormBuilder, private userservices: UsersServices) {


     }

    lost(){
        console.log(this.lostForm.value);
        this.userservices.login(this.lostForm.value).subscribe((res)=>{
            console.log (res)
        })
    }
    
}