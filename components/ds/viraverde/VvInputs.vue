<template>
  <section class="vv-section">
    <div class="vv-head">
      <small>Componentes</small>
      <h2>Formulários</h2>
      <p>AppInput, AppSelect, AppTextarea, AppCheckbox e AppSwitch com estados de foco, erro e desabilitado.</p>
    </div>

    <div class="group-label">Text Inputs</div>
    <div class="form-grid">
      <div class="field">
        <label class="field-label">Nome completo <span class="req">*</span></label>
        <input class="input" type="text" placeholder="ex: João Silva" />
      </div>
      <div class="field">
        <label class="field-label">E-mail</label>
        <input class="input" type="email" placeholder="joao@empresa.com.br" />
        <p class="hint">Use o e-mail corporativo.</p>
      </div>
      <div class="field">
        <label class="field-label">CNPJ <span class="req">*</span></label>
        <input class="input input--error" type="text" value="12.345.678/0001" />
        <p class="error-msg">CNPJ inválido — verifique os dígitos.</p>
      </div>
      <div class="field">
        <label class="field-label">Empresa</label>
        <input class="input" type="text" value="Sygecom Ltda" disabled />
      </div>
    </div>

    <div class="group-label">Select</div>
    <div class="form-grid">
      <div class="field">
        <label class="field-label">Tipo de empresa <span class="req">*</span></label>
        <select class="input">
          <option value="">Selecione...</option>
          <option>Operador</option>
          <option>Demandante</option>
          <option selected>Associação</option>
        </select>
      </div>
      <div class="field">
        <label class="field-label">Status</label>
        <select class="input input--error">
          <option value="">Selecione um status</option>
        </select>
        <p class="error-msg">Campo obrigatório.</p>
      </div>
    </div>

    <div class="group-label">Textarea</div>
    <div class="field" style="max-width: 480px">
      <label class="field-label">Observações</label>
      <textarea class="input" rows="3" placeholder="Descreva as características do ativo..."></textarea>
      <p class="hint">Máximo 500 caracteres.</p>
    </div>

    <div class="group-label">Checkbox &amp; Switch</div>
    <div class="check-row">
      <label class="check-label"><input type="checkbox" class="check" checked /> Aceito os termos de uso</label>
      <label class="check-label"><input type="checkbox" class="check" /> Receber notificações por e-mail</label>
      <label class="check-label"><input type="checkbox" class="check" disabled /> Opção desabilitada</label>
    </div>
    <div class="switch-row">
      <label class="switch-label">
        <span class="switch on"></span>
        <span>Ativo</span>
      </label>
      <label class="switch-label">
        <span class="switch off"></span>
        <span>Inativo</span>
      </label>
      <label class="switch-label" style="opacity:.5">
        <span class="switch off"></span>
        <span>Desabilitado</span>
      </label>
    </div>
  </section>
</template>

<style scoped>
.vv-section { display: grid; gap: 1.5rem; font-family: var(--vv-font-sans, 'Inter', sans-serif); }
.vv-head small { color: var(--vv-color-primary, #16a34a); font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.vv-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 700; color: var(--vv-color-text, #111827); }
.vv-head p  { margin: 0; color: var(--vv-color-text-muted, #6b7280); font-size: 0.88rem; }
.group-label { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--vv-color-text-muted, #6b7280); }
.form-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1rem; }
.field { display: flex; flex-direction: column; gap: 0.25rem; }
.field-label { font-size: 0.875rem; font-weight: 500; color: var(--vv-color-text-soft, #374151); }
.req { color: #dc2626; margin-left: 1px; }
.input {
  width: 100%; border-radius: var(--vv-radius-lg, 10px); border: 1px solid var(--vv-color-line-soft, #d1d5db);
  padding: 0.5rem 0.75rem; font-size: 0.875rem; color: var(--vv-color-text, #111827);
  font-family: inherit; transition: border-color var(--vv-transition, 150ms), box-shadow var(--vv-transition, 150ms);
  background: var(--vv-color-surface, #fff); outline: none;
}
.input:hover:not(:disabled) { border-color: #9ca3af; }
.input:focus { border-color: transparent; box-shadow: 0 0 0 2px var(--vv-color-primary-ring, #86efac); }
.input:disabled { background: var(--vv-color-surface-2, #f3f4f6); color: var(--vv-color-text-muted, #6b7280); cursor: not-allowed; }
.input--error { border-color: #f87171; }
.input--error:focus { box-shadow: 0 0 0 2px #fca5a5; }
.hint { font-size: 0.75rem; color: var(--vv-color-text-muted, #6b7280); margin: 0; }
.error-msg { font-size: 0.75rem; color: #dc2626; margin: 0; }

.check-row { display: flex; flex-direction: column; gap: 0.5rem; }
.check-label { display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; color: var(--vv-color-text, #111827); cursor: pointer; }
.check { width: 16px; height: 16px; accent-color: var(--vv-color-primary, #16a34a); cursor: pointer; }

.switch-row { display: flex; gap: 1.5rem; flex-wrap: wrap; }
.switch-label { display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; color: var(--vv-color-text, #111827); cursor: pointer; }
.switch { display: inline-block; width: 36px; height: 20px; border-radius: 10px; position: relative; transition: background var(--vv-transition, 150ms); flex-shrink: 0; }
.switch::after { content: ''; position: absolute; top: 2px; width: 16px; height: 16px; border-radius: 50%; background: #fff; transition: left var(--vv-transition, 150ms); box-shadow: 0 1px 2px rgba(0,0,0,0.2); }
.switch.on  { background: var(--vv-color-primary, #16a34a); }
.switch.on::after  { left: 18px; }
.switch.off { background: #d1d5db; }
.switch.off::after { left: 2px; }
</style>
