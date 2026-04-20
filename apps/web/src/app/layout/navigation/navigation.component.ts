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
import { TranslocoModule } from '@jsverse/transloco';
import { IconComponent } from '@jhosetpfrancisco/ui';
import { LangToggleComponent } from '../../shared/components/lang-toggle/lang-toggle.component';

interface NavItem {
  labelKey: string;
  href: string;
}

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [IconComponent, TranslocoModule, LangToggleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav [class]="isScrolled() ? 'nav nav--scrolled' : 'nav'" [attr.aria-label]="'nav.main_aria' | transloco">
      <div class="nav__container">
        <div class="nav__row">
          <!-- Logo -->
          <button class="nav__logo" (click)="scrollTo('#hero')">
            <img src="/assets/images/jhosetpfrancisco_ico_light.png" [alt]="'nav.logo_alt' | transloco" width="21" height="21" />
          </button>

          <!-- Desktop links -->
          <div class="nav__links">
            @for (item of navItems; track item.href) {
              <button class="nav__link" (click)="scrollTo(item.href)">
                {{ item.labelKey | transloco }}
                <span class="nav__link-underline"></span>
              </button>
            }
          </div>

          <!-- Right cluster: lang toggle + mobile button -->
          <div class="nav__right">
            <app-lang-toggle class="nav__lang nav__lang--desktop" />
            <button class="nav__toggle" (click)="toggleMenu()" [attr.aria-expanded]="isOpen()" [attr.aria-label]="'nav.menu_aria' | transloco">
              @if (isOpen()) {
                <ui-icon name="x" size="sm" />
              } @else {
                <ui-icon name="menu" size="sm" />
              }
            </button>
          </div>
        </div>

        <!-- Mobile menu -->
        @if (isOpen()) {
          <div class="nav__mobile">
            @for (item of navItems; track item.href) {
              <button class="nav__mobile-link" (click)="scrollTo(item.href)">
                {{ item.labelKey | transloco }}
              </button>
            }
            <div class="nav__mobile-lang">
              <app-lang-toggle />
            </div>
          </div>
        }
      </div>
    </nav>
  `,
  styles: `
    .nav {
      position: fixed;
      top: 0;
      width: 100%;
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border-bottom: 1px solid transparent;
      z-index: var(--z-fixed);
      background: rgba(0, 0, 0, 0.8);
      transition: all var(--duration-normal) var(--ease-default);
    }

    .nav--scrolled {
      background: rgba(0, 0, 0, 0.95);
      border-bottom-color: var(--color-neutral-900);
    }

    .nav__container {
      max-width: var(--container-max-6xl);
      margin: 0 auto;
      padding: var(--space-5) var(--space-6);
    }

    .nav__row {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    /* Logo */
    .nav__logo {
      font-size: var(--text-sm);
      font-weight: var(--font-weight-medium);
      letter-spacing: var(--tracking-widest);
      text-transform: uppercase;
      color: white;
      background: none;
      border: none;
      cursor: pointer;
      transition: transform var(--duration-fast) var(--ease-default);
    }

    .nav__logo:hover {
      transform: scale(1.05);
    }

    .nav__logo img {
      height: 21px;
      width: 21px;
    }

    /* Desktop links */
    .nav__links {
      display: none;
      align-items: center;
      gap: var(--space-10);
    }

    @media (min-width: 768px) {
      .nav__links {
        display: flex;
      }
    }

    .nav__link {
      position: relative;
      font-size: var(--text-sm);
      color: var(--color-neutral-400);
      background: none;
      border: none;
      cursor: pointer;
      letter-spacing: var(--tracking-wide);
      transition: color var(--duration-fast) var(--ease-default),
                  transform var(--duration-fast) var(--ease-default);
      padding: 0;
    }

    .nav__link:hover {
      color: white;
      transform: translateY(-2px);
    }

    .nav__link-underline {
      position: absolute;
      bottom: -4px;
      left: 0;
      right: 0;
      height: 1px;
      background: white;
      transform: scaleX(0);
      transition: transform var(--duration-fast) var(--ease-default);
    }

    .nav__link:hover .nav__link-underline {
      transform: scaleX(1);
    }

    /* Right cluster */
    .nav__right {
      display: flex;
      align-items: center;
      gap: var(--space-4);
    }

    .nav__lang--desktop {
      display: none;
    }

    @media (min-width: 768px) {
      .nav__lang--desktop {
        display: inline-flex;
      }
    }

    /* Mobile toggle */
    .nav__toggle {
      display: flex;
      color: white;
      background: none;
      border: none;
      cursor: pointer;
    }

    @media (min-width: 768px) {
      .nav__toggle {
        display: none;
      }
    }

    /* Mobile menu */
    .nav__mobile {
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
      margin-top: var(--space-6);
      padding-top: var(--space-6);
      padding-bottom: var(--space-4);
      border-top: 1px solid var(--color-neutral-900);
    }

    @media (min-width: 768px) {
      .nav__mobile {
        display: none;
      }
    }

    .nav__mobile-link {
      display: block;
      width: 100%;
      text-align: left;
      color: var(--color-neutral-400);
      background: none;
      border: none;
      cursor: pointer;
      padding: var(--space-2) 0;
      font-size: var(--text-base);
      transition: color var(--duration-fast) var(--ease-default);
    }

    .nav__mobile-link:hover {
      color: white;
    }

    .nav__mobile-lang {
      padding-top: var(--space-2);
      border-top: 1px solid var(--color-neutral-900);
    }
  `,
})
export class NavigationComponent implements OnInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private scrollHandler: (() => void) | null = null;

  readonly isScrolled = signal(false);
  readonly isOpen = signal(false);

  readonly navItems: NavItem[] = [
    { labelKey: 'nav.home', href: '#hero' },
    { labelKey: 'nav.about', href: '#about' },
    { labelKey: 'nav.stack', href: '#stack' },
    { labelKey: 'nav.projects', href: '#projects' },
    { labelKey: 'nav.experience', href: '#experience' },
    { labelKey: 'nav.contact', href: '#contact' },
  ];

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.scrollHandler = () => this.isScrolled.set(window.scrollY > 50);
      window.addEventListener('scroll', this.scrollHandler, { passive: true });
    }
  }

  ngOnDestroy(): void {
    if (this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler);
    }
  }

  toggleMenu(): void {
    this.isOpen.update((v) => !v);
  }

  scrollTo(href: string): void {
    this.isOpen.set(false);
    if (isPlatformBrowser(this.platformId)) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
