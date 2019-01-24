import { Directive, ElementRef, Renderer2, OnInit, HostBinding, Input, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[sumBuku]',
  exportAs : 'sumBuku'
})
export class SumBukuDirective implements OnInit {

  @Input('SumBukuDirective') qty : number = 0;
  constructor(private elRef: ElementRef, private render: Renderer2) { 
  }

  ngOnInit():number{
    return this.qty+=this.qty;
  }
}
