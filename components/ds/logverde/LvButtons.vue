<template>
  <section class="lv-section">
    <div class="lv-head">
      <small>Componentes</small>
      <h2>BaseButton</h2>
      <p>Wrapper do <code>Button</code> PrimeVue. Severidades: default, secondary, success, info, warn, danger, contrast. Modificadores: <code>outlined</code> e <code>text</code>.</p>
    </div>

    <div class="group-label">Severidades sólidas</div>
    <div class="demo-row">
      <button class="btn btn--default">
        <i class="pi pi-save"></i> Salvar
      </button>
      <button class="btn btn--secondary">Cancelar</button>
      <button class="btn btn--success">
        <i class="pi pi-check"></i> Confirmar
      </button>
      <button class="btn btn--info">
        <i class="pi pi-info-circle"></i> Info
      </button>
      <button class="btn btn--warn">
        <i class="pi pi-exclamation-triangle"></i> Atenção
      </button>
      <button class="btn btn--danger">
        <i class="pi pi-trash"></i> Excluir
      </button>
    </div>

    <div class="group-label">Outlined</div>
    <div class="demo-row">
      <button class="btn btn--default-o">Salvar</button>
      <button class="btn btn--secondary-o">Cancelar</button>
      <button class="btn btn--success-o">Confirmar</button>
      <button class="btn btn--warn-o">Atenção</button>
      <button class="btn btn--danger-o">
        <i class="pi pi-trash"></i> Excluir
      </button>
    </div>

    <div class="group-label">Text (ghost)</div>
    <div class="demo-row">
      <button class="btn btn--text">Ver detalhes →</button>
      <button class="btn btn--text-danger">Remover</button>
      <button class="btn btn--text-warn">Atenção</button>
    </div>

    <div class="group-label">Loading</div>
    <div class="demo-row">
      <button class="btn btn--default" disabled>
        <span class="spinner"></span> Salvando...
      </button>
      <button class="btn btn--success" disabled>
        <span class="spinner"></span> Enviando...
      </button>
    </div>

    <div class="group-label">BaseIconButton</div>
    <div class="demo-row">
      <button class="icon-btn icon-btn--default" title="Editar"><i class="pi pi-pencil"></i></button>
      <button class="icon-btn icon-btn--danger"  title="Excluir"><i class="pi pi-trash"></i></button>
      <button class="icon-btn icon-btn--success" title="Confirmar"><i class="pi pi-check"></i></button>
      <button class="icon-btn icon-btn--info"    title="Info"><i class="pi pi-info-circle"></i></button>
      <button class="icon-btn icon-btn--ghost"   title="Mais"><i class="pi pi-ellipsis-h"></i></button>
    </div>

    <div class="group-label">Desabilitado</div>
    <div class="demo-row">
      <button class="btn btn--default" disabled>Salvar</button>
      <button class="btn btn--secondary" disabled>Cancelar</button>
      <button class="btn btn--danger" disabled>Excluir</button>
    </div>
  </section>
</template>

<style scoped>
.lv-section { display: grid; gap: 1.5rem; font-family: var(--lv-font, 'Geist', sans-serif); }
.lv-head small { color: var(--lv-primary, #0094d9); font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.lv-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 700; color: var(--lv-text, #0f172a); }
.lv-head p  { margin: 0; color: var(--lv-muted, #64748b); font-size: 0.88rem; }
.lv-head code { font-family: var(--lv-font-mono, monospace); font-size: 0.82em; background: var(--lv-surface-2, #f1f4f9); padding: 0.1em 0.35em; border-radius: 4px; }
.group-label { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--lv-muted, #64748b); }
.demo-row { display: flex; flex-wrap: wrap; align-items: center; gap: 0.75rem; }

.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 0.4rem;
  border: none; border-radius: var(--lv-radius-sm, 8px); font-size: 0.875rem; font-weight: 600;
  padding: 0.5rem 1rem; cursor: pointer; transition: all var(--lv-transition-fast, 0.15s);
  font-family: inherit; white-space: nowrap; min-height: var(--lv-min-touch, 40px);
}
.btn:disabled { opacity: 0.5; cursor: not-allowed; }
.btn i { font-size: 0.9rem; }

/* Solid */
.btn--default    { background: var(--lv-primary, #0094d9); color: #fff; }
.btn--default:not(:disabled):hover    { background: var(--lv-secondary, #0066b2); }
.btn--secondary  { background: var(--lv-surface-2, #f1f4f9); color: var(--lv-text, #0f172a); border: 1px solid var(--lv-line, #e5e9f0); }
.btn--secondary:not(:disabled):hover  { background: var(--lv-line, #e5e9f0); }
.btn--success    { background: var(--lv-success, #3dac00); color: #fff; }
.btn--success:not(:disabled):hover    { filter: brightness(0.88); }
.btn--info       { background: var(--lv-info, #1c4494); color: #fff; }
.btn--info:not(:disabled):hover       { filter: brightness(1.15); }
.btn--warn       { background: var(--lv-warning, #ffb11d); color: #fff; }
.btn--warn:not(:disabled):hover       { filter: brightness(0.9); }
.btn--danger     { background: var(--lv-error, #ff1414); color: #fff; }
.btn--danger:not(:disabled):hover     { filter: brightness(0.9); }

/* Outlined */
.btn--default-o    { background: transparent; border: 1px solid var(--lv-primary, #0094d9); color: var(--lv-primary, #0094d9); }
.btn--default-o:hover    { background: color-mix(in srgb, var(--lv-primary, #0094d9) 8%, transparent); }
.btn--secondary-o  { background: transparent; border: 1px solid var(--lv-line, #e5e9f0); color: var(--lv-text-soft, #334155); }
.btn--secondary-o:hover  { background: var(--lv-surface-2, #f1f4f9); }
.btn--success-o    { background: transparent; border: 1px solid var(--lv-success, #3dac00); color: var(--lv-success, #3dac00); }
.btn--success-o:hover    { background: color-mix(in srgb, var(--lv-success, #3dac00) 8%, transparent); }
.btn--warn-o       { background: transparent; border: 1px solid var(--lv-warning, #ffb11d); color: #b87d00; }
.btn--warn-o:hover       { background: color-mix(in srgb, var(--lv-warning, #ffb11d) 10%, transparent); }
.btn--danger-o     { background: transparent; border: 1px solid var(--lv-error, #ff1414); color: var(--lv-error, #ff1414); }
.btn--danger-o:hover     { background: color-mix(in srgb, var(--lv-error, #ff1414) 8%, transparent); }

/* Text */
.btn--text       { background: transparent; color: var(--lv-primary, #0094d9); padding: 0.35rem 0.5rem; min-height: unset; }
.btn--text:hover { background: color-mix(in srgb, var(--lv-primary, #0094d9) 8%, transparent); }
.btn--text-danger { background: transparent; color: var(--lv-error, #ff1414); padding: 0.35rem 0.5rem; min-height: unset; }
.btn--text-danger:hover { background: color-mix(in srgb, var(--lv-error, #ff1414) 8%, transparent); }
.btn--text-warn  { background: transparent; color: #b87d00; padding: 0.35rem 0.5rem; min-height: unset; }
.btn--text-warn:hover  { background: color-mix(in srgb, var(--lv-warning, #ffb11d) 10%, transparent); }

@keyframes spin { to { transform: rotate(360deg); } }
.spinner { width: 15px; height: 15px; border: 2px solid rgba(255,255,255,0.35); border-top-color: #fff; border-radius: 50%; animation: spin 0.65s linear infinite; }

/* Icon buttons */
.icon-btn { width: 36px; height: 36px; display: inline-flex; align-items: center; justify-content: center; border: none; border-radius: var(--lv-radius-sm, 8px); cursor: pointer; transition: all var(--lv-transition-fast, 0.15s); font-size: 0.9rem; }
.icon-btn--default { background: color-mix(in srgb, var(--lv-primary, #0094d9) 10%, transparent); color: var(--lv-primary, #0094d9); }
.icon-btn--default:hover { background: color-mix(in srgb, var(--lv-primary, #0094d9) 18%, transparent); }
.icon-btn--danger  { background: color-mix(in srgb, var(--lv-error, #ff1414) 10%, transparent); color: var(--lv-error, #ff1414); }
.icon-btn--danger:hover  { background: color-mix(in srgb, var(--lv-error, #ff1414) 18%, transparent); }
.icon-btn--success { background: color-mix(in srgb, var(--lv-success, #3dac00) 10%, transparent); color: var(--lv-success, #3dac00); }
.icon-btn--success:hover { background: color-mix(in srgb, var(--lv-success, #3dac00) 18%, transparent); }
.icon-btn--info    { background: color-mix(in srgb, var(--lv-info, #1c4494) 10%, transparent); color: var(--lv-info, #1c4494); }
.icon-btn--info:hover    { background: color-mix(in srgb, var(--lv-info, #1c4494) 18%, transparent); }
.icon-btn--ghost   { background: transparent; color: var(--lv-muted, #64748b); }
.icon-btn--ghost:hover   { background: var(--lv-surface-2, #f1f4f9); color: var(--lv-text, #0f172a); }
</style>
