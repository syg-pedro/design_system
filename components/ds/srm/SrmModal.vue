<template>
  <section class="srm-section">
    <div class="srm-head">
      <small>Componentes</small>
      <h2>UiModal</h2>
      <p>5 tamanhos (small → full), <code>closeOnOverlay</code>, fullscreen em mobile. Animação fade + scale.</p>
    </div>

    <div class="group-label">Triggers</div>
    <div class="demo-row">
      <button class="btn btn--primary" @click="showForm = true">Formulário</button>
      <button class="btn btn--secondary" @click="showConfirm = true">Confirmação</button>
      <button class="btn btn--danger" @click="showDelete = true">Excluir</button>
    </div>

    <!-- Form modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="showForm" class="overlay" @click.self="showForm = false">
          <div class="modal modal--md">
            <div class="modal-header">
              <h3 class="modal-title">Novo Fornecedor</h3>
              <button class="close-btn" @click="showForm = false">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>
            <div class="modal-body">
              <div class="form-grid">
                <div class="field">
                  <label class="field-label">Razão Social <span class="req">*</span></label>
                  <input class="input" type="text" placeholder="Ex: Reciclagem Norte Ltda" />
                </div>
                <div class="field">
                  <label class="field-label">CNPJ <span class="req">*</span></label>
                  <input class="input" type="text" placeholder="00.000.000/0001-00" />
                </div>
                <div class="field" style="grid-column:1/-1">
                  <label class="field-label">Categoria</label>
                  <select class="input">
                    <option value="">Selecione...</option>
                    <option>Plástico</option>
                    <option>Metal</option>
                    <option>Papel</option>
                    <option>Orgânico</option>
                  </select>
                </div>
                <div class="field" style="grid-column:1/-1">
                  <label class="field-label">Observações</label>
                  <textarea class="input" rows="3" placeholder="Informações adicionais..."></textarea>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button class="btn btn--secondary" @click="showForm = false">Cancelar</button>
              <button class="btn btn--primary">
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v14a2 2 0 01-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/></svg>
                Salvar
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- Confirm modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="showConfirm" class="overlay" @click.self="showConfirm = false">
          <div class="modal modal--sm">
            <div class="modal-header">
              <h3 class="modal-title">Confirmar check-in?</h3>
              <button class="close-btn" @click="showConfirm = false">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>
            <div class="modal-body">
              <p class="modal-text">Registrar visita para <strong>Reciclagem Norte Ltda</strong> agora? Localização será capturada automaticamente.</p>
            </div>
            <div class="modal-footer">
              <button class="btn btn--secondary" @click="showConfirm = false">Cancelar</button>
              <button class="btn btn--success" @click="showConfirm = false">
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                Confirmar
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- Delete modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="showDelete" class="overlay" @click.self="showDelete = false">
          <div class="modal modal--sm">
            <div class="modal-body" style="text-align:center; padding: 2rem 1.5rem">
              <div class="delete-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>
              </div>
              <h3 class="delete-title">Excluir fornecedor?</h3>
              <p class="delete-text"><strong>Reciclagem Norte Ltda</strong> será permanentemente removido. Esta ação não pode ser desfeita.</p>
            </div>
            <div class="modal-footer">
              <button class="btn btn--secondary" @click="showDelete = false">Cancelar</button>
              <button class="btn btn--danger" @click="showDelete = false">Sim, excluir</button>
            </div>
          </div>
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
.srm-section { display: grid; gap: 1.5rem; font-family: var(--srm-font-sans, 'Inter', sans-serif); }
.srm-head small { color: var(--srm-color-primary, #0099ff); font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.srm-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 700; color: var(--srm-color-text, #fff); }
.srm-head p  { margin: 0; color: var(--srm-color-text-muted, #aaa); font-size: 0.88rem; }
.srm-head code { font-family: var(--srm-font-mono, monospace); font-size: 0.8em; background: var(--srm-color-hover, rgba(255,255,255,.1)); padding: 0.1em 0.35em; border-radius: 4px; }
.group-label { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--srm-color-text-muted, #aaa); }
.demo-row { display: flex; flex-wrap: wrap; gap: 0.75rem; }

.btn { display: inline-flex; align-items: center; gap: 6px; border: none; border-radius: var(--srm-radius-md, 6px); font-size: 0.95rem; font-weight: 600; padding: 10px 20px; cursor: pointer; font-family: inherit; transition: all var(--srm-transition, 0.2s); }
.btn--primary   { background: var(--srm-color-primary, #0099ff); color: #fff; }
.btn--primary:hover   { background: var(--srm-color-primary-dark, #0077be); transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,153,255,0.3); }
.btn--secondary { background: var(--srm-color-bg, #0f172a); color: var(--srm-color-text, #fff); border: 1px solid var(--srm-color-border, #333); }
.btn--secondary:hover { background: var(--srm-color-hover, rgba(255,255,255,.08)); border-color: var(--srm-color-primary, #0099ff); }
.btn--success   { background: #10b981; color: #fff; }
.btn--success:hover   { background: #059669; transform: translateY(-1px); }
.btn--danger    { background: #ef4444; color: #fff; }
.btn--danger:hover    { background: #dc2626; transform: translateY(-1px); }
.btn-icon { width: 15px; height: 15px; }

.overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 1000; display: flex; align-items: center; justify-content: center; padding: 1rem; }
.modal { background: var(--srm-color-surface, #1e293b); border-radius: var(--srm-radius-xl, 12px); border: 1px solid var(--srm-color-border, #333); box-shadow: 0 20px 40px rgba(0,0,0,0.5); display: flex; flex-direction: column; max-height: 90vh; width: 100%; }
.modal--sm { max-width: 400px; }
.modal--md { max-width: 540px; }
.modal-header { display: flex; align-items: center; justify-content: space-between; padding: 1.25rem 1.5rem; border-bottom: 1px solid var(--srm-color-border, #333); }
.modal-title { margin: 0; font-size: 1.05rem; font-weight: 600; color: var(--srm-color-text, #fff); }
.close-btn { width: 28px; height: 28px; border: none; background: var(--srm-color-hover, rgba(255,255,255,.08)); cursor: pointer; color: var(--srm-color-text-muted, #aaa); border-radius: var(--srm-radius-sm, 4px); display: flex; align-items: center; justify-content: center; transition: all var(--srm-transition, 0.2s); }
.close-btn:hover { color: var(--srm-color-text, #fff); }
.close-btn svg { width: 15px; height: 15px; }
.modal-body { padding: 1.25rem 1.5rem; overflow-y: auto; flex: 1; }
.modal-text { margin: 0; font-size: 0.875rem; color: var(--srm-color-text-muted, #aaa); line-height: 1.6; }
.modal-footer { padding: 1rem 1.5rem; border-top: 1px solid var(--srm-color-border, #333); display: flex; justify-content: flex-end; gap: 0.5rem; }
.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.field { display: flex; flex-direction: column; gap: 0.3rem; }
.field-label { font-size: 0.85rem; font-weight: 500; color: var(--srm-color-text-label, #cbd5e1); }
.req { color: #ef4444; }
.input { background: var(--srm-color-bg, #0f172a); border: 1px solid var(--srm-color-border, #333); border-radius: var(--srm-radius-md, 6px); padding: 0.5rem 0.75rem; font-size: 0.875rem; color: var(--srm-color-text, #fff); font-family: inherit; outline: none; transition: border-color var(--srm-transition, 0.2s); }
.input:focus { border-color: var(--srm-color-primary, #0099ff); box-shadow: 0 0 0 3px rgba(0,153,255,0.15); }
textarea.input { resize: vertical; }
.delete-icon { width: 56px; height: 56px; background: rgba(239,68,68,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; color: #ef4444; border: 1px solid rgba(239,68,68,0.2); }
.delete-icon svg { width: 28px; height: 28px; }
.delete-title { font-size: 1.1rem; font-weight: 600; color: var(--srm-color-text, #fff); margin: 0 0 0.5rem; }
.delete-text  { font-size: 0.875rem; color: var(--srm-color-text-muted, #aaa); margin: 0; line-height: 1.55; }

.modal-enter-active, .modal-leave-active { transition: opacity 0.2s; }
.modal-enter-from, .modal-leave-to { opacity: 0; }
.modal-enter-active .modal, .modal-leave-active .modal { transition: all 0.2s; }
.modal-enter-from .modal, .modal-leave-to .modal { opacity: 0; transform: scale(0.95); }
</style>
