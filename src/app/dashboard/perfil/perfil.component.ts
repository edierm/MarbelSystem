import { UsersService } from './../../../services/users.service';
import { FormBuilder, Validators } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',

  templateUrl: 'perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  products: any[];
  dataLocal: any;
  userForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    document: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(15)],
    ],
    password: ['', [Validators.required, Validators.minLength(3)]],
    phone: ['', [Validators.required, Validators.maxLength(11)]],
    address: ['', [Validators.minLength(3)]],
    role: ['', [Validators.required]],
    city: ['', [Validators.required]],
  });
  constructor(private fb: FormBuilder, private usersService: UsersService) {}
  ngOnInit() {
    this.dataLocal = JSON.parse(localStorage.getItem('userLogin'));
    if (this.dataLocal) {
      this.userForm.patchValue(this.dataLocal);
    }
  }
  saveUser() {
    console.log(this.userForm.value);

    const data = this.userForm.value;

    Object.assign(data, { _id: this.dataLocal._id });
    this.usersService.updateClient(data).subscribe((res) => {
      console.log('Actualizado', res);
    });
  }
}
