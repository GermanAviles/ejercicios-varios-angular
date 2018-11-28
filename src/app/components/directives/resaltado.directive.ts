import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input("appResaltado") nuevoColor:string;

  constructor( private Er: ElementRef ) {
    console.log("Directiva llamada!");
    //Er.nativeElement.style.backgroundColor = 'yellow';
   }

  @HostListener('mouseenter') mouseEntro(){
    this.Resaltar( this.nuevoColor || 'yellow' );
    //this.Er.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') mouseSalio(){
    this.Resaltar( null );
  }

  private Resaltar( color:string ){
    this.Er.nativeElement.style.backgroundColor = color;
  }

}
