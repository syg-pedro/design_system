<template>
  <section class="vv-section">
    <div class="vv-head">
      <small>Componentes</small>
      <h2>Modais</h2>
      <p>AppModal com variantes de confirmação, formulário e alerta de exclusão.</p>
    </div>

    <div class="group-label">Triggers</div>
    <div class="demo-row">
      <button class="btn btn--primary" @click="showForm = true">Formulário</button>
      <button class="btn btn--secondary" @click="showConfirm = true">Confirmar ação</button>
      <button class="btn btn--danger" @click="showDelete = true">Excluir</button>
    </div>

    <!-- Form modal -->
    <Teleport to="body">
      <Transition name="fade">
        <div v-if="showForm" class="overlay" @click.self="showForm = false">
          <Transition name="scale">
            <div v-if="showForm" class="modal modal--md">
              <div class="modal-header">
                <h2 class="modal-title">Nova empresa</h2>
                <button class="close-btn" @click="showForm = false">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
              </div>
              <div class="modal-body">
                <div class="form-grid">
                  <div class="field">
                    <label class="field-label">Razão social <span class="req">*</span></label>
                    <input class="input" type="text" placeholder="Ex: AgroVerde S.A." />
                  </div>
                  <div class="field">
                    <label class="field-label">CNPJ <span class="req">*</span></label>
                    <input class="input" type="text" placeholder="00.000.000/0001-00" />
                  </div>
                  <div class="field" style="grid-column: 1/-1">
                    <label class="field-label">Tipo de empresa <span class="req">*</span></label>
                    <select class="input">
                      <option value="">Selecione...</option>
                      <option>Operador</option>
                      <option>Demandante</option>
                      <option>Associação</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button class="btn btn--secondary" @click="showForm = false">Cancelar</button>
                <button class="btn btn--primary">
                  <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v14a2 2 0 01-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
                  Salvar empresa
                </button>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>

    <!-- Confirm modal -->
    <Teleport to="body">
      <Transition name="fade">
        <div v-if="showConfirm" class="overlay" @click.self="showConfirm = false">
          <Transition name="scale">
            <div v-if="showConfirm" class="modal modal--sm">
              <div class="modal-header">
                <h2 class="modal-title">Confirmar operação</h2>
                <button class="close-btn" @click="showConfirm = false">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
              </div>
              <div class="modal-body">
                <p class="modal-text">Deseja realmente aprovar esta solicitação? Esta ação não pode ser desfeita.</p>
              </div>
              <div class="modal-footer">
                <button class="btn btn--secondary" @click="showConfirm = false">Cancelar</button>
                <button class="btn btn--primary" @click="showConfirm = false">Confirmar</button>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>

    <!-- Delete modal -->
    <Teleport to="body">
      <Transition name="fade">
        <div v-if="showDelete" class="overlay" @click.self="showDelete = false">
          <Transition name="scale">
            <div v-if="showDelete" class="modal modal--sm">
              <div class="modal-body" style="text-align:center; padding: 2rem 1.5rem">
                <div class="delete-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>
                </div>
                <h3 class="delete-title">Excluir empresa?</h3>
                <p class="delete-text">A empresa <strong>AgroVerde S.A.</strong> será permanentemente removida. Esta ação não pode ser desfeita.</p>
              </div>
              <div class="modal-footer">
                <button class="btn btn--secondary" @click="showDelete = false">Cancelar</button>
                <button class="btn btn--danger-solid" @click="showDelete = false">Sim, excluir</button>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const showForm    = ref(false)
const showConfirm = ref(false)
const showDelete  = ref(false)
</script>

<style scoped>
.vv-section { display: grid; gap: 1.5rem; font-family: var(--vv-font-sans, 'Inter', sans-serif); }
.vv-head small { color: var(--vv-color-primary, #16a34a); font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.vv-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 700; color: var(--vv-color-text, #111827); }
.vv-head p  { margin: 0; color: var(--vv-color-text-muted, #6b7280); font-size: 0.88rem; }
.group-label { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--vv-color-text-muted, #6b7280); }
.demo-row { display: flex; flex-wrap: wrap; gap: 0.75rem; }

.btn { display: inline-flex; align-items: center; gap: 0.4rem; border: none; border-radius: 8px; font-size: 0.875rem; font-weight: 500; padding: 0.5rem 1rem; cursor: pointer; font-family: inherit; transition: all 0.15s; }
.btn--primary { background: var(--vv-color-primary, #16a34a); color: #fff; }
.btn--primary:hover { background: var(--vv-color-primary-hover, #15803d); }
.btn--secondary { background: #e5e7eb; color: #374151; }
.btn--secondary:hover { background: #d1d5db; }
.btn--danger { background: #fee2e2; color: #dc2626; }
.btn--danger:hover { background: #fecaca; }
.btn--danger-solid { background: #dc2626; color: #fff; }
.btn--danger-solid:hover { background: #b91c1c; }
.btn-icon { width: 15px; height: 15px; }

.overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.45); z-index: 1000; display: flex; align-items: center; justify-content: center; padding: 1rem; }
.modal { background: var(--vv-color-surface, #fff); border-radius: var(--vv-radius-xl, 12px); box-shadow: var(--vv-shadow-xl, 0 20px 25px rgba(0,0,0,.1)); display: flex; flex-direction: column; max-height: 90vh; width: 100%; }
.modal--sm { max-width: 400px; }
.modal--md { max-width: 540px; }
.modal-header { display: flex; align-items: center; justify-content: space-between; padding: 1.25rem 1.5rem; border-bottom: 1px solid var(--vv-color-line, #e5e7eb); }
.modal-title { margin: 0; font-size: 1.05rem; font-weight: 600; color: var(--vv-color-text, #111827); }
.close-btn { width: 28px; height: 28px; border: none; background: none; cursor: pointer; color: #9ca3af; border-radius: 6px; display: flex; align-items: center; justify-content: center; transition: all 0.15s; }
.close-btn:hover { background: #f3f4f6; color: #374151; }
.close-btn svg { width: 16px; height: 16px; }
.modal-body { padding: 1.25rem 1.5rem; overflow-y: auto; flex: 1; }
.modal-text { margin: 0; font-size: 0.875rem; color: var(--vv-color-text-soft, #374151); line-height: 1.6; }
.modal-footer { padding: 1rem 1.5rem; border-top: 1px solid var(--vv-color-line, #e5e7eb); display: flex; justify-content: flex-end; gap: 0.5rem; }
.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.field { display: flex; flex-direction: column; gap: 0.25rem; }
.field-label { font-size: 0.875rem; font-weight: 500; color: var(--vv-color-text-soft, #374151); }
.req { color: #dc2626; }
.input { border-radius: 8px; border: 1px solid #d1d5db; padding: 0.5rem 0.75rem; font-size: 0.875rem; color: #111827; font-family: inherit; outline: none; transition: all 0.15s; }
.input:focus { border-color: transparent; box-shadow: 0 0 0 2px #86efac; }
.delete-icon { width: 56px; height: 56px; background: #fee2e2; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; color: #dc2626; }
.delete-icon svg { width: 28px; height: 28px; }
.delete-title { font-size: 1.1rem; font-weight: 600; color: #111827; margin: 0 0 0.5rem; }
.delete-text  { font-size: 0.875rem; color: #6b7280; margin: 0; line-height: 1.55; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
.scale-enter-active, .scale-leave-active { transition: all 0.2s; }
.scale-enter-from, .scale-leave-to { opacity: 0; transform: scale(0.95); }
</style>
