<template>
  <section class="ds-section">
    <div class="ds-head">
      <small>Componentes</small>
      <h2>Botões</h2>
      <p><code>AppButton</code> e <code>AppIconButton</code>. Variantes e estados.</p>
    </div>

    <div class="group-label">AppButton — variantes</div>
    <div class="demo-row">
      <button class="app-btn app-btn--primary">Primary</button>
      <button class="app-btn app-btn--secondary">Secondary</button>
      <button class="app-btn app-btn--ghost">Ghost</button>
      <button class="app-btn app-btn--tonal">Tonal</button>
    </div>

    <div class="group-label">Com ícone</div>
    <div class="demo-row">
      <button class="app-btn app-btn--primary">
        <svg class="btn-icon" viewBox="0 0 20 20"><circle cx="9" cy="9" r="6" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M14 14l3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        Buscar
      </button>
      <button class="app-btn app-btn--ghost">
        <svg class="btn-icon" viewBox="0 0 20 20"><path d="M10 4v12M4 10h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        Adicionar
      </button>
    </div>

    <div class="group-label">Estado desabilitado</div>
    <div class="demo-row">
      <button class="app-btn app-btn--primary" disabled>Primary</button>
      <button class="app-btn app-btn--secondary" disabled>Secondary</button>
      <button class="app-btn app-btn--ghost" disabled>Ghost</button>
      <button class="app-btn app-btn--tonal" disabled>Tonal</button>
    </div>

    <div class="group-label">AppIconButton — variantes</div>
    <div class="demo-row">
      <button class="icon-btn icon-btn--soft" title="soft">
        <svg viewBox="0 0 20 20"><circle cx="9" cy="9" r="6" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M14 14l3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      </button>
      <button class="icon-btn icon-btn--filled" title="filled">
        <svg viewBox="0 0 20 20"><path d="M10 4v12M4 10h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      </button>
      <button class="icon-btn icon-btn--soft" title="filter">
        <svg viewBox="0 0 20 20"><path d="M3 5h14M6 10h8M9 15h2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      </button>
    </div>

    <div class="token-table">
      <div class="group-label" style="margin-bottom:0.5rem">Tokens de botão</div>
      <div class="token-row" v-for="row in tokenRows" :key="row.token">
        <span class="swatch-dot" :style="`background:${row.color}`"></span>
        <code>{{ row.token }}</code>
        <span class="token-val">{{ row.value }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const tokenRows = [
  { token: '--ff-color-tertiary',  color: '#79b83e', value: '#79b83e — fundo primary btn' },
  { token: '--ff-color-primary',   color: '#0094d9', value: '#0094d9 — fundo secondary btn' },
  { token: '--ff-color-secondary', color: '#0066b2', value: '#0066b2 — hover secondary' },
  { token: '--ff-radius-full',     color: 'transparent', value: '9999px — border-radius padrão' },
]
</script>

<style scoped>
.ds-section { display: grid; gap: 1.5rem; }
.ds-head small { color: #79b83e; font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.ds-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 600; }
.ds-head p  { margin: 0; color: var(--ff-color-secondary-text, #979ca3); font-size: 0.88rem; }
.group-label { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--ff-color-secondary-text); }
.demo-row { display: flex; flex-wrap: wrap; gap: 0.75rem; align-items: center; }

/* AppButton */
.app-btn {
  display: inline-flex; align-items: center; gap: 0.4rem;
  padding: 0.5rem 1.25rem; border-radius: 9999px; font-size: 0.875rem;
  font-weight: 600; font-family: "Source Sans 3","Segoe UI",sans-serif;
  border: none; cursor: pointer; transition: background 0.15s, opacity 0.15s;
}
.app-btn--primary   { background: var(--ff-color-tertiary, #79b83e); color: #fff; }
.app-btn--primary:hover { background: #6aa834; }
.app-btn--secondary { background: var(--ff-color-primary, #0094d9); color: #fff; }
.app-btn--secondary:hover { background: var(--ff-color-secondary, #0066b2); }
.app-btn--ghost     { background: transparent; color: var(--ff-color-primary-text, #3c3c3c); border: 1.5px solid var(--ff-color-accent-3, #e0e0e0); }
.app-btn--ghost:hover { background: var(--ff-color-secondary-bg, #f8f8f8); }
.app-btn--tonal     { background: var(--ff-color-sub-tertiary, #e7ffcf); color: var(--ff-color-tertiary, #79b83e); }
.app-btn--tonal:hover { background: #d5f7ba; }
.app-btn:disabled   { opacity: 0.45; cursor: not-allowed; }
.btn-icon { width: 16px; height: 16px; flex-shrink: 0; }

/* AppIconButton */
.icon-btn {
  display: inline-flex; align-items: center; justify-content: center;
  width: 36px; height: 36px; border-radius: 9999px; border: none; cursor: pointer;
  transition: background 0.15s;
}
.icon-btn svg { width: 18px; height: 18px; }
.icon-btn--soft   { background: transparent; color: var(--ff-color-secondary-text, #979ca3); }
.icon-btn--soft:hover { background: var(--ff-color-secondary-bg, #f8f8f8); }
.icon-btn--filled { background: var(--ff-color-sub-tertiary, #e7ffcf); color: var(--ff-color-tertiary, #79b83e); }
.icon-btn--filled:hover { background: #d5f7ba; }

/* token table */
.token-table { display: grid; gap: 0.35rem; }
.token-row { display: flex; align-items: center; gap: 0.6rem; font-size: 0.8rem; padding: 0.4rem 0.75rem; background: var(--ff-color-primary-bg,#fff); border: 1px solid var(--ff-color-accent-3,#e0e0e0); border-radius: 8px; }
.swatch-dot { width: 14px; height: 14px; border-radius: 50%; flex-shrink: 0; border: 1px solid rgba(0,0,0,0.1); }
.token-row code { color: var(--ff-color-secondary-text); flex-shrink: 0; }
.token-val { color: var(--ff-color-primary-text); font-size: 0.75rem; }
</style>
