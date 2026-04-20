<template>
  <section class="pc-section">
    <div class="pc-head">
      <small>Componentes</small>
      <h2>Inputs &amp; Formulários</h2>
      <p>Padrão de campos extraído de <code>TributacaoForm</code>, <code>TributacoesFilters</code> e <code>LoginPage</code>.</p>
    </div>

    <div class="group-label">Text input</div>
    <div class="inputs-grid">
      <div class="field">
        <label class="field-label">E-mail</label>
        <input type="email" class="input" placeholder="seu@email.com" />
      </div>
      <div class="field">
        <label class="field-label">Descrição do Tributo *</label>
        <input type="text" class="input" placeholder="Digite a descrição..." />
      </div>
      <div class="field">
        <label class="field-label">Com busca</label>
        <div class="input-icon-wrap">
          <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          <input type="text" class="input input--with-icon" placeholder="Busca parcial..." />
        </div>
      </div>
      <div class="field">
        <label class="field-label">Desabilitado</label>
        <input type="text" class="input" placeholder="Carregando..." disabled />
      </div>
    </div>

    <div class="group-label">Select / Dropdown</div>
    <div class="inputs-grid">
      <div class="field">
        <label class="field-label">UF</label>
        <select class="input">
          <option value="">Todas</option>
          <option>SP</option><option>RJ</option><option>MG</option>
        </select>
      </div>
      <div class="field">
        <label class="field-label">Modalidade</label>
        <select class="input">
          <option value="">Todas</option>
          <option>Tributado</option><option>Isento</option>
        </select>
      </div>
    </div>

    <div class="group-label">Senha com toggle</div>
    <div class="inputs-grid">
      <div class="field">
        <label class="field-label">Senha</label>
        <div class="input-icon-wrap input-icon-wrap--right">
          <input :type="showPwd ? 'text' : 'password'" class="input input--with-icon-right" placeholder="••••••••" />
          <button type="button" class="input-right-btn" @click="showPwd = !showPwd">
            <svg v-if="showPwd" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
            <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
        </div>
      </div>
    </div>

    <div class="group-label">Mensagens de erro</div>
    <div class="inputs-grid">
      <div class="field">
        <label class="field-label">E-mail</label>
        <input type="email" class="input input--error" value="invalido" />
        <p class="field-error">Email inválido</p>
      </div>
      <div class="field">
        <label class="field-label">Modalidade *</label>
        <select class="input input--error">
          <option value="">Selecione...</option>
        </select>
        <p class="field-error">Modalidade é obrigatória</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const showPwd = ref(false)
</script>

<style scoped>
.pc-section { display: grid; gap: 1.5rem; font-family: var(--pc-font-sans, 'Inter', sans-serif); }
.pc-head small { color: var(--pc-color-primary, #2563eb); font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.pc-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 700; color: var(--pc-color-text, #0f172a); }
.pc-head p  { margin: 0; color: var(--pc-color-text-muted, #64748b); font-size: 0.88rem; }
.group-label { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--pc-color-text-muted); }

.inputs-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 0.75rem; }
.field { display: flex; flex-direction: column; gap: 0.25rem; }
.field-label { font-size: 0.875rem; font-weight: 500; color: var(--pc-color-text-soft, #334155); }
.field-error  { font-size: 0.75rem; color: #dc2626; margin: 0; }

.input {
  width: 100%; padding: 0.55rem 0.75rem; box-sizing: border-box;
  border: 1.5px solid var(--pc-color-line-soft, #cbd5e1);
  border-radius: var(--pc-radius-md, 8px);
  background: var(--pc-color-surface, #fff);
  color: var(--pc-color-text, #0f172a);
  font-size: 0.875rem; font-family: inherit; outline: none;
  transition: border-color 0.15s, box-shadow 0.15s;
}
.input:focus { border-color: var(--pc-color-primary, #2563eb); box-shadow: 0 0 0 3px rgba(37,99,235,0.12); }
.input:disabled { opacity: 0.6; cursor: not-allowed; background: var(--pc-color-surface-2, #f1f5f9); }
.input--error { border-color: #dc2626; }
.input--error:focus { box-shadow: 0 0 0 3px rgba(220,38,38,0.12); }

.input-icon-wrap { position: relative; }
.input-icon { position: absolute; left: 0.7rem; top: 50%; transform: translateY(-50%); width: 16px; height: 16px; color: var(--pc-color-text-faint, #94a3b8); pointer-events: none; }
.input--with-icon { padding-left: 2.25rem; }

.input-icon-wrap--right { position: relative; }
.input--with-icon-right { padding-right: 2.75rem; }
.input-right-btn { position: absolute; right: 0.6rem; top: 50%; transform: translateY(-50%); background: none; border: none; cursor: pointer; color: var(--pc-color-text-faint, #94a3b8); display: flex; padding: 0; }
.input-right-btn:hover { color: var(--pc-color-text-soft, #334155); }
.input-right-btn svg { width: 18px; height: 18px; }
</style>
