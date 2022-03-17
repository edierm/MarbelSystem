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
        this.userservices.forgot(this.lostForm.value).subscribe((res)=>{
            console.log (res)
        })
    }


   /*  forgot(){
    this.userservices.forgot(data).subscribe((res) => {
        console.log('Credito  producto', res);
        this.dataModal.title = 'Credito Creado';
        this.dataModal.body = 'Exito';
        this.openModal();
      }, (error) => {
        this.dataModal.title = 'Error';
        this.dataModal.body = 'No se pudo crear el Credito';
        this.openModal();
      });
    }    */
}