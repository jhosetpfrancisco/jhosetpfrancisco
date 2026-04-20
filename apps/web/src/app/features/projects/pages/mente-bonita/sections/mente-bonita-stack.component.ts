import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-mente-bonita-stack',
  standalone: true,
  imports: [TranslocoModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section">
      <div class="section__bg-diagonal"></div>
      <div class="container">
        <span class="section-number">{{ 'projects.mentebonita.stack.number' | transloco }}</span>
        <h2 class="section-title">{{ 'projects.mentebonita.stack.title' | transloco }}</h2>

        <div class="stack-grid">
          <div class="stack-card">
            <h3 class="stack-card__title">
              {{ 'projects.mentebonita.stack.frontend_title' | transloco }}
            </h3>
            <div class="stack-card__techs">
              @for (tech of frontendTechs; track tech.id) {
                <div class="stack-card__tech">
                  <span class="stack-card__tech-name">{{ tech.name }}</span>
                  <span class="stack-card__tech-desc">
                    {{ 'projects.mentebonita.stack.frontend.' + tech.id | transloco }}
                  </span>
                </div>
              }
            </div>
          </div>
          <div class="stack-card">
            <h3 class="stack-card__title">
              {{ 'projects.mentebonita.stack.backend_title' | transloco }}
            </h3>
            <div class="stack-card__techs">
              @for (tech of backendTechs; track tech.id) {
                <div class="stack-card__tech">
                  <span class="stack-card__tech-name">{{ tech.name }}</span>
                  <span class="stack-card__tech-desc">
                    {{ 'projects.mentebonita.stack.backend.' + tech.id | transloco }}
                  </span>
                </div>
              }
            </div>
          </div>
        </div>

        <div class="stack-card stack-card--full">
          <h3 class="stack-card__title">
            {{ 'projects.mentebonita.stack.infra_title' | transloco }}
          </h3>
          <div class="stack-card__techs stack-card__techs--infra">
            @for (tech of infraTechs; track tech.id) {
              <div class="stack-card__tech">
                <span class="stack-card__tech-name">{{ tech.name }}</span>
                <span class="stack-card__tech-desc">
                  {{ 'projects.mentebonita.stack.infra.' + tech.id | transloco }}
                </span>
              </div>
            }
          </div>
        </div>

        <div class="arch-box">
          <h3 class="arch-box__title">
            {{ 'projects.mentebonita.stack.arch_title' | transloco }}
          </h3>
          <p class="arch-box__desc">
            {{ 'projects.mentebonita.stack.arch_desc' | transloco }}
          </p>
          <div class="arch-box__tags">
            @for (tag of archTags; track tag) {
              <span class="arch-box__tag">{{ tag }}</span>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    :host {
      display: block;
    }

    .container {
      max-width: var(--container-max-6xl);
      margin: 0 auto;
      padding-left: var(--container-padding);
      padding-right: var(--container-padding);
      position: relative;
      z-index: 1;
    }

    .section {
      position: relative;
      padding: var(--space-24) 0;
      overflow: hidden;
    }

    .section__bg-diagonal {
      position: absolute;
      inset: 0;
      opacity: 0.06;
      background: repeating-linear-gradient(
        45deg,
        transparent,
        transparent 10px,
        rgba(0, 0, 0, 1) 10px,
        rgba(0, 0, 0, 1) 11px
      );
      pointer-events: none;
    }

    .section-number {
      display: block;
      font-size: var(--text-sm);
      font-weight: var(--font-weight-medium);
      letter-spacing: var(--tracking-widest);
      text-transform: uppercase;
      opacity: 0.5;
      margin-bottom: var(--space-4);
    }

    .section-title {
      font-size: var(--text-4xl);
      font-weight: var(--font-weight-light);
      letter-spacing: var(--tracking-tight);
      line-height: var(--leading-tight);
      margin: 0 0 var(--space-12) 0;
    }

    .stack-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-6);
      margin-bottom: var(--space-6);
    }

    .stack-card {
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-xl);
      padding: var(--space-8);
    }

    .stack-card--full {
      margin-bottom: var(--space-6);
    }

    .stack-card__title {
      font-size: var(--text-lg);
      font-weight: var(--font-weight-semibold);
      margin: 0 0 var(--space-6) 0;
    }

    .stack-card__techs {
      display: flex;
      flex-direction: column;
      gap: var(--space-5);
    }

    .stack-card__techs--infra {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-5);
    }

    .stack-card__tech {
      display: flex;
      flex-direction: column;
      gap: var(--space-1);
    }

    .stack-card__tech-name {
      font-size: var(--text-base);
      font-weight: var(--font-weight-semibold);
    }

    .stack-card__tech-desc {
      font-size: var(--text-sm);
      line-height: var(--leading-relaxed);
      color: var(--color-subtle);
    }

    .arch-box {
      background: var(--color-inverse);
      color: var(--color-inverse-fg);
      border-radius: var(--radius-xl);
      padding: var(--space-8);
    }

    .arch-box__title {
      font-size: var(--text-xl);
      font-weight: var(--font-weight-semibold);
      margin: 0 0 var(--space-3) 0;
    }

    .arch-box__desc {
      font-size: var(--text-base);
      line-height: var(--leading-relaxed);
      color: rgba(255, 255, 255, 0.7);
      margin: 0 0 var(--space-6) 0;
    }

    .arch-box__tags {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-2);
    }

    .arch-box__tag {
      display: inline-block;
      font-size: var(--text-xs);
      font-weight: var(--font-weight-medium);
      padding: var(--space-1) var(--space-3);
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: var(--radius-full);
      color: rgba(255, 255, 255, 0.8);
    }

    @media (min-width: 768px) {
      .section-title {
        font-size: var(--text-5xl);
      }

      .stack-grid {
        grid-template-columns: 1fr 1fr;
      }

      .stack-card__techs--infra {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  `,
})
export class MenteBonitaStackComponent {
  readonly frontendTechs = [
    { id: 'angular', name: 'Angular' },
    { id: 'rxjs', name: 'RxJS' },
  ];
  readonly backendTechs = [
    { id: 'nestjs', name: 'NestJS' },
    { id: 'postgres', name: 'PostgreSQL' },
  ];
  readonly infraTechs = [
    { id: 'chime', name: 'AWS Chime SDK' },
    { id: 'sqs', name: 'SQS' },
    { id: 'ses', name: 'SES' },
    { id: 'ec2', name: 'EC2 / ECS' },
    { id: 'rds', name: 'RDS PostgreSQL' },
    { id: 'cloudwatch', name: 'CloudWatch' },
  ];
  readonly archTags = [
    'Schema Isolation',
    'Tenant Context Middleware',
    'Row-Level Security',
    'Shared Infrastructure',
  ];
}
