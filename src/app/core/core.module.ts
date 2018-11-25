import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './header/header.component'
import { HomeComponent } from './home/home.component'
import { NgZorroAntdModule } from 'ng-zorro-antd'
import { AppRoutingModule } from '../app-routing.module'

@NgModule({
  declarations: [HeaderComponent, HomeComponent],
  imports: [CommonModule, NgZorroAntdModule, AppRoutingModule],
  // * export AppRoutingModule so that we do not import this in multiple places
  exports: [HeaderComponent, AppRoutingModule]
})
export class CoreModule {}
