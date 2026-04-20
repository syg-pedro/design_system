<template>
  <section class="ds-section">
    <div class="ds-head">
      <small>Componentes</small>
      <h2>Inputs</h2>
      <p><code>AppTextInput</code>, <code>AppDropdown</code> e chips de busca.</p>
    </div>

    <div class="group-label">AppTextInput</div>
    <div class="inputs-grid">
      <div class="field">
        <label class="field-label">Busca</label>
        <div class="input-wrap">
          <svg class="input-icon" viewBox="0 0 20 20"><circle cx="9" cy="9" r="6" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M14 14l3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          <input type="text" class="text-input" placeholder="Pesquisar..." v-model="search" />
        </div>
      </div>
      <div class="field">
        <label class="field-label">Sem ícone</label>
        <div class="input-wrap">
          <input type="text" class="text-input" placeholder="Digite aqui..." />
        </div>
      </div>
      <div class="field">
        <label class="field-label">Desabilitado</label>
        <div class="input-wrap">
          <input type="text" class="text-input" placeholder="Desabilitado" disabled />
        </div>
      </div>
    </div>

    <div class="group-label">AppDropdown</div>
    <div class="inputs-grid">
      <div class="field">
        <label class="field-label">Trimestre</label>
        <div class="select-wrap">
          <select class="dropdown">
            <option value="">Todos</option>
            <option>Q1</option><option>Q2</option><option>Q3</option><option>Q4</option>
          </select>
          <svg class="select-chevron" viewBox="0 0 20 20"><path d="M5 7.5l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>
        </div>
      </div>
      <div class="field">
        <label class="field-label">Ano</label>
        <div class="select-wrap">
          <select class="dropdown">
            <option>2024</option><option>2025</option><option>2026</option>
          </select>
          <svg class="select-chevron" viewBox="0 0 20 20"><path d="M5 7.5l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>
        </div>
      </div>
    </div>

    <div class="group-label">AppChoiceChips</div>
    <div class="chips-row">
      <button
        v-for="c in chips"
        :key="c.value"
        class="chip"
        :class="{ active: activeChip === c.value }"
        :style="activeChip === c.value ? `--chip-color:${c.color}` : ''"
        @click="activeChip = c.value"
      >{{ c.label }}</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const search = ref('')
const activeChip = ref('all')
const chips = [
  { label: 'Todos',        value: 'all',  color: '#0094d9' },
  { label: 'Novidades',    value: 'new',  color: '#79b83e' },
  { label: 'Melhorias',    value: 'imp',  color: '#f3943d' },
  { label: 'Correções',    value: 'fix',  color: '#ff1414' },
  { label: 'Em breve',     value: 'soon', color: '#ffb11d' },
  { label: 'Entregue',     value: 'done', color: '#3dac00' },
]
</script>

<style scoped>
.ds-section { display: grid; gap: 1.5rem; }
.ds-head small { color: #79b83e; font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.ds-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 600; }
.ds-head p  { margin: 0; color: var(--ff-color-secondary-text, #979ca3); font-size: 0.88rem; }
.group-label { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--ff-color-secondary-text); }

.inputs-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px,1fr)); gap: 0.75rem; }
.field { display: flex; flex-direction: column; gap: 0.3rem; }
.field-label { font-size: 0.78rem; font-weight: 600; color: var(--ff-color-primary-text,#3c3c3c); }

.input-wrap { position: relative; }
.input-icon {
  position: absolute; left: 0.65rem; top: 50%; transform: translateY(-50%);
  width: 16px; height: 16px; color: var(--ff-color-secondary-text,#979ca3); pointer-events: none;
}
.text-input {
  width: 100%; padding: 0.5rem 0.75rem 0.5rem 2.2rem; box-sizing: border-box;
  border: 1.5px solid var(--ff-color-accent-3,#e0e0e0); border-radius: var(--ff-radius-sm,8px);
  background: var(--ff-color-primary-bg,#fff); color: var(--ff-color-primary-text,#3c3c3c);
  font-size: 0.875rem; font-family: inherit; outline: none;
  transition: border-color 0.15s;
}
.input-wrap:not(:has(.input-icon)) .text-input { padding-left: 0.75rem; }
.text-input:focus { border-color: var(--ff-color-primary,#0094d9); }
.text-input:disabled { opacity: 0.5; cursor: not-allowed; }

.select-wrap { position: relative; }
.dropdown {
  width: 100%; padding: 0.5rem 2.2rem 0.5rem 0.75rem; box-sizing: border-box;
  border: 1.5px solid var(--ff-color-accent-3,#e0e0e0); border-radius: var(--ff-radius-sm,8px);
  background: var(--ff-color-primary-bg,#fff); color: var(--ff-color-primary-text,#3c3c3c);
  font-size: 0.875rem; font-family: inherit; outline: none; appearance: none; cursor: pointer;
}
.select-chevron {
  position: absolute; right: 0.65rem; top: 50%; transform: translateY(-50%);
  width: 16px; height: 16px; color: var(--ff-color-secondary-text,#979ca3); pointer-events: none;
}

.chips-row { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.chip {
  padding: 0.3rem 0.9rem; border-radius: 999px;
  background: var(--ff-color-secondary-bg,#f8f8f8);
  border: 1.5px solid var(--ff-color-accent-3,#e0e0e0);
  color: var(--ff-color-primary-text,#3c3c3c);
  font-size: 0.8rem; font-weight: 500; font-family: inherit; cursor: pointer;
  transition: background 0.12s, border-color 0.12s, color 0.12s;
}
.chip.active {
  background: color-mix(in srgb, var(--chip-color,#0094d9) 12%, transparent);
  border-color: var(--chip-color,#0094d9);
  color: var(--chip-color,#0094d9);
}
</style>
