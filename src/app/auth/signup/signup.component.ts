import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  validateForm: FormGroup
  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.validateForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      checkPassword: new FormControl(null, Validators.required)
    })
  }

  submitForm() {
    this.auth.signupUser(this.validateForm.value.email, this.validateForm.value.password)
  }
}
