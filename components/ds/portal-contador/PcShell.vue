<template>
  <section class="pc-section">
    <div class="pc-head">
      <small>Padrões</small>
      <h2>AppShell</h2>
      <p>Sidebar azul colapsável + header sticky branco. Dark mode via <code>.dark</code> no Tailwind (classe <code>.app-dark</code> na showcase).</p>
    </div>

    <div class="group-label">Shell preview (estático)</div>
    <div class="shell-preview">
      <!-- Sidebar -->
      <aside class="sidebar" :class="{ 'sidebar--collapsed': collapsed }">
        <div class="sidebar-brand">
          <div v-if="!collapsed" class="sidebar-logo-full">
            <div class="logo-box">P</div>
            <span>Portal do Contador</span>
          </div>
          <div v-else class="logo-box">P</div>
        </div>

        <nav class="sidebar-nav">
          <button
            v-for="item in navItems"
            :key="item.id"
            class="nav-item"
            :class="{ 'nav-item--active': activeNav === item.id }"
            @click="activeNav = item.id"
            :title="collapsed ? item.label : undefined"
          >
            <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path v-if="item.id === 'docs'" d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline v-if="item.id === 'docs'" points="14 2 14 8 20 8"/>
              <path v-if="item.id === 'tax'" d="M9 14l6-6M17 7l.01 0M7 17l.01 0"/><rect v-if="item.id === 'tax'" x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle v-if="item.id === 'help'" cx="12" cy="12" r="10"/><path v-if="item.id === 'help'" d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01"/>
            </svg>
            <span v-if="!collapsed" class="nav-label">{{ item.label }}</span>
          </button>
        </nav>

        <div class="sidebar-footer">
          <button class="nav-item" :title="collapsed ? 'Sair' : undefined">
            <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            <span v-if="!collapsed" class="nav-label">Sair</span>
          </button>
        </div>

        <!-- collapse toggle -->
        <button class="collapse-btn" @click="collapsed = !collapsed" :title="collapsed ? 'Expandir' : 'Recolher'">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline v-if="collapsed" points="9 18 15 12 9 6"/>
            <polyline v-else points="15 18 9 12 15 6"/>
          </svg>
        </button>
      </aside>

      <!-- Main -->
      <div class="shell-main">
        <header class="shell-header">
          <div class="breadcrumb">
            <span class="bc-root">Portal do Contador</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
            <strong>{{ navItems.find(i => i.id === activeNav)?.label }}</strong>
          </div>
          <div class="header-user">
            <div class="avatar">PC</div>
          </div>
        </header>
        <div class="shell-content">
          <div class="page-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
            <span>Conteúdo da página</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Token reference -->
    <div class="group-label">Tokens da sidebar</div>
    <div class="token-grid">
      <div class="token-row" v-for="t in sidebarTokens" :key="t.token">
        <span class="swatch-dot" :style="`background:${t.color}`"></span>
        <code>{{ t.token }}</code>
        <span>{{ t.value }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const collapsed = ref(false)
const activeNav = ref('docs')
const navItems = [
  { id: 'docs', label: 'Documentos Fiscais' },
  { id: 'tax',  label: 'Tributações'         },
  { id: 'help', label: 'Ajuda'               },
]
const sidebarTokens = [
  { token: '--pc-color-sidebar-bg',     color: '#2563eb', value: 'blue-600' },
  { token: '--pc-color-sidebar-border', color: '#1d4ed8', value: 'blue-700 (separadores)' },
  { token: '--pc-color-sidebar-text',   color: '#eff6ff', value: 'blue-50 (nav items)' },
  { token: '--pc-color-sidebar-active', color: '#1d4ed8', value: 'blue-700 (item ativo)' },
]
</script>

<style scoped>
.pc-section { display: grid; gap: 1.5rem; font-family: var(--pc-font-sans, 'Inter', sans-serif); }
.pc-head small { color: var(--pc-color-primary, #2563eb); font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.pc-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 700; color: var(--pc-color-text, #0f172a); }
.pc-head p  { margin: 0; color: var(--pc-color-text-muted, #64748b); font-size: 0.88rem; }
.group-label { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--pc-color-text-muted); }

/* Shell preview */
.shell-preview {
  display: flex; height: 360px; border-radius: var(--pc-radius-lg, 12px);
  overflow: hidden; border: 1px solid var(--pc-color-line, #e2e8f0);
  background: var(--pc-color-page-bg, #f8fafc);
}

.sidebar {
  width: 220px; min-width: 220px; background: var(--pc-color-sidebar-bg, #2563eb);
  display: flex; flex-direction: column; position: relative; transition: width 0.2s, min-width 0.2s;
}
.sidebar--collapsed { width: 64px; min-width: 64px; }
.sidebar-brand {
  padding: 1rem 0.75rem; border-bottom: 1px solid var(--pc-color-sidebar-border, #1d4ed8);
  display: flex; align-items: center; justify-content: center; min-height: 60px;
}
.sidebar-logo-full { display: flex; align-items: center; gap: 0.5rem; }
.sidebar-logo-full span { font-size: 0.8rem; font-weight: 600; color: #eff6ff; white-space: nowrap; }
.logo-box { width: 32px; height: 32px; background: rgba(255,255,255,0.2); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 700; color: #fff; font-size: 0.9rem; flex-shrink: 0; }

.sidebar-nav { flex: 1; padding: 0.5rem 0.5rem; display: flex; flex-direction: column; gap: 0.15rem; }
.sidebar-footer { padding: 0.5rem; border-top: 1px solid var(--pc-color-sidebar-border, #1d4ed8); }

.nav-item {
  display: flex; align-items: center; gap: 0.65rem;
  padding: 0.5rem 0.65rem; border-radius: 8px; border: none;
  background: transparent; color: #bfdbfe; font-size: 0.82rem; font-weight: 500;
  cursor: pointer; transition: background 0.12s; text-align: left; width: 100%;
}
.nav-item:hover { background: rgba(255,255,255,0.1); color: #fff; }
.nav-item--active { background: var(--pc-color-sidebar-active, #1d4ed8) !important; color: #fff; }
.nav-icon { width: 18px; height: 18px; flex-shrink: 0; }
.nav-label { font-size: 0.82rem; white-space: nowrap; overflow: hidden; }

.sidebar--collapsed .nav-item { justify-content: center; padding-inline: 0; }
.sidebar--collapsed .nav-label { display: none; }

.collapse-btn {
  position: absolute; right: -12px; top: 70px;
  width: 24px; height: 24px; border-radius: 50%;
  background: var(--pc-color-sidebar-bg, #2563eb);
  border: 2px solid var(--pc-color-sidebar-border, #1d4ed8);
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; z-index: 2;
}
.collapse-btn svg { width: 12px; height: 12px; color: #fff; }

.shell-main { flex: 1; min-width: 0; display: flex; flex-direction: column; }
.shell-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 0.75rem 1rem; background: var(--pc-color-surface, #fff);
  border-bottom: 1px solid var(--pc-color-line, #e2e8f0); height: 56px;
}
.breadcrumb { display: flex; align-items: center; gap: 0.3rem; font-size: 0.78rem; color: var(--pc-color-text-muted); }
.breadcrumb svg { width: 14px; height: 14px; }
.breadcrumb strong { color: var(--pc-color-text, #0f172a); }
.bc-root { color: var(--pc-color-text-muted); }
.header-user { margin-left: auto; }
.avatar { width: 32px; height: 32px; border-radius: 50%; background: var(--pc-color-primary, #2563eb); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; font-weight: 700; }

.shell-content { flex: 1; display: flex; align-items: center; justify-content: center; }
.page-placeholder { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; color: var(--pc-color-text-faint); }
.page-placeholder svg { width: 40px; height: 40px; }
.page-placeholder span { font-size: 0.8rem; }

/* Token grid */
.token-grid { display: grid; gap: 0.35rem; }
.token-row { display: flex; align-items: center; gap: 0.6rem; font-size: 0.8rem; padding: 0.4rem 0.75rem; background: var(--pc-color-surface, #fff); border: 1px solid var(--pc-color-line, #e2e8f0); border-radius: 8px; }
.swatch-dot { width: 14px; height: 14px; border-radius: 3px; flex-shrink: 0; border: 1px solid rgba(0,0,0,0.1); }
.token-row code { color: var(--pc-color-text-muted); flex-shrink: 0; min-width: 200px; }
.token-row span { color: var(--pc-color-text); font-size: 0.75rem; }
</style>
