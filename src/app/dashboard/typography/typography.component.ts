import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'typography-cmp',
    moduleId: module.id,
    templateUrl: 'typography.component.html'
})

export class TypographyComponent{
    RegisterForm = this.fb.group({
        name:['',[Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['',[Validators.required, Validators.minLength(3)]],
        id:['',[Validators.required, Validators.minLength(7),Validators.maxLength(10) ]],
        phone:['',[Validators.required, Validators.minLength(3)]],
        adress:['',[Validators.required, Validators.minLength(5)]],
        city:['',[Validators.required, Validators.minLength(5)]],
        idCity:['',[Validators.required, Validators.minLength(5)]],
        check:['',[Validators.required]]
        
    })
    constructor(private fb: FormBuilder) { }

    register(){
        console.log(this.RegisterForm.value);
    }
}
