import { 
   Directive, ElementRef, Renderer2, 
   OnInit, HostListener, HostBinding
} from "@angular/core";

@Directive({
   selector: '[appBetterHighlight]'
})

export class BetterHighlightDirective implements OnInit {
   @HostBinding('style.fontWeight') fontWeight = 'normal'
   
   constructor(
      private elementRef: ElementRef,
      private render: Renderer2
      ) {
      }
      
   ngOnInit() {
      // this.render.setStyle(this.elementRef.nativeElement, 'color', 'blue');
   }
   
   @HostListener('mouseenter') mouseover(eventData: Event) {
      this.render.setStyle(this.elementRef.nativeElement, 'color', 'blue', undefined);
      this.fontWeight = 'bold';
   }

   @HostListener('mouseleave') mouseleave(eventData: Event) {
      this.render.setStyle(this.elementRef.nativeElement, 'color', 'gray', undefined);
      this.fontWeight = 'normal';
   }

}