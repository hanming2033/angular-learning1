import { Component, OnInit } from '@angular/core'
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'recipe-shopping'
  componentToShow = 'recipes'

  onShowComponent(comp: string) {
    this.componentToShow = comp
  }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyCQ51r9yEVFhRMtpSeH5aKWOpidjRWMEmo',
      authDomain: 'ng-recipe-book-15551.firebaseapp.com'
    })
  }
}
