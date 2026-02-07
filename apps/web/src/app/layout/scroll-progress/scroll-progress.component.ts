import {
  Component,
  ChangeDetectionStrategy,
  signal,
  inject,
  PLATFORM_ID,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="progress" [style.transform]="'scaleX(' + progress() + ')'"></div>
  `,
  styles: `
    .progress {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: white;
      transform-origin: left;
      z-index: 9999;
      will-change: transform;
    }
  `,
})
export class ScrollProgressComponent implements OnInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private scrollHandler: (() => void) | null = null;

  readonly progress = signal(0);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.scrollHandler = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        this.progress.set(docHeight > 0 ? scrollTop / docHeight : 0);
      };
      window.addEventListener('scroll', this.scrollHandler, { passive: true });
    }
  }

  ngOnDestroy(): void {
    if (this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler);
    }
  }
}
