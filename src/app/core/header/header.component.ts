import { Component, OnInit } from '@angular/core'
import { RecipesService } from '../../recipes/recipes.service'
import { AuthService } from '../../auth/auth.service'
import { AppState } from '../../store/app.reducers'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { AuthState } from '../../store/authStore/auth.reducers'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  authState: Observable<AuthState>
  initialPath: string
  show: boolean
  constructor(private rs: RecipesService, public as: AuthService, private store: Store<AppState>) {}

  ngOnInit() {
    this.authState = this.store.select('auth')
    // this.as.isAuthenticated().then(bool => {
    //   this.show = bool
    // })
    // this.as.eSignedIn.subscribe(bool => {
    //   console.log(bool)
    //   this.show = bool
    // })
  }

  onSaveRecipes() {
    this.rs.onSaveRecipes()
  }

  onGetRecipes() {
    this.rs.onGetRecipes()
  }

  onLogout() {}
}
