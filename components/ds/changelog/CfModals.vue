<template>
  <section class="ds-section">
    <div class="ds-head">
      <small>Componentes</small>
      <h2>Modais</h2>
      <p><code>AppModal</code> — Teleport para body, border-radius 20px, shadow-xl.</p>
    </div>

    <div class="group-label">Demonstração</div>
    <div class="demo-row">
      <button class="app-btn app-btn--primary" @click="open = true">Abrir modal</button>
      <button class="app-btn app-btn--secondary" @click="openSm = true">Modal pequeno</button>
    </div>

    <div class="spec-grid">
      <div class="spec-card">
        <div class="spec-label">border-radius</div>
        <div class="spec-value">20px</div>
      </div>
      <div class="spec-card">
        <div class="spec-label">shadow</div>
        <div class="spec-value">--ff-shadow-xl</div>
      </div>
      <div class="spec-card">
        <div class="spec-label">backdrop</div>
        <div class="spec-value">rgba(0,0,0,0.45)</div>
      </div>
      <div class="spec-card">
        <div class="spec-label">padding</div>
        <div class="spec-value">1.5rem</div>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="modal">
        <div v-if="open" class="modal-backdrop" @click.self="open = false">
          <div class="modal-box">
            <div class="modal-header">
              <h3>Detalhes do ticket</h3>
              <button class="close-btn" @click="open = false">
                <svg viewBox="0 0 20 20"><path d="M5 5l10 10M15 5L5 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
              </button>
            </div>
            <div class="modal-body">
              <p>Este é o componente <strong>AppModal</strong> do Changelog DS. Ele usa <code>Teleport to="body"</code> e anima com <code>transition</code>.</p>
              <div class="badge-row">
                <span class="badge badge--success">Entregue</span>
                <span class="badge badge--primary">Novidade</span>
              </div>
            </div>
            <div class="modal-footer">
              <button class="app-btn app-btn--ghost" @click="open = false">Fechar</button>
              <button class="app-btn app-btn--primary">Confirmar</button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <Teleport to="body">
      <Transition name="modal">
        <div v-if="openSm" class="modal-backdrop" @click.self="openSm = false">
          <div class="modal-box modal-box--sm">
            <div class="modal-header">
              <h3>Confirmação</h3>
              <button class="close-btn" @click="openSm = false">
                <svg viewBox="0 0 20 20"><path d="M5 5l10 10M15 5L5 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
              </button>
            </div>
            <div class="modal-body">
              <p>Deseja continuar com a ação?</p>
            </div>
            <div class="modal-footer">
              <button class="app-btn app-btn--ghost" @click="openSm = false">Cancelar</button>
              <button class="app-btn app-btn--primary">Sim</button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const open   = ref(false)
const openSm = ref(false)
</script>

<style scoped>
.ds-section { display: grid; gap: 1.5rem; }
.ds-head small { color: #79b83e; font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.ds-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 600; }
.ds-head p  { margin: 0; color: var(--ff-color-secondary-text, #979ca3); font-size: 0.88rem; }
.group-label { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--ff-color-secondary-text); }
.demo-row { display: flex; flex-wrap: wrap; gap: 0.75rem; }

.app-btn {
  display: inline-flex; align-items: center; gap: 0.4rem;
  padding: 0.5rem 1.25rem; border-radius: 9999px; font-size: 0.875rem;
  font-weight: 600; font-family: "Source Sans 3","Segoe UI",sans-serif;
  border: none; cursor: pointer; transition: background 0.15s;
}
.app-btn--primary   { background: var(--ff-color-tertiary,#79b83e); color: #fff; }
.app-btn--primary:hover { background: #6aa834; }
.app-btn--secondary { background: var(--ff-color-primary,#0094d9); color: #fff; }
.app-btn--ghost     { background: transparent; color: var(--ff-color-primary-text,#3c3c3c); border: 1.5px solid var(--ff-color-accent-3,#e0e0e0); }

.spec-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px,1fr)); gap: 0.5rem; }
.spec-card { padding: 0.65rem 0.75rem; background: var(--ff-color-primary-bg,#fff); border: 1px solid var(--ff-color-accent-3,#e0e0e0); border-radius: 10px; }
.spec-label { font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--ff-color-secondary-text); margin-bottom: 0.2rem; }
.spec-value { font-size: 0.8rem; font-weight: 600; color: var(--ff-color-primary-text); font-family: monospace; }

/* Modal */
.modal-backdrop {
  position: fixed; inset: 0; background: rgba(0,0,0,0.45);
  display: flex; align-items: center; justify-content: center; z-index: 9999; padding: 1rem;
}
.modal-box {
  background: var(--ff-color-primary-bg,#fff); border-radius: 20px;
  box-shadow: 0 16px 25px rgba(0,0,0,0.1); width: 100%; max-width: 520px;
  overflow: hidden;
}
.modal-box--sm { max-width: 360px; }
.modal-header { display: flex; align-items: center; justify-content: space-between; padding: 1.25rem 1.5rem 0; }
.modal-header h3 { margin: 0; font-size: 1.1rem; font-weight: 600; }
.close-btn { display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; border: none; background: transparent; cursor: pointer; border-radius: 50%; color: var(--ff-color-secondary-text); }
.close-btn:hover { background: var(--ff-color-secondary-bg,#f8f8f8); }
.close-btn svg { width: 18px; height: 18px; }
.modal-body { padding: 1rem 1.5rem; }
.modal-body p { margin: 0 0 0.75rem; font-size: 0.9rem; color: var(--ff-color-primary-text); }
.modal-footer { display: flex; justify-content: flex-end; gap: 0.5rem; padding: 0 1.5rem 1.5rem; }
.badge-row { display: flex; gap: 0.4rem; flex-wrap: wrap; }
.badge { display: inline-flex; align-items: center; padding: 0.2rem 0.7rem; border-radius: 999px; font-size: 0.75rem; font-weight: 600; }
.badge--success { background: var(--ff-color-bg-success,#d7ffc5); color: var(--ff-color-success,#3dac00); }
.badge--primary { background: var(--ff-color-sub-primary,#d8edff); color: var(--ff-color-primary,#0094d9); }

/* Transitions */
.modal-enter-active, .modal-leave-active { transition: opacity 0.2s; }
.modal-enter-from, .modal-leave-to { opacity: 0; }
.modal-enter-active .modal-box, .modal-leave-active .modal-box { transition: transform 0.2s; }
.modal-enter-from .modal-box, .modal-leave-to .modal-box { transform: translateY(16px) scale(0.97); }
</style>
