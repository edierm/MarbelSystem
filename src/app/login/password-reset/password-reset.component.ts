import { UsersService } from './../../../services/users.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss'],
})
export class PasswordResetComponent {
  resetForm = this.fb.group({
    password: ['', [Validators.required]],
  });
  constructor(private fb: FormBuilder, private userservices: UsersService) {}

  reset() {
    console.log(this.resetForm.value);
    this.userservices.forgot(this.resetForm.value).subscribe((res) => {
      console.log(res);
    }, error => console.log('Ocurrio un error: ', error));
  }
}
