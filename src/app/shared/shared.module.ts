import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TestClassDirective } from './directives/test-class.directive'

@NgModule({
  declarations: [TestClassDirective],
  imports: [CommonModule],
  // * export components for other module to use
  exports: [TestClassDirective]
})
export class SharedModule {}
