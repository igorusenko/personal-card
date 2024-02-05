import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appGlowingCursor]',
  standalone: true
})
export class GlowingDirective {

  cursorElement: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // Создаем элемент для свечения
    this.cursorElement = this.renderer.createElement('div');
    this.renderer.addClass(this.cursorElement, 'glowing-cursor');
    // this.renderer.appendChild(document.body, this.cursorElement);
  }

  @HostListener('mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    const x = event.clientX;
    const y = event.clientY;

    // Обновляем позицию элемента свечения
    this.renderer.setStyle(this.cursorElement, 'left', x + 'px');
    this.renderer.setStyle(this.cursorElement, 'top', y + 'px');
  }
}
