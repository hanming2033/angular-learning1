import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SignupComponent } from './signup/signup.component'
import { SigninComponent } from './signin/signin.component'
import { ReactiveFormsModule } from '@angular/forms'
import { NgZorroAntdModule } from 'ng-zorro-antd'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [SignupComponent, SigninComponent],
  imports: [CommonModule, NgZorroAntdModule, ReactiveFormsModule, RouterModule],
  exports: [SignupComponent, SigninComponent]
})
export class AuthModule {}
