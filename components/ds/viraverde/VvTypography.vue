<template>
  <section class="vv-section">
    <div class="vv-head">
      <small>Fundações</small>
      <h2>Tipografia</h2>
      <p>Inter como fonte principal, JetBrains Mono para código e dados técnicos.</p>
    </div>

    <div class="group-label">Escala de Títulos</div>
    <div class="type-stack">
      <div class="type-row"><span class="t-4xl">Display — 36px / 700</span><code>text-4xl font-bold</code></div>
      <div class="type-row"><span class="t-3xl">Heading 1 — 30px / 700</span><code>text-3xl font-bold</code></div>
      <div class="type-row"><span class="t-2xl">Heading 2 — 24px / 600</span><code>text-2xl font-semibold</code></div>
      <div class="type-row"><span class="t-xl">Heading 3 — 20px / 600</span><code>text-xl font-semibold</code></div>
      <div class="type-row"><span class="t-lg">Heading 4 — 18px / 600</span><code>text-lg font-semibold</code></div>
    </div>

    <div class="group-label">Corpo</div>
    <div class="type-stack">
      <div class="type-row"><span class="t-base">Base — 16px / 400</span><code>text-base</code></div>
      <div class="type-row"><span class="t-sm">Small — 14px / 400</span><code>text-sm</code></div>
      <div class="type-row"><span class="t-xs">Caption — 12px / 400</span><code>text-xs</code></div>
    </div>

    <div class="group-label">Pesos</div>
    <div class="weight-row">
      <div class="weight-item" style="font-weight: 400">Regular 400<br><span>Inter Regular</span></div>
      <div class="weight-item" style="font-weight: 500">Medium 500<br><span>Inter Medium</span></div>
      <div class="weight-item" style="font-weight: 600">Semibold 600<br><span>Inter Semibold</span></div>
      <div class="weight-item" style="font-weight: 700">Bold 700<br><span>Inter Bold</span></div>
    </div>

    <div class="group-label">Mono</div>
    <div class="mono-box">
      <code>CNPJ: 12.345.678/0001-99 — Valor: R$ 1.234,56 — Status: ATIVO</code>
    </div>
  </section>
</template>

<style scoped>
.vv-section { display: grid; gap: 1.5rem; font-family: var(--vv-font-sans, 'Inter', sans-serif); }
.vv-head small { color: var(--vv-color-primary, #16a34a); font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.vv-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 700; color: var(--vv-color-text, #111827); }
.vv-head p  { margin: 0; color: var(--vv-color-text-muted, #6b7280); font-size: 0.88rem; }
.group-label { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--vv-color-text-muted, #6b7280); }
.type-stack { display: grid; gap: 0.75rem; }
.type-row { display: flex; align-items: baseline; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid var(--vv-color-line, #e5e7eb); }
.type-row code { font-size: 0.72rem; color: var(--vv-color-text-muted, #6b7280); font-family: var(--vv-font-mono, monospace); }
.t-4xl { font-size: 2.25rem; font-weight: 700; color: var(--vv-color-text, #111827); }
.t-3xl { font-size: 1.875rem; font-weight: 700; color: var(--vv-color-text, #111827); }
.t-2xl { font-size: 1.5rem; font-weight: 600; color: var(--vv-color-text, #111827); }
.t-xl  { font-size: 1.25rem; font-weight: 600; color: var(--vv-color-text, #111827); }
.t-lg  { font-size: 1.125rem; font-weight: 600; color: var(--vv-color-text, #111827); }
.t-base { font-size: 1rem; color: var(--vv-color-text, #111827); }
.t-sm   { font-size: 0.875rem; color: var(--vv-color-text, #111827); }
.t-xs   { font-size: 0.75rem; color: var(--vv-color-text-muted, #6b7280); }
.weight-row { display: flex; gap: 1.5rem; flex-wrap: wrap; }
.weight-item { font-size: 1.25rem; color: var(--vv-color-text, #111827); }
.weight-item span { font-size: 0.75rem; font-weight: 400; color: var(--vv-color-text-muted, #6b7280); }
.mono-box { background: var(--vv-color-surface-2, #f3f4f6); border: 1px solid var(--vv-color-line, #e5e7eb); border-radius: var(--vv-radius-md, 8px); padding: 1rem; }
.mono-box code { font-family: var(--vv-font-mono, monospace); font-size: 0.82rem; color: var(--vv-color-text, #111827); }
</style>
