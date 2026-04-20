<template>
  <section class="ds-section">
    <div class="ds-section-head">
      <small>Resumo</small>
      <h2>Summary cards</h2>
      <p>Valor em display, trend badge e sparkline opcional.</p>
    </div>

    <div class="cards-grid">
      <div class="summary-card">
        <div class="card-head">
          <span class="card-label">Saldo atual</span>
          <span class="card-icon" style="color:var(--ds-primary);background:color-mix(in srgb,var(--ds-primary) 10%,transparent)"><i class="pi pi-wallet"></i></span>
        </div>
        <div class="card-value">R$ 12.450<span class="unit">,80</span></div>
        <div class="card-foot">
          <span class="trend up">▲ 8,4%</span>
          <span>vs. mês anterior</span>
        </div>
      </div>

      <div class="summary-card">
        <div class="card-head">
          <span class="card-label">Cargas · 30 dias</span>
          <span class="card-icon" :style="`color:${accent};background:color-mix(in srgb,${accent} 10%,transparent)`"><i class="pi pi-truck"></i></span>
        </div>
        <div class="card-value">128</div>
        <div class="card-foot">
          <span class="trend up">▲ 12</span>
          <span>novas no período</span>
        </div>
      </div>

      <div class="summary-card">
        <div class="card-head">
          <span class="card-label">Coletas · 30 dias</span>
          <span class="card-icon" style="color:var(--ds-tertiary,#79b83e);background:color-mix(in srgb,var(--ds-tertiary,#79b83e) 10%,transparent)"><i class="pi pi-calendar-plus"></i></span>
        </div>
        <div class="card-value">42</div>
        <div class="card-foot">
          <span class="trend flat">— 0%</span>
          <span>estável</span>
        </div>
      </div>

      <div class="summary-card">
        <div class="card-head">
          <span class="card-label">SLA no prazo</span>
          <span class="card-icon" style="color:var(--ds-alternate,#f3943d);background:color-mix(in srgb,var(--ds-alternate,#f3943d) 14%,transparent)"><i class="pi pi-chart-line"></i></span>
        </div>
        <div class="card-value">94<span class="unit">%</span></div>
        <div class="card-foot">
          <span class="trend up">▲ 2,1 pp</span>
          <span>hoje</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ accent: string }>()
</script>

<style scoped>
.ds-section { display: grid; gap: 1.25rem; }
.ds-section-head small { color: var(--ds-primary, #0094d9); font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.ds-section-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 400; letter-spacing: -0.015em; }
.ds-section-head p  { margin: 0; color: var(--ds-muted); font-size: 0.88rem; }

.cards-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
.summary-card {
  display: grid; gap: 0.8rem;
  padding: 1.2rem 1.25rem 1.1rem;
  background: var(--ds-bg); border: 1px solid var(--ds-line); border-radius: 12px;
  box-shadow: 0 1px 2px rgba(15,23,42,0.05);
  transition: all 0.15s;
}
.summary-card:hover { border-color: var(--ds-faint); box-shadow: 0 1px 3px rgba(15,23,42,0.06), 0 8px 24px -8px rgba(15,23,42,0.08); }

.card-head { display: flex; align-items: center; justify-content: space-between; }
.card-label { font-size: 0.8rem; color: var(--ds-muted); font-weight: 500; }
.card-icon { width: 34px; height: 34px; border-radius: 10px; display: grid; place-items: center; font-size: 0.95rem; }

.card-value {
  display: flex; align-items: baseline; gap: 0.5rem;
  font-size: 2rem; font-weight: 400;
  letter-spacing: -0.02em; line-height: 1; color: var(--ds-text);
}
.unit { font-size: 0.85rem; font-weight: 500; color: var(--ds-muted); letter-spacing: 0; }

.card-foot { display: flex; align-items: center; gap: 0.35rem; font-size: 0.76rem; color: var(--ds-muted); }
.trend { display: inline-flex; align-items: center; gap: 0.25rem; font-weight: 600; padding: 0.1rem 0.45rem; border-radius: 999px; font-size: 0.72rem; }
.trend.up   { background: color-mix(in srgb, var(--ds-success, #3dac00) 12%, transparent); color: #2e8200; }
.trend.down { background: color-mix(in srgb, var(--ds-error, #ff1414) 10%, transparent); color: var(--ds-error, #ff1414); }
.trend.flat { background: var(--ds-surface-2, #f1f4f9); color: var(--ds-muted); }

@media (max-width: 900px) { .cards-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 480px) { .cards-grid { grid-template-columns: 1fr; } }
</style>
