import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;

  constructor(
    private authService: AuthenticationService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      emailOrPhone: new FormControl('', [Validators.required, this.checkEmailOrPhone]),
      confirm: new FormControl('', Validators.requiredTrue)
    });
  }

  submit() {
    this.authService.registration(this.form.value).subscribe((response) => {
      //TODO:
     },
     (error) => {
       this.snackBar.open(error.message, 'Ok', {
         duration: 5000
       });
     });
  }

  checkEmailOrPhone(control: FormControl) {
    const validEmailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(control.value);
    const validPhoneNumber = /^(\+\d{1,3}[- ]?)?\d{10}$/.test(control.value);
    if (!validEmailPattern && !validPhoneNumber) {
      return {
        invalidEmailOrPhone: true
      };
    }
    return undefined;
  }

}
