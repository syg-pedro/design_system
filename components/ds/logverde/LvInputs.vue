<template>
  <section class="lv-section">
    <div class="lv-head">
      <small>Componentes</small>
      <h2>BaseTextInput, BaseSelect, BaseSwitch, BaseCheckbox</h2>
      <p>Campos PrimeVue com máscara automática por label (CPF, CNPJ, telefone, CEP). <code>BaseSwitch</code> usa <code>ToggleSwitch</code> PrimeVue.</p>
    </div>

    <div class="group-label">BaseTextInput — tipos e máscaras</div>
    <div class="form-grid">
      <label class="field">
        <span class="field-label">Nome completo</span>
        <input class="input" type="text" placeholder="Ex: João Silva" />
      </label>
      <label class="field">
        <span class="field-label">E-mail</span>
        <input class="input" type="email" placeholder="joao@logverde.com.br" />
        <small class="hint">Use o e-mail corporativo.</small>
      </label>
      <label class="field">
        <span class="field-label">CPF/CNPJ</span>
        <input class="input" type="text" value="12.345.678/0001-99" />
        <small class="hint">Máscara detectada automaticamente.</small>
      </label>
      <label class="field">
        <span class="field-label">Telefone / WhatsApp</span>
        <input class="input" type="text" placeholder="(00) 00000-0000" />
      </label>
      <label class="field">
        <span class="field-label">CEP</span>
        <input class="input" type="text" placeholder="00000-000" />
      </label>
      <label class="field error">
        <span class="field-label">UF <span class="req">*</span></span>
        <input class="input" type="text" value="São Paulo" maxlength="2" />
        <small class="error-msg">Informe apenas a sigla (ex: SP).</small>
      </label>
    </div>

    <div class="group-label">BaseSelect</div>
    <div class="form-grid">
      <label class="field">
        <span class="field-label">Tipo de documento <span class="req">*</span></span>
        <select class="input">
          <option value="">Selecione...</option>
          <option selected>Nota Fiscal</option>
          <option>Coleta</option>
          <option>Carga</option>
        </select>
      </label>
      <label class="field">
        <span class="field-label">Status</span>
        <select class="input">
          <option>Pago</option>
          <option selected>Pendente</option>
          <option>Cancelado</option>
        </select>
      </label>
    </div>

    <div class="group-label">BaseTextarea</div>
    <label class="field" style="max-width: 480px">
      <span class="field-label">Observações</span>
      <textarea class="input" rows="3" placeholder="Observações adicionais sobre a coleta..."></textarea>
      <small class="hint">Máximo 500 caracteres.</small>
    </label>

    <div class="group-label">BaseSwitch (ToggleSwitch PrimeVue)</div>
    <div class="switch-row">
      <label class="switch-label"><span class="switch on"></span><span>Ativo</span></label>
      <label class="switch-label"><span class="switch off"></span><span>Inativo</span></label>
      <label class="switch-label" style="opacity:.45"><span class="switch off"></span><span>Desabilitado</span></label>
    </div>

    <div class="group-label">BaseCheckbox</div>
    <div class="check-col">
      <label class="check-label"><input type="checkbox" class="check" checked /> Aceitar termos de uso</label>
      <label class="check-label"><input type="checkbox" class="check" /> Receber alertas por e-mail</label>
      <label class="check-label"><input type="checkbox" class="check" disabled /> Opção desabilitada</label>
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
.form-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem; }
.field { display: flex; flex-direction: column; gap: var(--lv-field-gap, 0.4rem); }
.field-label { font-size: 0.85rem; font-weight: 500; color: var(--lv-text-soft, #334155); }
.req { color: var(--lv-error, #ff1414); margin-left: 1px; }
.input {
  border: 1px solid var(--lv-line, #e5e9f0); border-radius: var(--lv-radius-sm, 8px);
  padding: 0.5rem 0.75rem; font-size: 0.875rem; color: var(--lv-text, #0f172a);
  font-family: inherit; background: var(--lv-bg, #fff); outline: none; width: 100%;
  transition: border-color var(--lv-transition-fast, 0.15s), box-shadow var(--lv-transition-fast, 0.15s);
}
.input:hover:not(:disabled) { border-color: var(--lv-faint, #94a3b8); }
.input:focus { border-color: var(--lv-primary, #0094d9); box-shadow: var(--lv-ring, 0 0 0 3px rgba(0,148,217,0.22)); }
.input:disabled { background: var(--lv-surface-2, #f1f4f9); color: var(--lv-muted, #64748b); cursor: not-allowed; }
.input::placeholder { color: var(--lv-faint, #94a3b8); }
.field.error .input { border-color: var(--lv-error, #ff1414); }
.field.error .input:focus { box-shadow: 0 0 0 3px color-mix(in srgb, var(--lv-error, #ff1414) 22%, transparent); }
select.input { cursor: pointer; }
textarea.input { resize: vertical; min-height: 80px; }
.hint { font-size: 0.75rem; color: var(--lv-muted, #64748b); }
.error-msg { font-size: 0.75rem; color: var(--lv-error, #ff1414); }

.switch-row { display: flex; gap: 1.5rem; flex-wrap: wrap; }
.switch-label { display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; color: var(--lv-text-soft, #334155); cursor: pointer; }
.switch { position: relative; display: inline-block; width: 42px; height: 22px; border-radius: 11px; transition: background var(--lv-transition-fast, 0.15s); flex-shrink: 0; }
.switch::after { content: ''; position: absolute; top: 2px; width: 18px; height: 18px; border-radius: 50%; background: #fff; transition: left var(--lv-transition-fast, 0.15s); box-shadow: 0 1px 3px rgba(15,23,42,0.12); }
.switch.on  { background: var(--lv-primary, #0094d9); }
.switch.on::after  { left: 22px; }
.switch.off { background: var(--lv-line, #e5e9f0); }
.switch.off::after { left: 2px; }

.check-col { display: flex; flex-direction: column; gap: 0.5rem; }
.check-label { display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; color: var(--lv-text-soft, #334155); cursor: pointer; }
.check { width: 16px; height: 16px; accent-color: var(--lv-primary, #0094d9); cursor: pointer; }
</style>
