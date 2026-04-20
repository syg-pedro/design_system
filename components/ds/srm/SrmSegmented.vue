<template>
  <section class="srm-section">
    <div class="srm-head">
      <small>Componentes</small>
      <h2>UiSegmentedControl</h2>
      <p>Indicador deslizante animado (<code>transition: all 300ms ease-out</code>) com fundo primário. 4 tamanhos e modo full-width.</p>
    </div>

    <div class="group-label">Tamanho padrão (md)</div>
    <div class="seg-wrap">
      <div class="seg" ref="seg1">
        <div class="seg-indicator" :style="indicator1"></div>
        <button v-for="(opt, i) in opts1" :key="opt" :ref="(el) => setRef1(el, i)"
          :class="['seg-btn', active1 === opt && 'active']" @click="select1(opt, i)">
          {{ opt }}
        </button>
      </div>
    </div>

    <div class="group-label">Com ícones + full-width</div>
    <div class="seg-wrap">
      <div class="seg seg--full" ref="seg2">
        <div class="seg-indicator" :style="indicator2"></div>
        <button v-for="(opt, i) in opts2" :key="opt.value" :ref="(el) => setRef2(el, i)"
          :class="['seg-btn', active2 === opt.value && 'active']" @click="select2(opt.value, i)">
          <svg class="seg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" :d="opt.icon" />
          </svg>
          {{ opt.label }}
        </button>
      </div>
    </div>

    <div class="group-label">Tamanhos</div>
    <div class="sizes-col">
      <div class="seg seg--xs">
        <div class="seg-indicator" style="width: 42px; left: 4px; height: calc(100% - 8px); top: 4px; border-radius: 6px;"></div>
        <button v-for="opt in ['XS', 'Opção B', 'Opção C']" :key="opt" :class="['seg-btn', 'seg-btn--xs', opt === 'XS' && 'active']">{{ opt }}</button>
      </div>
      <div class="seg seg--sm">
        <div class="seg-indicator" style="width: 58px; left: 4px; height: calc(100% - 8px); top: 4px; border-radius: 6px;"></div>
        <button v-for="opt in ['Small', 'Opção B', 'Opção C']" :key="opt" :class="['seg-btn', 'seg-btn--sm', opt === 'Small' && 'active']">{{ opt }}</button>
      </div>
      <div class="seg">
        <div class="seg-indicator" style="width: 68px; left: 4px; height: calc(100% - 8px); top: 4px; border-radius: 8px;"></div>
        <button v-for="opt in ['Medium', 'Opção B', 'Opção C']" :key="opt" :class="['seg-btn', opt === 'Medium' && 'active']">{{ opt }}</button>
      </div>
      <div class="seg seg--lg">
        <div class="seg-indicator" style="width: 78px; left: 4px; height: calc(100% - 8px); top: 4px; border-radius: 8px;"></div>
        <button v-for="opt in ['Large', 'Opção B', 'Opção C']" :key="opt" :class="['seg-btn', 'seg-btn--lg', opt === 'Large' && 'active']">{{ opt }}</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'

const opts1 = ['Fornecedores', 'Prospectos', 'Concorrentes']
const active1 = ref('Fornecedores')
const btn1Refs = ref<HTMLElement[]>([])
const indicator1 = ref({ width: '0px', left: '4px', height: 'calc(100% - 8px)', top: '4px', borderRadius: '8px' })

function setRef1(el: any, i: number) { if (el) btn1Refs.value[i] = el as HTMLElement }
function select1(opt: string, i: number) {
  active1.value = opt
  nextTick(() => {
    const btn = btn1Refs.value[i]
    if (btn) indicator1.value = { width: btn.offsetWidth + 'px', left: btn.offsetLeft + 'px', height: 'calc(100% - 8px)', top: '4px', borderRadius: '8px' }
  })
}

const opts2 = [
  { value: 'mapa',    label: 'Mapa',    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' },
  { value: 'lista',   label: 'Lista',   icon: 'M4 6h16M4 10h16M4 14h16M4 18h16' },
  { value: 'rotas',   label: 'Rotas',   icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' },
]
const active2 = ref('mapa')
const btn2Refs = ref<HTMLElement[]>([])
const indicator2 = ref({ width: '0px', left: '4px', height: 'calc(100% - 8px)', top: '4px', borderRadius: '8px' })

function setRef2(el: any, i: number) { if (el) btn2Refs.value[i] = el as HTMLElement }
function select2(val: string, i: number) {
  active2.value = val
  nextTick(() => {
    const btn = btn2Refs.value[i]
    if (btn) indicator2.value = { width: btn.offsetWidth + 'px', left: btn.offsetLeft + 'px', height: 'calc(100% - 8px)', top: '4px', borderRadius: '8px' }
  })
}

// init on mount
import { onMounted } from 'vue'
onMounted(() => {
  nextTick(() => {
    if (btn1Refs.value[0]) indicator1.value = { width: btn1Refs.value[0].offsetWidth + 'px', left: btn1Refs.value[0].offsetLeft + 'px', height: 'calc(100% - 8px)', top: '4px', borderRadius: '8px' }
    if (btn2Refs.value[0]) indicator2.value = { width: btn2Refs.value[0].offsetWidth + 'px', left: btn2Refs.value[0].offsetLeft + 'px', height: 'calc(100% - 8px)', top: '4px', borderRadius: '8px' }
  })
})
</script>

<style scoped>
.srm-section { display: grid; gap: 1.5rem; font-family: var(--srm-font-sans, 'Inter', sans-serif); }
.srm-head small { color: var(--srm-color-primary, #0099ff); font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.srm-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 700; color: var(--srm-color-text, #fff); }
.srm-head p  { margin: 0; color: var(--srm-color-text-muted, #aaa); font-size: 0.88rem; }
.srm-head code { font-family: var(--srm-font-mono, monospace); font-size: 0.8em; background: var(--srm-color-hover, rgba(255,255,255,.1)); padding: 0.1em 0.35em; border-radius: 4px; }
.group-label { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--srm-color-text-muted, #aaa); }
.seg-wrap { display: flex; }
.sizes-col { display: flex; flex-direction: column; gap: 0.75rem; align-items: flex-start; }

.seg {
  position: relative; display: inline-flex; gap: 4px;
  padding: 4px; border-radius: 12px;
  background: var(--srm-color-bg, #0f172a);
  font-weight: 500;
}
.seg--full { width: 100%; }
.seg--full .seg-btn { flex: 1; }

.seg-indicator {
  position: absolute; background: var(--srm-color-primary, #0099ff);
  box-shadow: 0 2px 8px rgba(0,153,255,0.3);
  transition: all 300ms cubic-bezier(0.25, 1, 0.5, 1);
  pointer-events: none; z-index: 0;
}

.seg-btn {
  position: relative; z-index: 1;
  display: inline-flex; align-items: center; justify-content: center; gap: 6px;
  border: none; border-radius: 8px; cursor: pointer;
  font-family: inherit; font-weight: 500; transition: color 200ms;
  background: transparent;
  padding: 6px 16px; font-size: 0.875rem;
  color: var(--srm-color-text-muted, #aaa);
}
.seg-btn:hover:not(.active) { color: var(--srm-color-text, #fff); background: var(--srm-color-hover, rgba(255,255,255,0.08)); }
.seg-btn.active { color: #fff; }
.seg-icon { width: 14px; height: 14px; flex-shrink: 0; }

.seg-btn--xs { padding: 4px 10px; font-size: 0.78rem; }
.seg-btn--sm { padding: 5px 14px; font-size: 0.82rem; }
.seg-btn--lg { padding: 10px 20px; font-size: 1rem; }
.seg--xs { border-radius: 10px; }
.seg--sm { border-radius: 10px; }
.seg--lg { border-radius: 14px; }
</style>
