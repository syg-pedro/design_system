<template>
  <section class="ds-section">
    <div class="ds-section-head">
      <small>Entrada de dados</small>
      <h2>Inputs e controles</h2>
      <p>Altura 40px, radius 10px, foco com ring sutil. Checkbox e switch inclusos.</p>
    </div>

    <div class="sample-panel">
      <div class="form-grid">
        <div class="field"><label>Nome</label><input class="input" value="Cliente LogVerde" /></div>
        <div class="field"><label>E-mail</label><input class="input" type="email" value="contato@logverde.com.br" /></div>
        <div class="field"><label>CNPJ</label><input class="input" value="12.345.678/0001-90" /></div>
        <div class="field"><label>Telefone</label><input class="input" value="(11) 99999-9999" /></div>
        <div class="field">
          <label>Status</label>
          <select class="input">
            <option>Solicitada</option>
            <option>Prevista</option>
            <option>Retirada</option>
          </select>
        </div>
        <div class="field"><label>Desabilitado</label><input class="input" value="Somente leitura" disabled /></div>
      </div>

      <div class="field full"><label>Observações</label><textarea class="input textarea" placeholder="Informações adicionais…"></textarea></div>

      <div class="controls-row">
        <label class="check"><input type="checkbox" checked /><span class="box"></span><span>Aceitar termos</span></label>
        <label class="switch"><input type="checkbox" checked /><span class="track"></span><span>Notificações</span></label>
        <label class="switch"><input type="checkbox" /><span class="track"></span><span>Modo avançado</span></label>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ds-section { display: grid; gap: 1.25rem; }
.ds-section-head small { color: var(--ds-primary, #0094d9); font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.ds-section-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 400; letter-spacing: -0.015em; }
.ds-section-head p  { margin: 0; color: var(--ds-muted); font-size: 0.88rem; }

.sample-panel { padding: 1.5rem; background: var(--ds-bg); border: 1px solid var(--ds-line); border-radius: 12px; display: grid; gap: 1.25rem; }
.form-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
.field { display: grid; gap: 0.4rem; }
.field.full { grid-column: 1 / -1; }
.field label { font-size: 0.78rem; color: var(--ds-text-soft); font-weight: 500; }

.input {
  width: 100%; min-height: 40px; padding: 0 0.85rem;
  border-radius: 10px; border: 1px solid var(--ds-line);
  background: var(--ds-bg); color: var(--ds-text);
  font: inherit; font-size: 0.88rem; outline: none;
  transition: all 0.15s; appearance: none;
}
.input:hover { border-color: var(--ds-faint); }
.input:focus { border-color: var(--ds-primary); box-shadow: 0 0 0 3px color-mix(in srgb, var(--ds-primary) 22%, transparent); }
.input::placeholder { color: var(--ds-faint); }
.input:disabled { background: var(--ds-surface-2); color: var(--ds-muted); cursor: not-allowed; }
.textarea { padding: 0.65rem 0.85rem; min-height: 80px; resize: vertical; }

.controls-row { display: flex; gap: 1.5rem; flex-wrap: wrap; align-items: center; padding-top: 0.25rem; }

.check { display: inline-flex; align-items: center; gap: 0.55rem; cursor: pointer; font-size: 0.88rem; user-select: none; }
.check .box { width: 18px; height: 18px; border-radius: 6px; border: 1.5px solid var(--ds-faint); background: var(--ds-bg); display: grid; place-items: center; transition: all 0.15s; }
.check .box::after { content: "\2713"; font-size: 11px; font-weight: 700; color: transparent; }
.check input { display: none; }
.check input:checked + .box { background: var(--ds-primary); border-color: var(--ds-primary); }
.check input:checked + .box::after { color: #fff; }

.switch { display: inline-flex; align-items: center; gap: 0.6rem; cursor: pointer; font-size: 0.88rem; user-select: none; }
.switch .track { position: relative; width: 36px; height: 20px; border-radius: 999px; background: var(--ds-line); transition: background 0.15s; }
.switch .track::after { content: ""; position: absolute; top: 2px; left: 2px; width: 16px; height: 16px; border-radius: 50%; background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,0.2); transition: transform 0.15s; }
.switch input { display: none; }
.switch input:checked + .track { background: var(--ds-primary); }
.switch input:checked + .track::after { transform: translateX(16px); }

@media (max-width: 768px) { .form-grid { grid-template-columns: 1fr; } }
</style>
