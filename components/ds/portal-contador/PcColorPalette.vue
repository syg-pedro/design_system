<template>
  <section class="pc-section">
    <div class="pc-head">
      <small>Paleta</small>
      <h2>Cores</h2>
      <p>Tokens <code>--pc-*</code> derivados da paleta Tailwind <strong>blue / slate / emerald / amber / red</strong>. Dark mode via classe <code>.app-dark</code>.</p>
    </div>

    <div class="group-label">Primária (Blue)</div>
    <div class="swatch-row">
      <div v-for="c in primaryColors" :key="c.token" class="swatch" @click="copy(c.hex)">
        <span class="chip" :style="`background:${c.hex}`"></span>
        <strong>{{ c.name }}</strong>
        <code>{{ c.hex }}</code>
        <span class="token">{{ c.token }}</span>
      </div>
    </div>

    <div class="group-label">Superfícies (Slate)</div>
    <div class="swatch-row">
      <div v-for="c in surfaceColors" :key="c.token" class="swatch" @click="copy(c.hex)">
        <span class="chip bordered" :style="`background:${c.hex}`"></span>
        <strong>{{ c.name }}</strong>
        <code>{{ c.hex }}</code>
        <span class="token">{{ c.token }}</span>
      </div>
    </div>

    <div class="group-label">Texto</div>
    <div class="swatch-row">
      <div v-for="c in textColors" :key="c.token" class="swatch" @click="copy(c.hex)">
        <span class="chip" :style="`background:${c.hex}`"></span>
        <strong>{{ c.name }}</strong>
        <code>{{ c.hex }}</code>
        <span class="token">{{ c.token }}</span>
      </div>
    </div>

    <div class="group-label">Status</div>
    <div class="swatch-row">
      <div v-for="c in statusColors" :key="c.token" class="swatch" @click="copy(c.hex)">
        <span class="chip" :style="`background:${c.hex}`"></span>
        <strong>{{ c.name }}</strong>
        <code>{{ c.hex }}</code>
        <span class="token">{{ c.token }}</span>
      </div>
    </div>

    <div class="group-label">Sidebar</div>
    <div class="swatch-row">
      <div v-for="c in sidebarColors" :key="c.token" class="swatch" @click="copy(c.hex)">
        <span class="chip" :style="`background:${c.hex}`"></span>
        <strong>{{ c.name }}</strong>
        <code>{{ c.hex }}</code>
        <span class="token">{{ c.token }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const primaryColors = [
  { name: 'Primary',      hex: '#2563eb', token: '--pc-color-primary'       },
  { name: 'Hover',        hex: '#1d4ed8', token: '--pc-color-primary-hover'  },
  { name: 'Dark',         hex: '#1e40af', token: '--pc-color-primary-dark'   },
  { name: 'Light',        hex: '#3b82f6', token: '--pc-color-primary-light'  },
  { name: 'Ring',         hex: '#93c5fd', token: '--pc-color-primary-ring'   },
]
const surfaceColors = [
  { name: 'Page BG',    hex: '#f8fafc', token: '--pc-color-page-bg'   },
  { name: 'Surface',    hex: '#ffffff', token: '--pc-color-surface'    },
  { name: 'Surface 2',  hex: '#f1f5f9', token: '--pc-color-surface-2'  },
  { name: 'Line',       hex: '#e2e8f0', token: '--pc-color-line'       },
  { name: 'Line Soft',  hex: '#cbd5e1', token: '--pc-color-line-soft'  },
]
const textColors = [
  { name: 'Text',       hex: '#0f172a', token: '--pc-color-text'       },
  { name: 'Text Soft',  hex: '#334155', token: '--pc-color-text-soft'  },
  { name: 'Muted',      hex: '#64748b', token: '--pc-color-text-muted' },
  { name: 'Faint',      hex: '#94a3b8', token: '--pc-color-text-faint' },
]
const statusColors = [
  { name: 'Success',  hex: '#10b981', token: '--pc-color-success'      },
  { name: 'Warning',  hex: '#f59e0b', token: '--pc-color-warning'      },
  { name: 'Error',    hex: '#ef4444', token: '--pc-color-error'        },
]
const sidebarColors = [
  { name: 'Sidebar BG',     hex: '#2563eb', token: '--pc-color-sidebar-bg'     },
  { name: 'Sidebar Border', hex: '#1d4ed8', token: '--pc-color-sidebar-border' },
  { name: 'Sidebar Text',   hex: '#eff6ff', token: '--pc-color-sidebar-text'   },
  { name: 'Sidebar Active', hex: '#1d4ed8', token: '--pc-color-sidebar-active' },
]

async function copy(hex: string) {
  try { await navigator.clipboard.writeText(hex) } catch {}
}
</script>

<style scoped>
.pc-section { display: grid; gap: 1.5rem; font-family: var(--pc-font-sans, 'Inter', sans-serif); }
.pc-head small { color: var(--pc-color-primary, #2563eb); font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.pc-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 700; color: var(--pc-color-text, #0f172a); }
.pc-head p  { margin: 0; color: var(--pc-color-text-muted, #64748b); font-size: 0.88rem; }
.group-label { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--pc-color-text-muted); margin-bottom: -0.25rem; }
.swatch-row { display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 0.65rem; }
.swatch {
  display: grid; gap: 0.4rem; padding: 0.75rem;
  background: var(--pc-color-surface, #fff);
  border: 1px solid var(--pc-color-line, #e2e8f0);
  border-radius: var(--pc-radius-lg, 12px); cursor: pointer;
  transition: box-shadow 0.15s;
}
.swatch:hover { box-shadow: var(--pc-shadow-md, 0 4px 6px rgba(0,0,0,0.07)); }
.chip { display: block; height: 48px; border-radius: var(--pc-radius-md, 8px); }
.chip.bordered { box-shadow: inset 0 0 0 1px rgba(0,0,0,0.08); }
.swatch strong { font-size: 0.75rem; font-weight: 600; color: var(--pc-color-text, #0f172a); }
.swatch code   { font-size: 0.68rem; color: var(--pc-color-text-muted); }
.token { font-size: 0.6rem; color: var(--pc-color-primary, #2563eb); font-family: monospace; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
</style>
