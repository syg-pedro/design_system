<template>
  <section class="ds-section">
    <div class="ds-head">
      <small>Padrões</small>
      <h2>ProductCard</h2>
      <p>Cartão de produto com logo, nome e últimas entregas.</p>
    </div>

    <div class="group-label">Grade de produtos</div>
    <div class="product-grid">
      <div class="product-card" v-for="p in products" :key="p.id">
        <div class="card-header">
          <div class="card-logo" :style="`background:${p.color}15`">
            <span class="logo-initial" :style="`color:${p.color}`">{{ p.initial }}</span>
          </div>
          <div>
            <div class="card-name">{{ p.name }}</div>
            <div class="card-alias">{{ p.alias }}</div>
          </div>
        </div>
        <div class="card-deliveries">
          <div class="deliveries-label">Últimas entregas</div>
          <div class="delivery-item" v-for="d in p.deliveries" :key="d">
            <span class="delivery-dot"></span>
            <span>{{ d }}</span>
          </div>
        </div>
        <div class="card-footer">
          <span class="badge badge--success">{{ p.count }} entregues</span>
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
const products = [
  {
    id: 'changelog',
    initial: 'C',
    name: 'Changelog',
    alias: 'changelog',
    color: '#79b83e',
    deliveries: ['Filtros por chips', 'Modo escuro', 'Sync Acelerato'],
    count: 12,
  },
  {
    id: 'srm',
    initial: 'S',
    name: 'SRM',
    alias: 'srm',
    color: '#7c3aed',
    deliveries: ['Dashboard redesign', 'Exportação PDF', 'Notificações push'],
    count: 8,
  },
  {
    id: 'logverde',
    initial: 'L',
    name: 'LogVerde',
    alias: 'logverde',
    color: '#0094d9',
    deliveries: ['Rastreamento v2', 'API pública', 'Integração ERP'],
    count: 15,
  },
]

const anatomy = [
  { part: '.card-header', desc: 'Logo inicial colorido + nome + alias' },
  { part: '.card-deliveries', desc: 'Lista das últimas entregas com bullet' },
  { part: '.card-footer', desc: 'Badge de contagem de entregas' },
  { part: 'NuxtLink', desc: 'O card inteiro é um link para o detalhe' },
]
</script>

<style scoped>
.ds-section { display: grid; gap: 1.5rem; }
.ds-head small { color: #79b83e; font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.ds-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 600; }
.ds-head p  { margin: 0; color: var(--ff-color-secondary-text, #979ca3); font-size: 0.88rem; }
.group-label { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--ff-color-secondary-text); }

.product-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px,1fr)); gap: 0.75rem; }
.product-card {
  display: flex; flex-direction: column; gap: 0.75rem;
  padding: 1rem; background: var(--ff-color-primary-bg,#fff);
  border: 1px solid var(--ff-color-accent-3,#e0e0e0); border-radius: 14px;
  cursor: pointer; transition: box-shadow 0.15s;
}
.product-card:hover { box-shadow: var(--ff-shadow-md,0 3px 6px rgba(0,0,0,0.1)); }
.card-header { display: flex; align-items: center; gap: 0.65rem; }
.card-logo { width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.logo-initial { font-size: 1.1rem; font-weight: 700; }
.card-name { font-size: 0.9rem; font-weight: 600; color: var(--ff-color-primary-text,#3c3c3c); }
.card-alias { font-size: 0.72rem; color: var(--ff-color-secondary-text); }

.card-deliveries { flex: 1; display: flex; flex-direction: column; gap: 0.3rem; }
.deliveries-label { font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--ff-color-secondary-text); margin-bottom: 0.15rem; }
.delivery-item { display: flex; align-items: center; gap: 0.4rem; font-size: 0.78rem; color: var(--ff-color-primary-text); }
.delivery-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--ff-color-tertiary,#79b83e); flex-shrink: 0; }

.card-footer { padding-top: 0.25rem; }
.badge { display: inline-flex; padding: 0.18rem 0.6rem; border-radius: 999px; font-size: 0.72rem; font-weight: 600; }
.badge--success { background: var(--ff-color-bg-success,#d7ffc5); color: var(--ff-color-success,#3dac00); }

.anatomy-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px,1fr)); gap: 0.5rem; }
.anatomy-item { display: flex; flex-direction: column; gap: 0.2rem; padding: 0.65rem 0.75rem; background: var(--ff-color-primary-bg,#fff); border: 1px solid var(--ff-color-accent-3,#e0e0e0); border-radius: 10px; }
.anatomy-item strong { font-size: 0.78rem; font-family: monospace; color: var(--ff-color-primary,#0094d9); }
.anatomy-item span { font-size: 0.75rem; color: var(--ff-color-secondary-text); }
</style>
