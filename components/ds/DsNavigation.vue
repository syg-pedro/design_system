<template>
  <section class="ds-section">
    <div class="ds-section-head">
      <small>Navegação</small>
      <h2>Sidebar & Header</h2>
      <p>Menu lateral colapsável com variante light (padrão) e brand (gradiente). Header com busca, notificações e usuário.</p>
    </div>

    <div class="nav-demo">
      <!-- Mini sidebar preview -->
      <div class="sidebar-preview" :style="`--preview-primary: ${ds.accent}`">
        <div class="sp-brand">
          <div class="sp-logo" :style="`background: ${ds.accent}`">{{ ds.logoInitial }}</div>
          <div class="sp-brand-text">
            <strong>{{ ds.name }}</strong>
            <small>Portal</small>
          </div>
        </div>
        <nav class="sp-nav">
          <div class="sp-section-label">Operação</div>
          <a class="sp-link active"><i class="pi pi-home"></i><span>Início</span></a>
          <a class="sp-link"><i class="pi pi-truck"></i><span>Cargas</span></a>
          <a class="sp-link"><i class="pi pi-calendar-plus"></i><span>Coletas</span></a>
          <a class="sp-link"><i class="pi pi-receipt"></i><span>Notas fiscais</span></a>
        </nav>
        <nav class="sp-nav" style="margin-top:0.5rem">
          <div class="sp-section-label">Financeiro</div>
          <a class="sp-link"><i class="pi pi-wallet"></i><span>Extrato</span></a>
          <a class="sp-link"><i class="pi pi-tags"></i><span>Preços</span></a>
        </nav>
        <div class="sp-footer">
          <a class="sp-link"><i class="pi pi-question-circle"></i><span>Ajuda</span></a>
          <a class="sp-link"><i class="pi pi-sign-out"></i><span>Sair</span></a>
          <div class="sp-version">
            <span class="sp-dot"></span>
            <span>Sygecom · v3.9.12</span>
          </div>
        </div>
      </div>

      <!-- Header preview -->
      <div class="header-demo">
        <div class="header-preview" :style="`--preview-primary: ${ds.accent}`">
          <button class="hd-icon-btn"><i class="pi pi-bars"></i></button>
          <div class="hd-search">
            <i class="pi pi-search"></i>
            <input type="search" placeholder="Buscar boleto, nota, coleta…" />
            <kbd>⌘K</kbd>
          </div>
          <div class="hd-actions">
            <button class="hd-icon-btn"><i class="pi pi-bell"></i></button>
            <button class="hd-icon-btn"><i class="pi pi-moon"></i></button>
            <button class="hd-user">
              <span class="hd-avatar" :style="`background: linear-gradient(135deg, ${ds.accent}, ${ds.colors.secondary})`">ST</span>
              <span class="hd-user-info">
                <span class="hd-user-name">Sygecom Tecnologia</span>
                <span class="hd-user-doc">12.345.678/0001-90</span>
              </span>
            </button>
          </div>
        </div>

        <div class="variant-note">
          <strong>Variante brand</strong>
          <div class="sidebar-preview brand-variant" :style="`--preview-primary: ${ds.accent}`">
            <div class="sp-brand">
              <div class="sp-logo brand-logo">{{ ds.logoInitial }}</div>
              <div class="sp-brand-text"><strong>{{ ds.name }}</strong><small>Portal</small></div>
            </div>
            <nav class="sp-nav">
              <a class="sp-link active brand-link"><i class="pi pi-home"></i><span>Início</span></a>
              <a class="sp-link brand-link"><i class="pi pi-truck"></i><span>Cargas</span></a>
              <a class="sp-link brand-link"><i class="pi pi-calendar-plus"></i><span>Coletas</span></a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { DesignSystemConfig } from '~/design-systems/types'
defineProps<{ ds: DesignSystemConfig; collapsed: boolean }>()
</script>

<style scoped>
.ds-section { display: grid; gap: 1.25rem; }
.ds-section-head small { color: var(--ds-primary, #0094d9); font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.ds-section-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 400; letter-spacing: -0.015em; }
.ds-section-head p  { margin: 0; color: var(--ds-muted); font-size: 0.88rem; }

.nav-demo { display: grid; grid-template-columns: 220px 1fr; gap: 1.25rem; }

.sidebar-preview {
  display: flex; flex-direction: column;
  padding: 0.85rem 0.65rem;
  background: var(--ds-bg); border: 1px solid var(--ds-line);
  border-radius: 12px; gap: 0.1rem; min-height: 320px;
}
.sp-brand { display: flex; align-items: center; gap: 0.5rem; padding: 0.3rem 0.5rem; margin-bottom: 0.85rem; }
.sp-logo { width: 28px; height: 28px; border-radius: 8px; display: grid; place-items: center; color: #fff; font-weight: 700; font-size: 0.85rem; }
.sp-brand-text strong { display: block; font-size: 0.9rem; font-weight: 700; line-height: 1.2; }
.sp-brand-text small  { font-size: 0.65rem; color: var(--ds-muted); letter-spacing: 0.06em; text-transform: uppercase; }
.sp-section-label { font-size: 0.62rem; color: var(--ds-faint); letter-spacing: 0.1em; text-transform: uppercase; padding: 0.5rem 0.6rem 0.3rem; font-weight: 600; }
.sp-nav { display: grid; gap: 0.1rem; }
.sp-link {
  display: flex; align-items: center; gap: 0.5rem;
  min-height: 34px; padding: 0.4rem 0.6rem;
  border-radius: 8px; color: var(--ds-text-soft); font-size: 0.82rem; font-weight: 500; cursor: pointer;
  transition: all 0.12s;
}
.sp-link i { font-size: 0.85rem; color: var(--ds-faint); flex-shrink: 0; }
.sp-link:hover { background: var(--ds-surface-2); color: var(--ds-text); }
.sp-link:hover i { color: var(--preview-primary, var(--ds-primary)); }
.sp-link.active { background: color-mix(in srgb, var(--preview-primary, var(--ds-primary)) 10%, transparent); color: var(--preview-primary, var(--ds-primary)); font-weight: 600; }
.sp-link.active i { color: var(--preview-primary, var(--ds-primary)); }
.sp-footer { margin-top: auto; border-top: 1px solid var(--ds-line-soft); padding-top: 0.5rem; display: grid; gap: 0.1rem; }
.sp-version { display: flex; align-items: center; gap: 0.4rem; padding: 0.4rem 0.6rem; color: var(--ds-faint); font-size: 0.66rem; }
.sp-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--ds-success); }

.header-demo { display: grid; gap: 1rem; }
.header-preview {
  display: flex; align-items: center; gap: 0.5rem;
  padding: 0.6rem 1rem;
  background: var(--ds-bg); border: 1px solid var(--ds-line); border-radius: 12px;
}
.hd-icon-btn { width: 34px; height: 34px; border: 1px solid var(--ds-line); border-radius: 8px; background: transparent; color: var(--ds-muted); cursor: pointer; display: grid; place-items: center; }
.hd-search { flex: 1; max-width: 320px; position: relative; display: flex; align-items: center; }
.hd-search input { width: 100%; height: 34px; padding: 0 0.75rem 0 2rem; border-radius: 8px; border: 1px solid var(--ds-line); background: var(--ds-bg); color: var(--ds-text); font: inherit; font-size: 0.82rem; outline: none; }
.hd-search .pi { position: absolute; left: 0.65rem; color: var(--ds-faint); font-size: 0.82rem; }
.hd-search kbd { position: absolute; right: 0.45rem; padding: 0.1rem 0.35rem; border-radius: 4px; border: 1px solid var(--ds-line); background: var(--ds-surface); color: var(--ds-muted); font-family: monospace; font-size: 0.65rem; }
.hd-actions { margin-left: auto; display: flex; align-items: center; gap: 0.35rem; }
.hd-user { display: flex; align-items: center; gap: 0.5rem; padding: 0.25rem 0.65rem 0.25rem 0.3rem; border: 1px solid var(--ds-line); border-radius: 999px; background: var(--ds-bg); cursor: pointer; }
.hd-avatar { width: 24px; height: 24px; border-radius: 50%; color: #fff; display: grid; place-items: center; font-size: 0.62rem; font-weight: 600; }
.hd-user-name { display: block; font-size: 0.76rem; font-weight: 600; white-space: nowrap; }
.hd-user-doc  { display: block; font-size: 0.64rem; color: var(--ds-muted); font-family: monospace; }

.variant-note strong { display: block; font-size: 0.82rem; font-weight: 600; color: var(--ds-muted); margin-bottom: 0.6rem; }
.brand-variant { background: linear-gradient(165deg, #003c6e 0%, var(--preview-primary, #0066b2) 45%, var(--preview-primary, #0094d9) 100%); border: 0; min-height: unset; padding: 0.85rem 0.65rem; }
.brand-variant .sp-brand-text strong,
.brand-variant .sp-brand-text small { color: #fff; }
.brand-variant .sp-brand-text small { color: rgba(255,255,255,0.7); }
.brand-logo { background: rgba(255,255,255,0.16) !important; border: 1px solid rgba(255,255,255,0.22); }
.brand-link { color: rgba(255,255,255,0.75) !important; }
.brand-link i { color: rgba(255,255,255,0.55) !important; }
.brand-link:hover { background: rgba(255,255,255,0.1) !important; color: #fff !important; }
.brand-link.active { background: rgba(255,255,255,0.18) !important; color: #fff !important; }
.brand-variant .sp-section-label { color: rgba(255,255,255,0.5) !important; }

@media (max-width: 768px) { .nav-demo { grid-template-columns: 1fr; } }
</style>
