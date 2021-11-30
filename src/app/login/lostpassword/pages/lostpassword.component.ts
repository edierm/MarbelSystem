import { UsersService } from './../../../../services/users.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';


@Component({
    selector: 'app-lost',
    templateUrl: './lostpassword.component.html',
    styleUrls: ['./lostpassword.component.scss']
})
export class LostComponent {
    lostForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
       
    })
    constructor(private fb: FormBuilder, private userservices: UsersService) {


     }

    lost(){
        console.log(this.lostForm.value);
        this.userservices.login(this.lostForm.value).subscribe((res)=>{
            console.log (res)
        })
    }
    
}