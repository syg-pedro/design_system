<template>
  <section class="ds-section">
    <div class="ds-section-head">
      <small>Sobreposições</small>
      <h2>Modais & Drawer</h2>
      <p>Padrões de alerta, confirmação e drawer de detalhes — com backdrop blur.</p>
    </div>

    <div class="panels-grid">
      <div class="sample-panel">
        <h3>Alertas</h3>
        <p class="panel-sub">Comunica algo importante. Use severidades info / sucesso / aviso / erro.</p>
        <div class="btn-row">
          <button class="btn primary" @click="open('info')"><i class="pi pi-info-circle"></i> Info</button>
          <button class="btn success" @click="open('success')"><i class="pi pi-check-circle"></i> Sucesso</button>
          <button class="btn warn" @click="open('warn')"><i class="pi pi-exclamation-triangle"></i> Aviso</button>
          <button class="btn danger" @click="open('error')"><i class="pi pi-times-circle"></i> Erro</button>
        </div>
      </div>
      <div class="sample-panel">
        <h3>Confirmação</h3>
        <p class="panel-sub">Ação destrutiva ou irreversível exige confirmação explícita do usuário.</p>
        <div class="btn-row">
          <button class="btn danger" @click="open('confirm')"><i class="pi pi-trash"></i> Excluir registro</button>
        </div>
      </div>
    </div>

    <!-- Backdrop -->
    <Teleport to="body">
      <div class="backdrop" :class="{ open: !!activeModal }" @click.self="close">
        <!-- Alert modals -->
        <div v-if="activeModal === 'info'" class="modal">
          <div class="modal-head">
            <span class="modal-icon info"><i class="pi pi-info-circle"></i></span>
            <div class="modal-title">
              <h3>Informação importante</h3>
              <p>Este processo pode levar alguns minutos. Você receberá uma notificação quando concluído.</p>
            </div>
            <button class="modal-close" @click="close"><i class="pi pi-times"></i></button>
          </div>
          <div class="modal-foot">
            <button class="btn outlined sm" @click="close">Fechar</button>
            <button class="btn primary sm">Entendido</button>
          </div>
        </div>
        <div v-if="activeModal === 'success'" class="modal">
          <div class="modal-head">
            <span class="modal-icon success"><i class="pi pi-check-circle"></i></span>
            <div class="modal-title">
              <h3>Operação concluída</h3>
              <p>O registro foi salvo com sucesso e está disponível para consulta.</p>
            </div>
            <button class="modal-close" @click="close"><i class="pi pi-times"></i></button>
          </div>
          <div class="modal-foot">
            <button class="btn primary sm" @click="close">Perfeito</button>
          </div>
        </div>
        <div v-if="activeModal === 'warn'" class="modal">
          <div class="modal-head">
            <span class="modal-icon warn"><i class="pi pi-exclamation-triangle"></i></span>
            <div class="modal-title">
              <h3>Atenção necessária</h3>
              <p>Existem campos obrigatórios não preenchidos. Revise antes de continuar.</p>
            </div>
            <button class="modal-close" @click="close"><i class="pi pi-times"></i></button>
          </div>
          <div class="modal-foot">
            <button class="btn outlined sm" @click="close">Cancelar</button>
            <button class="btn warn sm">Continuar assim</button>
          </div>
        </div>
        <div v-if="activeModal === 'error'" class="modal">
          <div class="modal-head">
            <span class="modal-icon error"><i class="pi pi-times-circle"></i></span>
            <div class="modal-title">
              <h3>Erro ao processar</h3>
              <p>Não foi possível completar a operação. Verifique sua conexão e tente novamente.</p>
            </div>
            <button class="modal-close" @click="close"><i class="pi pi-times"></i></button>
          </div>
          <div class="modal-foot">
            <button class="btn outlined sm" @click="close">Fechar</button>
            <button class="btn danger sm"><i class="pi pi-refresh"></i> Tentar novamente</button>
          </div>
        </div>
        <div v-if="activeModal === 'confirm'" class="modal">
          <div class="modal-head">
            <span class="modal-icon error"><i class="pi pi-trash"></i></span>
            <div class="modal-title">
              <h3>Excluir registro?</h3>
              <p>Esta ação não pode ser desfeita. O item será removido permanentemente.</p>
            </div>
            <button class="modal-close" @click="close"><i class="pi pi-times"></i></button>
          </div>
          <div class="modal-foot">
            <button class="btn outlined sm" @click="close">Cancelar</button>
            <button class="btn danger sm"><i class="pi pi-trash"></i> Sim, excluir</button>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
const activeModal = ref<string | null>(null)
function open(name: string) { activeModal.value = name }
function close() { activeModal.value = null }
</script>

<style scoped>
.ds-section { display: grid; gap: 1.25rem; }
.ds-section-head small { color: var(--ds-primary, #0094d9); font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.ds-section-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 400; letter-spacing: -0.015em; }
.ds-section-head p  { margin: 0; color: var(--ds-muted); font-size: 0.88rem; }

.panels-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.sample-panel { padding: 1.25rem 1.35rem; background: var(--ds-bg); border: 1px solid var(--ds-line); border-radius: 12px; display: grid; gap: 0.9rem; }
.sample-panel h3 { margin: 0; font-size: 1rem; font-weight: 400; letter-spacing: -0.01em; }
.panel-sub { margin: 0; color: var(--ds-muted); font-size: 0.84rem; }
.btn-row { display: flex; flex-wrap: wrap; gap: 0.5rem; }

.btn { display: inline-flex; align-items: center; gap: 0.45rem; min-height: 40px; padding: 0 1rem; border-radius: 10px; border: 1px solid transparent; cursor: pointer; font: inherit; font-size: 0.86rem; font-weight: 500; transition: all 0.15s; }
.btn.primary { background: var(--ds-primary, #0094d9); color: #fff; }
.btn.primary:hover { opacity: 0.9; }
.btn.success { background: var(--ds-success, #3dac00); color: #fff; }
.btn.warn    { background: var(--ds-warning, #ffb11d); color: #1f2937; }
.btn.danger  { background: var(--ds-error, #ff1414); color: #fff; }
.btn.outlined { background: var(--ds-bg); color: var(--ds-text); border-color: var(--ds-line); }
.btn.outlined:hover { border-color: var(--ds-primary); color: var(--ds-primary); }
.btn.sm { min-height: 34px; padding: 0 0.75rem; font-size: 0.82rem; }

.backdrop {
  position: fixed; inset: 0;
  background: rgba(15,23,42,0.55);
  backdrop-filter: blur(4px);
  display: none; align-items: center; justify-content: center;
  z-index: 2000; padding: 1.5rem;
}
.backdrop.open { display: flex; }

.modal {
  width: 100%; max-width: 460px;
  background: var(--ds-bg, #fff);
  border: 1px solid var(--ds-line, #e5e9f0);
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(15,23,42,0.06), 0 24px 48px -18px rgba(15,23,42,0.18);
  overflow: hidden;
  animation: modalIn 0.22s cubic-bezier(.2,.9,.3,1.1);
  display: flex; flex-direction: column;
}
@keyframes modalIn { from { opacity: 0; transform: translateY(10px) scale(0.98); } to { opacity: 1; transform: none; } }

.modal-head { display: flex; align-items: flex-start; gap: 1rem; padding: 1.4rem 1.5rem 0.75rem; }
.modal-icon { width: 44px; height: 44px; flex-shrink: 0; border-radius: 12px; display: grid; place-items: center; font-size: 1.2rem; }
.modal-icon.info    { background: color-mix(in srgb, var(--ds-info, #1c4494) 12%, transparent); color: var(--ds-info, #1c4494); }
.modal-icon.success { background: color-mix(in srgb, var(--ds-success, #3dac00) 12%, transparent); color: var(--ds-success, #3dac00); }
.modal-icon.warn    { background: color-mix(in srgb, var(--ds-warning, #ffb11d) 22%, transparent); color: #946100; }
.modal-icon.error   { background: color-mix(in srgb, var(--ds-error, #ff1414) 12%, transparent); color: var(--ds-error, #ff1414); }
.modal-title { flex: 1; }
.modal-title h3 { margin: 0 0 0.3rem; font-size: 1.1rem; font-weight: 400; letter-spacing: -0.01em; }
.modal-title p  { margin: 0; color: var(--ds-muted, #64748b); font-size: 0.86rem; line-height: 1.5; }
.modal-close { width: 30px; height: 30px; border: 0; background: transparent; cursor: pointer; border-radius: 8px; color: var(--ds-muted, #64748b); display: grid; place-items: center; flex-shrink: 0; transition: all 0.12s; }
.modal-close:hover { background: var(--ds-surface-2, #f1f4f9); color: var(--ds-text, #0f172a); }
.modal-foot { display: flex; justify-content: flex-end; gap: 0.5rem; padding: 0.85rem 1.5rem; border-top: 1px solid var(--ds-line-soft, #eef1f6); background: var(--ds-surface, #f6f8fb); }

@media (max-width: 640px) { .panels-grid { grid-template-columns: 1fr; } }
</style>
