<template>
  <section class="pc-section">
    <div class="pc-head">
      <small>Padrões</small>
      <h2>Modais de Confirmação</h2>
      <p>Padrão de <code>TributacaoForm</code> — Teleport to body, máx 384px, variante destructiva (cancelar) e primária (salvar).</p>
    </div>

    <div class="group-label">Demonstrações</div>
    <div class="demo-row">
      <button class="btn btn--primary" @click="openSave = true">
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v14a2 2 0 01-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
        Salvar Alterações
      </button>
      <button class="btn btn--secondary" @click="openCancel = true">Cancelar</button>
      <button class="btn btn--danger" @click="openDelete = true">
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M9 6V4h6v2"/></svg>
        Excluir tributação
      </button>
    </div>

    <div class="spec-grid">
      <div class="spec-card" v-for="s in specs" :key="s.label">
        <div class="spec-label">{{ s.label }}</div>
        <div class="spec-value">{{ s.value }}</div>
      </div>
    </div>

    <!-- Save confirm -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="openSave" class="modal-backdrop" @click.self="openSave = false">
          <div class="modal-box">
            <div class="modal-body">
              <h3>Confirmar salvamento?</h3>
              <p>Deseja salvar as alterações realizadas?</p>
            </div>
            <div class="modal-footer">
              <button class="btn btn--secondary" @click="openSave = false">Voltar</button>
              <button class="btn btn--primary" @click="openSave = false">Sim, salvar</button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- Cancel confirm -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="openCancel" class="modal-backdrop" @click.self="openCancel = false">
          <div class="modal-box">
            <div class="modal-body">
              <h3>Cancelar alterações?</h3>
              <p>As alterações não salvas serão perdidas. Deseja continuar?</p>
            </div>
            <div class="modal-footer">
              <button class="btn btn--secondary" @click="openCancel = false">Voltar</button>
              <button class="btn btn--danger" @click="openCancel = false">Sim, cancelar</button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- Delete confirm -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="openDelete" class="modal-backdrop" @click.self="openDelete = false">
          <div class="modal-box">
            <div class="modal-body">
              <h3>Excluir tributação?</h3>
              <p>Esta ação não poderá ser desfeita. Deseja excluir permanentemente?</p>
            </div>
            <div class="modal-footer">
              <button class="btn btn--secondary" @click="openDelete = false">Cancelar</button>
              <button class="btn btn--danger" @click="openDelete = false">Excluir</button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const openSave   = ref(false)
const openCancel = ref(false)
const openDelete = ref(false)

const specs = [
  { label: 'max-width',  value: '384px (sm)' },
  { label: 'backdrop',   value: 'bg-black/50' },
  { label: 'border-radius', value: 'var(--pc-radius-lg) 12px' },
  { label: 'shadow',     value: 'var(--pc-shadow-xl)' },
  { label: 'Teleport',   value: 'to="body"' },
]
</script>

<style scoped>
.pc-section { display: grid; gap: 1.5rem; font-family: var(--pc-font-sans, 'Inter', sans-serif); }
.pc-head small { color: var(--pc-color-primary, #2563eb); font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.pc-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 700; color: var(--pc-color-text, #0f172a); }
.pc-head p  { margin: 0; color: var(--pc-color-text-muted, #64748b); font-size: 0.88rem; }
.group-label { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--pc-color-text-muted); }
.demo-row { display: flex; flex-wrap: wrap; gap: 0.65rem; }

.btn {
  display: inline-flex; align-items: center; gap: 0.4rem;
  padding: 0.5rem 1rem; border-radius: var(--pc-radius-md, 8px);
  font-size: 0.875rem; font-weight: 500; font-family: inherit;
  border: 1px solid transparent; cursor: pointer; transition: background 0.15s;
}
.btn--primary  { background: var(--pc-color-primary, #2563eb); color: #fff; }
.btn--primary:hover { background: var(--pc-color-primary-hover, #1d4ed8); }
.btn--secondary { background: transparent; color: var(--pc-color-text-soft, #334155); border-color: var(--pc-color-line-soft, #cbd5e1); }
.btn--secondary:hover { background: var(--pc-color-surface-2, #f1f5f9); }
.btn--danger   { background: #dc2626; color: #fff; }
.btn--danger:hover { background: #b91c1c; }
.btn-icon { width: 16px; height: 16px; flex-shrink: 0; }

.spec-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px,1fr)); gap: 0.5rem; }
.spec-card { padding: 0.65rem 0.75rem; background: var(--pc-color-surface, #fff); border: 1px solid var(--pc-color-line, #e2e8f0); border-radius: var(--pc-radius-md, 8px); }
.spec-label { font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--pc-color-text-muted); margin-bottom: 0.2rem; }
.spec-value { font-size: 0.8rem; font-weight: 600; color: var(--pc-color-text); font-family: monospace; }

/* Modal */
.modal-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 9999; padding: 1rem; }
.modal-box { background: var(--pc-color-surface, #fff); border: 1px solid var(--pc-color-line, #e2e8f0); border-radius: var(--pc-radius-lg, 12px); box-shadow: var(--pc-shadow-xl, 0 20px 25px rgba(0,0,0,0.1)); width: 100%; max-width: 384px; }
.modal-body { padding: 1.25rem; }
.modal-body h3 { margin: 0 0 0.5rem; font-size: 0.95rem; font-weight: 600; color: var(--pc-color-text, #0f172a); }
.modal-body p  { margin: 0; font-size: 0.875rem; color: var(--pc-color-text-muted, #64748b); }
.modal-footer { display: flex; justify-content: flex-end; gap: 0.5rem; padding: 0 1.25rem 1.25rem; }

.modal-enter-active, .modal-leave-active { transition: opacity 0.2s; }
.modal-enter-from, .modal-leave-to { opacity: 0; }
.modal-enter-active .modal-box, .modal-leave-active .modal-box { transition: transform 0.2s; }
.modal-enter-from .modal-box, .modal-leave-to .modal-box { transform: translateY(12px) scale(0.97); }
</style>
