import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const SIZE_MAP: Record<IconSize, number> = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 28,
  xl: 32,
};

@Component({
  selector: 'ui-icon',
  standalone: true,
  imports: [LucideAngularModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span
      [class]="iconClasses()"
      [attr.aria-label]="ariaLabel()"
      [attr.aria-hidden]="!ariaLabel() ? 'true' : null"
      role="img">
      <lucide-icon
        [name]="name()"
        [size]="iconSize()"
        [color]="color() || 'currentColor'"
        [strokeWidth]="strokeWidth()"
        [absoluteStrokeWidth]="true">
      </lucide-icon>
    </span>
  `,
  styles: `
    :host {
      display: inline-flex;
    }

    .ui-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      vertical-align: middle;
      user-select: none;
      line-height: 1;
      color: inherit;
    }

    .ui-icon--xs { width: 16px; height: 16px; }
    .ui-icon--sm { width: 20px; height: 20px; }
    .ui-icon--md { width: 24px; height: 24px; }
    .ui-icon--lg { width: 28px; height: 28px; }
    .ui-icon--xl { width: 32px; height: 32px; }

    .ui-icon--filled ::ng-deep svg {
      fill: currentColor;
    }

    .ui-icon ::ng-deep lucide-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .ui-icon ::ng-deep svg {
      width: 100%;
      height: 100%;
      stroke: currentColor;
      stroke-linecap: round;
      stroke-linejoin: round;
      fill: none;
    }
  `,
})
export class IconComponent {
  readonly name = input.required<string>();
  readonly size = input<IconSize>('md');
  readonly customSize = input<number | undefined>(undefined);
  readonly color = input<string | undefined>(undefined);
  readonly strokeWidth = input(2);
  readonly fill = input(false);
  readonly ariaLabel = input<string | undefined>(undefined);

  readonly iconSize = computed(() => this.customSize() ?? SIZE_MAP[this.size()]);

  readonly iconClasses = computed(() => {
    const classes = ['ui-icon', `ui-icon--${this.size()}`];
    if (this.fill()) classes.push('ui-icon--filled');
    return classes.join(' ');
  });
}
