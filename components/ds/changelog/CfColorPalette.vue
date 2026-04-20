<template>
  <section class="ds-section">
    <div class="ds-head">
      <small>Paleta</small>
      <h2>Cores</h2>
      <p>Tokens <code>--ff-*</code>. Modo escuro via <code>[data-theme="dark"]</code> no <code>&lt;html&gt;</code>.</p>
    </div>

    <div class="group-label">Marca</div>
    <div class="swatch-row">
      <div v-for="c in brandColors" :key="c.name" class="swatch" @click="copy(c.hex)">
        <span class="chip" :style="`background:${c.hex}`"></span>
        <strong>{{ c.name }}</strong>
        <code>{{ c.hex }}</code>
        <span class="token">{{ c.token }}</span>
      </div>
    </div>

    <div class="group-label">Status</div>
    <div class="swatch-row">
      <div v-for="c in statusColors" :key="c.name" class="swatch" @click="copy(c.hex)">
        <span class="chip" :style="`background:${c.hex}`"></span>
        <strong>{{ c.name }}</strong>
        <code>{{ c.hex }}</code>
        <span class="token">{{ c.token }}</span>
      </div>
    </div>

    <div class="group-label">Superfícies (light)</div>
    <div class="swatch-row">
      <div v-for="c in surfaceColors" :key="c.name" class="swatch" @click="copy(c.hex)">
        <span class="chip bordered" :style="`background:${c.hex}`"></span>
        <strong>{{ c.name }}</strong>
        <code>{{ c.hex }}</code>
        <span class="token">{{ c.token }}</span>
      </div>
    </div>

    <div class="group-label">Fundos de status</div>
    <div class="swatch-row">
      <div v-for="c in bgColors" :key="c.name" class="swatch" @click="copy(c.hex)">
        <span class="chip bordered" :style="`background:${c.hex}`"></span>
        <strong>{{ c.name }}</strong>
        <code>{{ c.hex }}</code>
        <span class="token">{{ c.token }}</span>
      </div>
    </div>

    <div class="group-label">Tonal (sub-colors)</div>
    <div class="swatch-row">
      <div v-for="c in subColors" :key="c.name" class="swatch" @click="copy(c.hex)">
        <span class="chip bordered" :style="`background:${c.hex}`"></span>
        <strong>{{ c.name }}</strong>
        <code>{{ c.hex }}</code>
        <span class="token">{{ c.token }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const brandColors = [
  { name: 'Primary',   hex: '#0094d9', token: '--ff-color-primary'   },
  { name: 'Secondary', hex: '#0066b2', token: '--ff-color-secondary'  },
  { name: 'Tertiary',  hex: '#79b83e', token: '--ff-color-tertiary'   },
  { name: 'Alternate', hex: '#f3943d', token: '--ff-color-alternate'  },
]
const statusColors = [
  { name: 'Success', hex: '#3dac00', token: '--ff-color-success' },
  { name: 'Warning', hex: '#ffb11d', token: '--ff-color-warning' },
  { name: 'Error',   hex: '#ff1414', token: '--ff-color-error'   },
  { name: 'Info',    hex: '#1c4494', token: '--ff-color-info'    },
]
const surfaceColors = [
  { name: 'Primary BG',   hex: '#ffffff', token: '--ff-color-primary-bg'   },
  { name: 'Secondary BG', hex: '#f8f8f8', token: '--ff-color-secondary-bg' },
  { name: 'Accent 3',     hex: '#e0e0e0', token: '--ff-color-accent-3'     },
  { name: 'Accent 4',     hex: '#fcfcfc', token: '--ff-color-accent-4'     },
  { name: 'Line',         hex: '#eeeeee', token: '--ff-color-line'         },
]
const bgColors = [
  { name: 'BG Success', hex: '#d7ffc5', token: '--ff-color-bg-success' },
  { name: 'BG Error',   hex: '#ffd9d9', token: '--ff-color-bg-error'   },
  { name: 'BG Warning', hex: '#ffeec7', token: '--ff-color-bg-warning' },
  { name: 'BG Info',    hex: '#ceedff', token: '--ff-color-bg-info'    },
]
const subColors = [
  { name: 'Sub Primary',   hex: '#d8edff', token: '--ff-color-sub-primary'   },
  { name: 'Sub Secondary', hex: '#cfebff', token: '--ff-color-sub-secondary' },
  { name: 'Sub Tertiary',  hex: '#e7ffcf', token: '--ff-color-sub-tertiary'  },
  { name: 'Sub Alternate', hex: '#ffecdc', token: '--ff-color-sub-alternate' },
]

async function copy(hex: string) {
  try { await navigator.clipboard.writeText(hex) } catch {}
}
</script>

<style scoped>
.ds-section { display: grid; gap: 1.5rem; }
.ds-head small { color: #79b83e; font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.ds-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 600; }
.ds-head p  { margin: 0; color: var(--ff-color-secondary-text, #979ca3); font-size: 0.88rem; }
.group-label { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--ff-color-secondary-text); margin-bottom: -0.5rem; }
.swatch-row { display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 0.75rem; }
.swatch {
  display: grid; gap: 0.45rem; padding: 0.75rem;
  background: var(--ff-color-primary-bg, #fff);
  border: 1px solid var(--ff-color-accent-3, #e0e0e0);
  border-radius: 12px; cursor: pointer;
  transition: box-shadow 0.15s;
}
.swatch:hover { box-shadow: var(--ff-shadow-md, 0 3px 6px rgba(0,0,0,0.1)); }
.chip { display: block; height: 52px; border-radius: 8px; }
.chip.bordered { box-shadow: inset 0 0 0 1px rgba(0,0,0,0.08); }
.swatch strong { font-size: 0.78rem; font-weight: 600; color: var(--ff-color-primary-text); }
.swatch code   { font-size: 0.7rem; color: var(--ff-color-secondary-text); }
.token { font-size: 0.62rem; color: var(--ff-color-accent-2); font-family: monospace; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
</style>
