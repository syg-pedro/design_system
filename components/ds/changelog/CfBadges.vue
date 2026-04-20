<template>
  <section class="ds-section">
    <div class="ds-head">
      <small>Componentes</small>
      <h2>Badges</h2>
      <p><code>AppBadge</code> — tons e variantes de tamanho.</p>
    </div>

    <div class="group-label">Tons</div>
    <div class="demo-row">
      <span v-for="b in badges" :key="b.tone" class="badge" :class="`badge--${b.tone}`">{{ b.label }}</span>
    </div>

    <div class="group-label">Status (com ícone circular)</div>
    <div class="demo-row">
      <span class="badge badge--success"><span class="dot"></span>Entregue</span>
      <span class="badge badge--warning"><span class="dot"></span>Em breve</span>
      <span class="badge badge--info"><span class="dot dot--ring"></span>Em desenvolvimento</span>
    </div>

    <div class="group-label">Tipos de ticket</div>
    <div class="demo-row">
      <span class="badge badge--primary">Novidade</span>
      <span class="badge badge--accent">Melhoria</span>
      <span class="badge badge--neutral">Correção</span>
    </div>

    <div class="token-grid">
      <div class="group-label" style="grid-column:1/-1">Tokens por tom</div>
      <div v-for="b in badgeTokens" :key="b.tone" class="token-card">
        <span class="badge" :class="`badge--${b.tone}`">{{ b.tone }}</span>
        <code>bg: {{ b.bg }}</code>
        <code>text: {{ b.text }}</code>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const badges = [
  { tone: 'neutral',  label: 'Neutral'  },
  { tone: 'primary',  label: 'Primary'  },
  { tone: 'success',  label: 'Success'  },
  { tone: 'warning',  label: 'Warning'  },
  { tone: 'info',     label: 'Info'     },
  { tone: 'accent',   label: 'Accent'   },
]
const badgeTokens = [
  { tone: 'neutral', bg: '--ff-color-secondary-bg', text: '--ff-color-primary-text' },
  { tone: 'primary', bg: '--ff-color-sub-primary',  text: '--ff-color-primary' },
  { tone: 'success', bg: '--ff-color-bg-success',   text: '--ff-color-success' },
  { tone: 'warning', bg: '--ff-color-bg-warning',   text: '#a06600' },
  { tone: 'info',    bg: '--ff-color-bg-info',      text: '--ff-color-info' },
  { tone: 'accent',  bg: '--ff-color-sub-alternate',text: '--ff-color-alternate' },
]
</script>

<style scoped>
.ds-section { display: grid; gap: 1.5rem; }
.ds-head small { color: #79b83e; font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.ds-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 600; }
.ds-head p  { margin: 0; color: var(--ff-color-secondary-text, #979ca3); font-size: 0.88rem; }
.group-label { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--ff-color-secondary-text); }
.demo-row { display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; }

.badge {
  display: inline-flex; align-items: center; gap: 0.35rem;
  padding: 0.2rem 0.7rem; border-radius: 999px;
  font-size: 0.75rem; font-weight: 600; font-family: "Source Sans 3","Segoe UI",sans-serif;
}
.badge--neutral { background: var(--ff-color-secondary-bg,#f8f8f8); color: var(--ff-color-primary-text,#3c3c3c); }
.badge--primary { background: var(--ff-color-sub-primary,#d8edff); color: var(--ff-color-primary,#0094d9); }
.badge--success { background: var(--ff-color-bg-success,#d7ffc5); color: var(--ff-color-success,#3dac00); }
.badge--warning { background: var(--ff-color-bg-warning,#ffeec7); color: #a06600; }
.badge--info    { background: var(--ff-color-bg-info,#ceedff); color: var(--ff-color-info,#1c4494); }
.badge--accent  { background: var(--ff-color-sub-alternate,#ffecdc); color: var(--ff-color-alternate,#f3943d); }

.dot { width: 7px; height: 7px; border-radius: 50%; background: currentColor; flex-shrink: 0; }
.dot--ring { background: transparent; border: 1.5px solid currentColor; }

.token-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px,1fr)); gap: 0.5rem; }
.token-card {
  display: flex; flex-direction: column; gap: 0.3rem; padding: 0.65rem 0.75rem;
  background: var(--ff-color-primary-bg,#fff); border: 1px solid var(--ff-color-accent-3,#e0e0e0);
  border-radius: 10px;
}
.token-card code { font-size: 0.62rem; color: var(--ff-color-secondary-text); }
</style>
