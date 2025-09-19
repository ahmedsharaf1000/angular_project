import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverEffect]' // ده الاسم اللي هنستعمله في الكارت
})
export class HoverEffectDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setDefaultStyles();
  }

  // ستايل افتراضي للكارت
  private setDefaultStyles() {
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 0.3s ease');
    this.renderer.setStyle(this.el.nativeElement, 'borderRadius', '15px');
    this.renderer.setStyle(this.el.nativeElement, 'boxShadow', '0 4px 15px rgba(0,0,0,0.08)');
    this.renderer.setStyle(this.el.nativeElement, 'overflow', 'hidden');
  }

  // عند الـ hover
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(-10px) scale(1.02)');
    this.renderer.setStyle(this.el.nativeElement, 'boxShadow', '0 12px 30px rgba(0,0,0,0.2)');
  }

  // لما يسيب العنصر
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(0) scale(1)');
    this.renderer.setStyle(this.el.nativeElement, 'boxShadow', '0 4px 15px rgba(0,0,0,0.08)');
  }
}
