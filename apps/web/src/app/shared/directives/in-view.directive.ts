import {
  Directive,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  inject,
  PLATFORM_ID,
  input,
  ChangeDetectorRef,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Adds the `in-view` CSS class when the host element enters the viewport.
 *
 * Usage:
 *   <div appInView>                          → fade-up on scroll
 *   <div appInView [stagger]="index">        → fade-up with stagger delay
 *   <div appInView [threshold]="0.2">        → trigger at 20% visibility
 *   <div appInView [once]="false">           → re-trigger on every entry
 */
@Directive({
  selector: '[appInView]',
  standalone: true,
  host: {
    '[class.in-view]': 'isVisible',
    '[style.--stagger-delay]': 'staggerDelay()',
  },
})
export class InViewDirective implements AfterViewInit, OnDestroy {
  readonly threshold = input(0.15);
  readonly stagger = input(-1);
  readonly once = input(true);

  isVisible = false;

  private observer: IntersectionObserver | null = null;
  private readonly el = inject(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly cdr = inject(ChangeDetectorRef);

  staggerDelay(): string | null {
    const idx = this.stagger();
    return idx >= 0 ? `${idx * 0.1}s` : null;
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.isVisible = true;
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isVisible = true;
            this.cdr.markForCheck();
            if (this.once()) {
              this.observer?.unobserve(this.el.nativeElement);
            }
          } else if (!this.once()) {
            this.isVisible = false;
            this.cdr.markForCheck();
          }
        });
      },
      { threshold: this.threshold() }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
