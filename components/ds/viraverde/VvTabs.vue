<template>
  <section class="vv-section">
    <div class="vv-head">
      <small>Componentes</small>
      <h2>Tabs</h2>
      <p>AppTabs com três variantes — underline (padrão), pills e boxed.</p>
    </div>

    <div class="group-label">Underline (padrão)</div>
    <div class="tab-demo">
      <div class="tabs tabs--underline">
        <button v-for="t in tabs1" :key="t.key"
          :class="['tab-btn', 'tab-btn--underline', active1 === t.key && 'active']"
          @click="active1 = t.key">
          {{ t.label }}
          <span v-if="t.badge" class="tab-badge">{{ t.badge }}</span>
        </button>
      </div>
      <div class="tab-content">
        <p v-if="active1 === 'home'">Resumo das atividades recentes da empresa no marketplace.</p>
        <p v-else-if="active1 === 'marketplace'">Livros ofertados: 12 ativos, 3 em negociação.</p>
        <p v-else-if="active1 === 'financeiro'">Saldo disponível: R$ 48.200,00 — próximo vencimento: 30/05.</p>
        <p v-else>Relatórios gerados: 7 este mês.</p>
      </div>
    </div>

    <div class="group-label">Pills</div>
    <div class="tab-demo">
      <div class="tabs tabs--pills">
        <button v-for="t in tabs2" :key="t.key"
          :class="['tab-btn', 'tab-btn--pills', active2 === t.key && 'active']"
          :disabled="t.disabled"
          @click="active2 = t.key">
          {{ t.label }}
        </button>
      </div>
    </div>

    <div class="group-label">Boxed</div>
    <div class="tab-demo">
      <div class="tabs tabs--boxed">
        <button v-for="t in tabs3" :key="t.key"
          :class="['tab-btn', 'tab-btn--boxed', active3 === t.key && 'active']"
          @click="active3 = t.key">
          {{ t.label }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const tabs1 = [
  { key: 'home',        label: 'Home' },
  { key: 'marketplace', label: 'Marketplace', badge: 3 },
  { key: 'financeiro',  label: 'Financeiro' },
  { key: 'relatorios',  label: 'Relatórios' },
]
const tabs2 = [
  { key: 'todos',    label: 'Todos' },
  { key: 'ativos',   label: 'Ativos' },
  { key: 'inativos', label: 'Inativos' },
  { key: 'excluidos', label: 'Excluídos', disabled: true },
]
const tabs3 = [
  { key: 'semana',  label: 'Esta semana' },
  { key: 'mes',     label: 'Este mês' },
  { key: 'ano',     label: 'Este ano' },
]
const active1 = ref('home')
const active2 = ref('todos')
const active3 = ref('mes')
</script>

<style scoped>
.vv-section { display: grid; gap: 1.5rem; font-family: var(--vv-font-sans, 'Inter', sans-serif); }
.vv-head small { color: var(--vv-color-primary, #16a34a); font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.vv-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 700; color: var(--vv-color-text, #111827); }
.vv-head p  { margin: 0; color: var(--vv-color-text-muted, #6b7280); font-size: 0.88rem; }
.group-label { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--vv-color-text-muted, #6b7280); }
.tab-demo { display: grid; gap: 0; }

/* Underline */
.tabs--underline { display: flex; border-bottom: 1px solid var(--vv-color-line, #e5e7eb); gap: 0; }
.tab-btn--underline {
  display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.625rem 1rem;
  font-size: 0.875rem; font-family: inherit; background: none; border: none; border-bottom: 2px solid transparent;
  color: var(--vv-color-text-muted, #6b7280); cursor: pointer; transition: all 0.15s; margin-bottom: -1px;
}
.tab-btn--underline:hover { color: var(--vv-color-text-soft, #374151); }
.tab-btn--underline.active { border-bottom-color: var(--vv-color-primary, #16a34a); color: var(--vv-color-primary, #16a34a); font-weight: 500; }

/* Pills */
.tabs--pills { display: flex; gap: 0.25rem; }
.tab-btn--pills {
  padding: 0.4rem 0.875rem; font-size: 0.875rem; font-family: inherit;
  background: none; border: none; border-radius: 9999px; color: var(--vv-color-text-muted, #6b7280);
  cursor: pointer; transition: all 0.15s;
}
.tab-btn--pills:hover:not(:disabled) { color: var(--vv-color-text-soft, #374151); background: #f3f4f6; }
.tab-btn--pills.active { background: var(--vv-color-primary-bg, #f0fdf4); color: var(--vv-color-primary-hover, #15803d); font-weight: 500; }
.tab-btn--pills:disabled { opacity: 0.4; cursor: not-allowed; }

/* Boxed */
.tabs--boxed { display: flex; gap: 0.25rem; background: #f3f4f6; padding: 0.25rem; border-radius: var(--vv-radius-lg, 10px); width: fit-content; }
.tab-btn--boxed {
  padding: 0.4rem 0.875rem; font-size: 0.875rem; font-family: inherit;
  background: none; border: none; border-radius: var(--vv-radius-md, 8px);
  color: var(--vv-color-text-muted, #6b7280); cursor: pointer; transition: all 0.15s;
}
.tab-btn--boxed:hover { color: var(--vv-color-text-soft, #374151); }
.tab-btn--boxed.active { background: var(--vv-color-surface, #fff); color: var(--vv-color-text, #111827); font-weight: 500; box-shadow: var(--vv-shadow-sm, 0 1px 2px rgba(0,0,0,.05)); border: 1px solid var(--vv-color-line, #e5e7eb); }

.tab-badge { background: #e5e7eb; color: #374151; font-size: 0.7rem; border-radius: 9999px; padding: 0.05rem 0.4rem; font-weight: 600; }
.tab-content { padding: 1rem; font-size: 0.875rem; color: var(--vv-color-text-soft, #374151); border: 1px solid var(--vv-color-line, #e5e7eb); border-top: none; border-radius: 0 0 var(--vv-radius-md, 8px) var(--vv-radius-md, 8px); }
.tab-content p { margin: 0; }
</style>
