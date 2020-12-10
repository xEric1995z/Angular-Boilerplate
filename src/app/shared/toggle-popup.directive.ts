import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
   selector: '[appTogglePopup]'
})

export class TogglePopupDirective {
   @HostBinding('class.is-active') isOpen = false;

   @HostListener('click') toggleOpen() {
      this.isOpen = !this.isOpen;      
   }

}