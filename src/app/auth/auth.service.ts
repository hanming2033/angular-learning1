import { Injectable } from '@angular/core'
import * as fb from 'firebase/app'
import { Router } from '@angular/router'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  eSignedIn = new Subject<boolean>()
  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    fb.auth()
      .createUserAndRetrieveDataWithEmailAndPassword(email, password)
      .then(value => {
        this.eSignedIn.next(true)
      })
      .catch(error => console.log(error))
  }

  async signinUser(email: string, password: string) {
    console.log(email, password)
    try {
      await fb.auth().signInWithEmailAndPassword(email, password)
      this.eSignedIn.next(true)
      this.router.navigate(['/'])
    } catch (error) {}
  }

  async getToken(): Promise<any> {
    try {
      const res = await fb.auth().currentUser.getIdToken()
      return res
    } catch (err) {}
  }

  async isAuthenticated() {
    try {
      const token = await fb.auth().currentUser.getIdToken()
      return token !== null
    } catch (err) {
      console.log(err)
    }
  }
}
