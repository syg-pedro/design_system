<template>
  <section class="ds-section">
    <div class="ds-head">
      <small>Padrões</small>
      <h2>AttachmentAction</h2>
      <p>Cartão de download de anexo com ícone, nome e extensão.</p>
    </div>

    <div class="group-label">Exemplos</div>
    <div class="attach-grid">
      <div class="attach-card" v-for="a in attachments" :key="a.name">
        <div class="attach-icon" :style="`background:${a.iconBg}`">
          <svg viewBox="0 0 20 20" :style="`color:${a.iconColor}`">
            <path v-if="a.kind==='pdf'" d="M5 3h7l4 4v10a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="currentColor" stroke-width="1.5" fill="none"/><path v-if="a.kind==='pdf'" d="M12 3v4h4" stroke="currentColor" stroke-width="1.5" fill="none"/>
            <path v-if="a.kind==='sheet'" d="M5 3h10a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="currentColor" stroke-width="1.5" fill="none"/><path v-if="a.kind==='sheet'" d="M4 8h12M4 12h12M9 8v8" stroke="currentColor" stroke-width="1.5"/>
            <path v-if="a.kind==='image'" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" stroke="currentColor" stroke-width="1.5" fill="none"/><circle v-if="a.kind==='image'" cx="8" cy="8" r="1.5" fill="currentColor"/><path v-if="a.kind==='image'" d="M3 13l4-4 3 3 2-2 5 5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" fill="none"/>
            <path v-if="a.kind==='archive'" d="M5 3h10a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="currentColor" stroke-width="1.5" fill="none"/><path v-if="a.kind==='archive'" d="M9 3v14M9 6h2M9 9h2M9 12h2" stroke="currentColor" stroke-width="1.5"/>
          </svg>
        </div>
        <div class="attach-info">
          <span class="attach-name">{{ a.name }}</span>
          <span class="attach-ext">{{ a.ext }}</span>
        </div>
        <svg class="attach-download" viewBox="0 0 20 20"><path d="M10 4v8M6 9l4 4 4-4M4 15h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>
      </div>
    </div>

    <div class="group-label">Tokens de cor de ícone</div>
    <div class="token-note">
      O fundo do ícone usa <code>color-mix(in srgb, var(--ff-color-primary) 88%, black)</code> com opacidade ajustada por tipo.
    </div>
  </section>
</template>

<script setup lang="ts">
const attachments = [
  { name: 'Relatório_Q1_2025.pdf', ext: 'PDF', kind: 'pdf', iconColor: '#ff1414', iconBg: 'rgba(255,20,20,0.1)' },
  { name: 'Planilha_entregas.xlsx', ext: 'XLSX', kind: 'sheet', iconColor: '#3dac00', iconBg: 'rgba(61,172,0,0.1)' },
  { name: 'Screenshot_modal.png', ext: 'PNG', kind: 'image', iconColor: '#0094d9', iconBg: 'rgba(0,148,217,0.1)' },
  { name: 'Backup_config.zip', ext: 'ZIP', kind: 'archive', iconColor: '#f3943d', iconBg: 'rgba(243,148,61,0.1)' },
]
</script>

<style scoped>
.ds-section { display: grid; gap: 1.5rem; }
.ds-head small { color: #79b83e; font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.ds-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 600; }
.ds-head p  { margin: 0; color: var(--ff-color-secondary-text, #979ca3); font-size: 0.88rem; }
.group-label { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--ff-color-secondary-text); }

.attach-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px,1fr)); gap: 0.65rem; }
.attach-card {
  display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem;
  background: var(--ff-color-primary-bg,#fff);
  border: 1px solid var(--ff-color-accent-3,#e0e0e0); border-radius: 12px;
  cursor: pointer; transition: box-shadow 0.15s;
}
.attach-card:hover { box-shadow: var(--ff-shadow-md,0 3px 6px rgba(0,0,0,0.1)); }
.attach-icon {
  width: 40px; height: 40px; border-radius: 10px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
}
.attach-icon svg { width: 22px; height: 22px; }
.attach-info { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 0.1rem; }
.attach-name { font-size: 0.78rem; font-weight: 600; color: var(--ff-color-primary-text,#3c3c3c); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.attach-ext { font-size: 0.68rem; color: var(--ff-color-secondary-text); text-transform: uppercase; }
.attach-download { width: 18px; height: 18px; color: var(--ff-color-secondary-text); flex-shrink: 0; }
.token-note { font-size: 0.8rem; color: var(--ff-color-secondary-text); padding: 0.75rem; background: var(--ff-color-secondary-bg,#f8f8f8); border-radius: 8px; }
.token-note code { color: var(--ff-color-primary,#0094d9); }
</style>
