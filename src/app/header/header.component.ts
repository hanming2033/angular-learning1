import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { RecipesService } from '../recipes/recipes.service'
import { AuthService } from '../auth/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  initialPath: string
  show: boolean
  constructor(private rs: RecipesService, public as: AuthService) {}

  ngOnInit() {
    this.as.isAuthenticated().then(bool => {
      this.show = bool
    })
    this.as.eSignedIn.subscribe(bool => {
      console.log(bool)
      this.show = bool
    })
  }

  onSaveRecipes() {
    this.rs.onSaveRecipes()
  }

  onGetRecipes() {
    this.rs.onGetRecipes()
  }
}
