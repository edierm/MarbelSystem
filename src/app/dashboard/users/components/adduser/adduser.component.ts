import { UsersService } from './../../../../../services/users.service';

import { FormBuilder, Validators } from '@angular/forms';
import { AfterViewInit, Component, TemplateRef, ViewChild, OnInit } from '@angular/core';
import { BsModalService, BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss'],
})
export class AddUserComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService
  ) {}
  selectClient = localStorage.getItem('selectClient');
  dataLocal: any;
  isUpdate = false;

  ngOnInit(): void {
    if (this.router.url.includes('edit')) {
      this.dataLocal = JSON.parse(localStorage.getItem('selectClient'));
      if (this.dataLocal) {
        this.userForm.patchValue(this.dataLocal);
        this.isUpdate = true;
      }
    }
    console.log(this.router.url);
  }

  @ViewChild('modalSuccess') public modalRef: ModalDirective;
  userForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    document: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(15)],],
    password: ['', [Validators.required, Validators.minLength(3)]],
    phone: ['', [Validators.required, Validators.maxLength(11)]],
    address: ['', [Validators.required, Validators.minLength(3)]],
    role: ['', [Validators.required]],
    city: ['', [Validators.required]],
  });
   dataModal = {
    title: '',
    body: '',
  };
  openModal() {
    this.modalRef.hide();
    this.modalRef.show();
  }

  saveUser() {
    console.log(this.userForm.value);
    
    const data = this.userForm.value;
    if (this.isUpdate) {
        Object.assign(data, {_id: this.route.snapshot.params.id})
        console.log(this.route);
        this.usersService.updateClient(data).subscribe((res) => {
            console.log('Actualizado', res);
        });
    } else {
      console.log('Data Producto: ', data);
      this.usersService.createUser(data).subscribe((res) => {
        console.log('Usuario creado', res);
      });
    }
  }

  clicksub() {
    console.log(this.userForm.value);
    this.userForm.reset();
  }
  get name() {
    return this.userForm.get('name');
  }
  get email() {
    return this.userForm.get('email');
  }
  get document() {
    return this.userForm.get('document');
  }
  get password() {
    return this.userForm.get('password');
  }
  get phone() {
    return this.userForm.get('phone');
  }
  get address() {
    return this.userForm.get('address');
  }
  get role() {
    return this.userForm.get('role');
  }
  get city() {
    return this.userForm.get('city');
  }
}
