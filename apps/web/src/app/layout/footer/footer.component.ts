import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ContainerComponent } from '@jhosetpfrancisco/ui';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ContainerComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="footer">
      <ui-container maxWidth="6xl">
        <div class="footer__row">
          <p>&copy; {{ year }} Jhosetp Francisco</p>
          <p>jhosetpfrancisco.com</p>
        </div>
      </ui-container>
    </footer>
  `,
  styles: `
    .footer {
      padding: var(--space-12) 0;
      background: var(--color-inverse);
      border-top: 1px solid var(--color-neutral-900);
      position: relative;
      z-index: 10;
    }

    .footer__row {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-6);
      color: var(--color-neutral-600);
      font-size: var(--text-sm);
    }

    @media (min-width: 768px) {
      .footer__row {
        flex-direction: row;
      }
    }
  `,
})
export class FooterComponent {
  readonly year = new Date().getFullYear();
}
