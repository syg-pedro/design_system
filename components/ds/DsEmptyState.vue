<template>
  <section class="ds-section">
    <div class="ds-section-head">
      <small>Estados</small>
      <h2>Empty state</h2>
      <p>Padrão para listas e telas sem resultados.</p>
    </div>

    <div class="panels-grid">
      <div class="sample-panel">
        <h3>Fila vazia</h3>
        <div class="empty-state">
          <i class="pi pi-inbox"></i>
          <strong>Nenhum item na fila</strong>
          <span>Os registros aparecem aqui quando a busca retorna dados.</span>
          <button class="btn-outlined-sm"><i class="pi pi-refresh"></i> Atualizar</button>
        </div>
      </div>
      <div class="sample-panel">
        <h3>Sem resultados</h3>
        <div class="empty-state">
          <i class="pi pi-search"></i>
          <strong>Nenhum resultado encontrado</strong>
          <span>Tente usar termos diferentes ou remova os filtros ativos.</span>
          <button class="btn-outlined-sm"><i class="pi pi-filter-slash"></i> Limpar filtros</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ds-section { display: grid; gap: 1.25rem; }
.ds-section-head small { color: var(--ds-primary, #0094d9); font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.ds-section-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 400; letter-spacing: -0.015em; }
.ds-section-head p  { margin: 0; color: var(--ds-muted); font-size: 0.88rem; }

.panels-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.sample-panel { padding: 1.25rem 1.35rem; background: var(--ds-bg); border: 1px solid var(--ds-line); border-radius: 12px; display: grid; gap: 1rem; }
.sample-panel h3 { margin: 0; font-size: 1rem; font-weight: 400; letter-spacing: -0.01em; }

.empty-state { display: grid; place-items: center; gap: 0.5rem; padding: 1.75rem 1rem; color: var(--ds-muted); text-align: center; }
.empty-state .pi { font-size: 2.2rem; color: var(--ds-faint); }
.empty-state strong { font-size: 1.05rem; font-weight: 400; color: var(--ds-text); letter-spacing: -0.01em; }
.empty-state span { font-size: 0.84rem; max-width: 260px; }

.btn-outlined-sm {
  display: inline-flex; align-items: center; gap: 0.4rem;
  min-height: 32px; padding: 0 0.7rem;
  border-radius: 8px; border: 1px solid var(--ds-line);
  background: var(--ds-bg); color: var(--ds-text);
  cursor: pointer; font: inherit; font-size: 0.78rem; font-weight: 500;
  box-shadow: 0 1px 2px rgba(15,23,42,0.05);
  transition: all 0.15s; margin-top: 0.25rem;
}
.btn-outlined-sm:hover { border-color: var(--ds-primary); color: var(--ds-primary); }

@media (max-width: 640px) { .panels-grid { grid-template-columns: 1fr; } }
</style>
