import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core'

@Directive({
  selector: '[appTestClass]'
})
export class TestClassDirective {
  @Input() addClassName = ''
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter')
  mouseenter(eventData: Event) {
    this.renderer.addClass(this.elRef.nativeElement, this.addClassName)
  }

  @HostListener('mouseleave')
  mouseleave(eventData: Event) {
    this.renderer.removeClass(this.elRef.nativeElement, this.addClassName)
  }
}
