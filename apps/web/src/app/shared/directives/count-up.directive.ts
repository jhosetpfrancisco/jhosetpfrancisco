import {
  Directive,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  inject,
  PLATFORM_ID,
  input,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Animates a number from 0 to the target value when the element enters the viewport.
 *
 * Usage:
 *   <span [appCountUp]="100" suffix="K+">0</span>
 *   <span [appCountUp]="6" suffix="+">0</span>
 */
@Directive({
  selector: '[appCountUp]',
  standalone: true,
})
export class CountUpDirective implements AfterViewInit, OnDestroy {
  readonly appCountUp = input.required<number>();
  readonly suffix = input('');
  readonly duration = input(2000);

  private observer: IntersectionObserver | null = null;
  private animationId: number | null = null;
  private hasAnimated = false;
  private readonly el = inject(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.el.nativeElement.textContent =
        this.appCountUp() + this.suffix();
      return;
    }

    this.el.nativeElement.textContent = '0' + this.suffix();

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.hasAnimated = true;
            this.animate();
            this.observer?.unobserve(this.el.nativeElement);
          }
        });
      },
      { threshold: 0.3 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  private animate(): void {
    const target = this.appCountUp();
    const dur = this.duration();
    const suffix = this.suffix();
    const start = performance.now();

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / dur, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      this.el.nativeElement.textContent = current + suffix;

      if (progress < 1) {
        this.animationId = requestAnimationFrame(step);
      }
    };

    this.animationId = requestAnimationFrame(step);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
    }
  }
}
