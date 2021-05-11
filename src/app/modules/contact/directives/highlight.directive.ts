import { Directive, ElementRef, HostListener, Input } from '@angular/core';
 
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  //elemento host della direttiva (il tag che ospita la direttiva)
  constructor(private el: ElementRef) { }

  @Input() defaultColor: string;

  @Input('appHighlight') highlightColor: string;

  //HostListener è l'evento su cui dover chiamare la funzione
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'green');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}