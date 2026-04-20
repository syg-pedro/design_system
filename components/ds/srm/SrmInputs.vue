<template>
  <section class="srm-section">
    <div class="srm-head">
      <small>Componentes</small>
      <h2>UiInput, UiSelect, UiToggle, UiCheckbox</h2>
      <p>Campos com label, hint, erro, prefix/suffix slots e máscara. Toggle e checkbox com accent primário.</p>
    </div>

    <div class="group-label">Text Inputs</div>
    <div class="form-grid">
      <div class="field">
        <label class="field-label">Nome completo <span class="req">*</span></label>
        <div class="input-wrap">
          <input class="input" type="text" placeholder="Ex: João Silva" />
        </div>
      </div>
      <div class="field">
        <label class="field-label">E-mail</label>
        <div class="input-wrap">
          <span class="prefix">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </span>
          <input class="input has-prefix" type="email" placeholder="email@empresa.com.br" />
        </div>
        <span class="hint">Use o e-mail corporativo.</span>
      </div>
      <div class="field">
        <label class="field-label">CNPJ <span class="req">*</span></label>
        <div class="input-wrap has-error">
          <input class="input error" type="text" value="12.345.678/0001" />
        </div>
        <span class="error-msg">CNPJ inválido.</span>
      </div>
      <div class="field">
        <label class="field-label">Empresa</label>
        <div class="input-wrap">
          <input class="input" type="text" value="Sygecom Ltda" disabled />
        </div>
      </div>
    </div>

    <div class="group-label">Select</div>
    <div class="form-grid">
      <div class="field">
        <label class="field-label">Status <span class="req">*</span></label>
        <select class="input">
          <option value="">Selecione...</option>
          <option selected>Finalizado</option>
          <option>Acompanhamento</option>
          <option>Pendente</option>
          <option>Vencido</option>
        </select>
      </div>
      <div class="field">
        <label class="field-label">Tipo de cliente</label>
        <select class="input error">
          <option value="">Selecione...</option>
        </select>
        <span class="error-msg">Campo obrigatório.</span>
      </div>
    </div>

    <div class="group-label">Textarea</div>
    <div class="field" style="max-width: 480px">
      <label class="field-label">Observações</label>
      <textarea class="input" rows="3" placeholder="Descreva a ocorrência..."></textarea>
      <span class="hint">Máximo 500 caracteres.</span>
    </div>

    <div class="group-label">UiToggle (switch)</div>
    <div class="toggle-row">
      <label class="toggle-label">
        <span class="switch on"></span>
        <span>Ativo</span>
      </label>
      <label class="toggle-label">
        <span class="switch off"></span>
        <span>Inativo</span>
      </label>
      <label class="toggle-label" style="opacity:.45">
        <span class="switch off"></span>
        <span>Desabilitado</span>
      </label>
    </div>

    <div class="group-label">UiCheckbox</div>
    <div class="check-col">
      <label class="check-label"><input type="checkbox" class="check" checked /> Receber notificações push</label>
      <label class="check-label"><input type="checkbox" class="check" /> Modo silencioso</label>
      <label class="check-label"><input type="checkbox" class="check" disabled /> Opção desabilitada</label>
    </div>
  </section>
</template>

<style scoped>
.srm-section { display: grid; gap: 1.5rem; font-family: var(--srm-font-sans, 'Inter', sans-serif); }
.srm-head small { color: var(--srm-color-primary, #0099ff); font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.srm-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 700; color: var(--srm-color-text, #fff); }
.srm-head p  { margin: 0; color: var(--srm-color-text-muted, #aaa); font-size: 0.88rem; }
.group-label { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--srm-color-text-muted, #aaa); }
.form-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 1rem; }
.field { display: flex; flex-direction: column; gap: 0.3rem; }
.field-label { font-size: 0.85rem; font-weight: 500; color: var(--srm-color-text-label, #cbd5e1); }
.req { color: #ef4444; margin-left: 1px; }
.input-wrap { position: relative; display: flex; align-items: center; }
.prefix { position: absolute; left: 10px; width: 16px; height: 16px; color: var(--srm-color-text-muted, #aaa); }
.prefix svg { width: 16px; height: 16px; }
.input {
  width: 100%; background: var(--srm-color-surface, #1e293b);
  border: 1px solid var(--srm-color-border, #333); border-radius: var(--srm-radius-md, 6px);
  padding: 0.5rem 0.75rem; font-size: 0.875rem; color: var(--srm-color-text, #fff);
  font-family: inherit; outline: none; transition: border-color var(--srm-transition, 0.2s);
}
.input.has-prefix { padding-left: 2.2rem; }
.input:hover:not(:disabled) { border-color: var(--srm-color-primary-border, rgba(0,153,255,0.3)); }
.input:focus { border-color: var(--srm-color-primary, #0099ff); box-shadow: 0 0 0 3px rgba(0,153,255,0.15); }
.input:disabled { opacity: 0.5; cursor: not-allowed; }
.input.error, .has-error .input { border-color: #ef4444; }
.input.error:focus { box-shadow: 0 0 0 3px rgba(239,68,68,0.15); }
.input::placeholder { color: var(--srm-color-text-muted, #aaa); }
select.input { cursor: pointer; }
textarea.input { resize: vertical; min-height: 80px; }
.hint { font-size: 0.75rem; color: var(--srm-color-text-muted, #aaa); }
.error-msg { font-size: 0.75rem; color: #ef4444; }

.toggle-row { display: flex; gap: 1.5rem; flex-wrap: wrap; }
.toggle-label { display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; color: var(--srm-color-text-label, #cbd5e1); cursor: pointer; }
.switch { position: relative; display: inline-block; width: 44px; height: 24px; border-radius: 12px; transition: background var(--srm-transition, 0.2s); flex-shrink: 0; }
.switch::after { content: ''; position: absolute; top: 2px; width: 20px; height: 20px; border-radius: 50%; background: #fff; transition: left var(--srm-transition, 0.2s); }
.switch.on  { background: var(--srm-color-primary, #0099ff); }
.switch.on::after  { left: 22px; }
.switch.off { background: var(--srm-color-border, #333); }
.switch.off::after { left: 2px; }

.check-col { display: flex; flex-direction: column; gap: 0.5rem; }
.check-label { display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; color: var(--srm-color-text-label, #cbd5e1); cursor: pointer; }
.check { width: 16px; height: 16px; accent-color: var(--srm-color-primary, #0099ff); cursor: pointer; }
</style>
