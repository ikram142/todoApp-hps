import { Directive, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appNewStyle]'
})
export class NewStyleDirective implements OnInit{

 @HostBinding('style.backgroundColor') backgroundColor :string ='transparent';
  constructor(private elementRf:ElementRef) { }
  ngOnInit()
{
  this.elementRf.nativeElement.style.borderColor='pink';
}
@HostListener('mouseenter') onMouseEnter(){
  this.highlight('red');
  this.backgroundColor='red' ;
}
@HostListener('mouseleave') onMouseLeave(){
  this.highlight(null);
}
private highlight(color: string) {
  this.elementRf.nativeElement.style.backgroundColor = color;
  this.backgroundColor='yellow' ;
}

}
