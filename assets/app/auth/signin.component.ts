import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})

export class SigninComponent {
    myForm: FormGroup;

    onSubmit() {
        console.log({pristine: this.myForm.pristine, email: this.myForm.value.email});
        this.myForm.reset();
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            email: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        });
    }
}