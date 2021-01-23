import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRemoveFocus]'
})
export class RemoveFocusDirective {

  constructor(
    private elRef: ElementRef
  ) { }

  @HostListener("click") onClick() {
    this.elRef.nativeElement.blur();
  }
}
