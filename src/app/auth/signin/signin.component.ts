import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  validateForm: FormGroup
  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.validateForm = new FormGroup({
      userName: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      remember: new FormControl(true, Validators.required)
    })
  }

  submitForm() {
    console.log(this.validateForm)
    this.auth.signinUser(this.validateForm.value.userName, this.validateForm.value.password)
  }
}
