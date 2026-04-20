<template>
  <section class="pc-section">
    <div class="pc-head">
      <small>Padrões</small>
      <h2>Tabs</h2>
      <p>Padrão de abas extraído de <code>TributacaoForm</code> — border-bottom underline com indicador de erro.</p>
    </div>

    <div class="group-label">Tabs de operação (TributacaoForm)</div>
    <div class="tabs-wrap">
      <div class="tabs-bar">
        <button
          v-for="tab in tabs"
          :key="tab.key"
          class="tab-btn"
          :class="{ 'tab-btn--active': activeTab === tab.key, 'tab-btn--error': tab.hasError }"
          @click="activeTab = tab.key"
        >
          {{ tab.label }}
          <span v-if="tab.hasError" class="error-dot"></span>
        </button>
      </div>
      <div class="tab-content">
        <div class="tab-pane">
          <p class="tab-note">Conteúdo da aba <strong>{{ tabs.find(t => t.key === activeTab)?.label }}</strong> — campos de tributação por operação.</p>
          <div class="mock-fields">
            <div class="mock-field" v-for="f in 4" :key="f">
              <div class="mock-label"></div>
              <div class="mock-input"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="group-label">Anatomia</div>
    <div class="anatomy-grid">
      <div class="anatomy-item" v-for="a in anatomy" :key="a.part">
        <strong>{{ a.part }}</strong>
        <span>{{ a.desc }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('entradas')
const tabs = [
  { key: 'entradas',         label: 'Entradas',     hasError: false },
  { key: 'saidas',           label: 'Saídas',       hasError: false },
  { key: 'devolucoesEntrada',label: 'Dev. Entrada', hasError: true  },
  { key: 'devolucoesSaida',  label: 'Dev. Saída',   hasError: false },
]
const anatomy = [
  { part: '.tabs-bar',       desc: 'border-b-1px que separa abas do conteúdo' },
  { part: '.tab-btn',        desc: 'border-bottom-2px transparent; hover altera cor de texto' },
  { part: '.tab-btn--active',desc: 'border-bottom-2px blue-600, text blue-600' },
  { part: '.error-dot',      desc: 'ponto vermelho absoluto no canto da aba com erro de validação' },
]
</script>

<style scoped>
.pc-section { display: grid; gap: 1.5rem; font-family: var(--pc-font-sans, 'Inter', sans-serif); }
.pc-head small { color: var(--pc-color-primary, #2563eb); font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.pc-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 700; color: var(--pc-color-text, #0f172a); }
.pc-head p  { margin: 0; color: var(--pc-color-text-muted, #64748b); font-size: 0.88rem; }
.group-label { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--pc-color-text-muted); }

.tabs-wrap { background: var(--pc-color-surface, #fff); border: 1px solid var(--pc-color-line, #e2e8f0); border-radius: var(--pc-radius-lg, 12px); overflow: hidden; }
.tabs-bar { display: flex; gap: 0; border-bottom: 1px solid var(--pc-color-line, #e2e8f0); overflow-x: auto; }
.tab-btn {
  position: relative; padding: 0.6rem 1rem;
  border: none; border-bottom: 2px solid transparent; margin-bottom: -1px;
  background: transparent; font-size: 0.875rem; font-weight: 500; font-family: inherit;
  color: var(--pc-color-text-muted, #64748b); cursor: pointer;
  transition: color 0.12s, border-color 0.12s; white-space: nowrap;
}
.tab-btn:hover { color: var(--pc-color-text, #0f172a); }
.tab-btn--active { color: var(--pc-color-primary, #2563eb); border-bottom-color: var(--pc-color-primary, #2563eb); }
.error-dot { position: absolute; top: 6px; right: 6px; width: 7px; height: 7px; border-radius: 50%; background: #dc2626; }

.tab-content { padding: 1.25rem; }
.tab-note { font-size: 0.875rem; color: var(--pc-color-text-muted); margin: 0 0 1rem; }
.tab-note strong { color: var(--pc-color-text); }

.mock-fields { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 0.75rem; }
.mock-field { display: flex; flex-direction: column; gap: 0.3rem; }
.mock-label { height: 12px; background: var(--pc-color-surface-2, #f1f5f9); border-radius: 4px; width: 60%; }
.mock-input { height: 36px; background: var(--pc-color-surface-2, #f1f5f9); border: 1px solid var(--pc-color-line, #e2e8f0); border-radius: var(--pc-radius-md, 8px); }

.anatomy-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(230px,1fr)); gap: 0.5rem; }
.anatomy-item { display: flex; flex-direction: column; gap: 0.2rem; padding: 0.65rem 0.75rem; background: var(--pc-color-surface, #fff); border: 1px solid var(--pc-color-line, #e2e8f0); border-radius: var(--pc-radius-md, 8px); }
.anatomy-item strong { font-size: 0.78rem; font-family: monospace; color: var(--pc-color-primary, #2563eb); }
.anatomy-item span { font-size: 0.75rem; color: var(--pc-color-text-muted); }
</style>
