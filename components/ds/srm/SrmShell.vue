<template>
  <section class="srm-section">
    <div class="srm-head">
      <small>Padrões</small>
      <h2>App Shell</h2>
      <p>Sidebar azul sólida, icon-only em repouso, expande no hover. Header com UiStatusBadgeGroup de métricas e mobile header separado.</p>
    </div>

    <div class="shell-preview">
      <!-- Sidebar -->
      <aside class="sidebar" :class="{ expanded: sidebarExpanded }"
        @mouseenter="sidebarExpanded = true"
        @mouseleave="sidebarExpanded = false">
        <!-- Logo -->
        <div class="sidebar-logo">
          <div class="logo-box">S</div>
          <Transition name="label-fade">
            <span v-if="sidebarExpanded" class="logo-text">SRM</span>
          </Transition>
        </div>

        <!-- Nav -->
        <nav class="sidebar-nav">
          <a v-for="item in menuItems" :key="item.key"
            class="nav-item" :class="{ active: activeNav === item.key }"
            :title="!sidebarExpanded ? item.label : undefined"
            @click="activeNav = item.key">
            <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" :d="item.icon" />
            </svg>
            <Transition name="label-fade">
              <span v-if="sidebarExpanded" class="nav-label">{{ item.label }}</span>
            </Transition>
          </a>
        </nav>

        <!-- Footer -->
        <div class="sidebar-footer">
          <a class="nav-item" :title="!sidebarExpanded ? 'Sair' : undefined">
            <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <Transition name="label-fade">
              <span v-if="sidebarExpanded" class="nav-label">Sair</span>
            </Transition>
          </a>
          <Transition name="label-fade">
            <div v-if="sidebarExpanded" class="version">v2.0.0</div>
          </Transition>
        </div>
      </aside>

      <!-- Main -->
      <div class="main">
        <!-- Header -->
        <header class="header">
          <div class="header-left">
            <span class="header-title">{{ currentLabel }}</span>
          </div>
          <!-- UiStatusBadgeGroup inline -->
          <div class="header-metrics">
            <div v-for="m in headerMetrics" :key="m.label"
              class="metric-chip" :style="getMetricStyle(m.color)">
              <svg class="metric-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" :d="m.icon" />
              </svg>
              <span class="metric-val">{{ m.value }}</span>
            </div>
          </div>
          <div class="header-right">
            <button class="hdr-btn" title="Notificações">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
              <span class="notif-dot"></span>
            </button>
            <div class="user-avatar">JS</div>
          </div>
        </header>

        <!-- Content -->
        <div class="content">
          <div class="page-hdr">
            <h2 class="page-title">{{ currentLabel }}</h2>
            <!-- UiSegmentedControl -->
            <div class="seg-wrapper">
              <div class="seg" ref="segRef">
                <div class="seg-indicator" :style="segIndicator"></div>
                <button v-for="(opt, i) in segOpts" :key="opt"
                  :ref="(el) => setSegRef(el, i)"
                  :class="['seg-btn', activeSeg === opt && 'active']"
                  @click="selectSeg(opt, i)">{{ opt }}</button>
              </div>
            </div>
          </div>

          <!-- List items -->
          <div class="item-list">
            <div v-for="item in listItems" :key="item.id" class="list-item">
              <div class="item-icon" :style="{ background: item.iconBg, borderColor: item.iconBorder, color: item.iconColor }">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" :d="item.icon" />
                </svg>
              </div>
              <div class="item-info">
                <p class="item-title">{{ item.title }}</p>
                <p class="item-sub">{{ item.sub }}</p>
              </div>
              <span class="status-dot" :style="{ background: item.dotColor }"></span>
              <p class="item-date">{{ item.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <p class="hint-text">Passe o mouse sobre a sidebar para ver o efeito de expansão.</p>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, nextTick, onMounted } from 'vue'

const sidebarExpanded = ref(false)
const activeNav = ref('fornecedores')

const menuItems = [
  { key: 'inicio',       label: 'Início',       icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { key: 'fornecedores', label: 'Fornecedores', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' },
  { key: 'prospectos',   label: 'Prospectos',   icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
  { key: 'ocorrencias',  label: 'Ocorrências',  icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
  { key: 'checkin',      label: 'Check-in',     icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' },
  { key: 'rotas',        label: 'Rotas',        icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' },
  { key: 'equipe',       label: 'Time',         icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
]

const currentLabel = computed(() => menuItems.find(m => m.key === activeNav.value)?.label ?? 'Início')

const headerMetrics = [
  { value: '24', label: 'Total', color: 'blue',   icon: 'M4 6h16M4 10h16M4 14h16M4 18h16' },
  { value: '18', label: 'Ok',    color: 'green',  icon: 'M22 11.08V12a10 10 0 11-5.93-9.14M22 4 12 14.01l-3-3' },
  { value: '4',  label: 'Em prog', color: 'yellow', icon: 'M12 22a10 10 0 110-20 10 10 0 010 20zm0-6v.01M12 6v6' },
  { value: '2',  label: 'Late',  color: 'red',    icon: 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z' },
]

function getMetricStyle(color: string) {
  const map: Record<string, Record<string,string>> = {
    red:    { background: 'rgba(239,68,68,0.1)',    color: '#ef4444',  border: '1px solid rgba(239,68,68,0.2)' },
    green:  { background: 'rgba(16,185,129,0.1)',   color: '#10b981',  border: '1px solid rgba(16,185,129,0.2)' },
    yellow: { background: 'rgba(245,158,11,0.1)',   color: '#f59e0b',  border: '1px solid rgba(245,158,11,0.2)' },
    blue:   { background: 'rgba(0,153,255,0.1)',    color: '#0099ff',  border: '1px solid rgba(0,153,255,0.2)' },
  }
  return map[color] || map.blue
}

// Segmented
const segOpts = ['Todos', 'Ativos', 'Inativos']
const activeSeg = ref('Todos')
const segBtnRefs = ref<HTMLElement[]>([])
const segIndicator = ref({ width: '0px', left: '4px', height: 'calc(100% - 8px)', top: '4px', borderRadius: '6px' })
function setSegRef(el: any, i: number) { if (el) segBtnRefs.value[i] = el }
function selectSeg(opt: string, i: number) {
  activeSeg.value = opt
  nextTick(() => { const b = segBtnRefs.value[i]; if (b) segIndicator.value = { width: b.offsetWidth+'px', left: b.offsetLeft+'px', height: 'calc(100% - 8px)', top: '4px', borderRadius: '6px' } })
}
onMounted(() => nextTick(() => { const b = segBtnRefs.value[0]; if (b) segIndicator.value = { width: b.offsetWidth+'px', left: b.offsetLeft+'px', height: 'calc(100% - 8px)', top: '4px', borderRadius: '6px' } }))

const listItems = [
  { id: 1, title: 'Reciclagem Norte Ltda', sub: 'Fornecedor • São Paulo', date: '24/04', dotColor: '#4ade80', iconBg: 'rgba(0,153,255,0.1)', iconBorder: 'rgba(0,153,255,0.2)', iconColor: '#0099ff', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' },
  { id: 2, title: 'EcoMetais S.A.', sub: 'Fornecedor • Campinas', date: '22/04', dotColor: '#fbbf24', iconBg: 'rgba(0,153,255,0.1)', iconBorder: 'rgba(0,153,255,0.2)', iconColor: '#0099ff', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' },
  { id: 3, title: 'GreenWaste Ltda', sub: 'Prospecto • Santos', date: '20/04', dotColor: '#f87171', iconBg: 'rgba(16,185,129,0.1)', iconBorder: 'rgba(16,185,129,0.2)', iconColor: '#10b981', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
]
</script>

<style scoped>
.srm-section { display: grid; gap: 1.5rem; font-family: var(--srm-font-sans, 'Inter', sans-serif); }
.srm-head small { color: var(--srm-color-primary, #0099ff); font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.srm-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 700; color: var(--srm-color-text, #fff); }
.srm-head p  { margin: 0; color: var(--srm-color-text-muted, #aaa); font-size: 0.88rem; }
.hint-text { font-size: 0.78rem; color: var(--srm-color-text-muted, #aaa); margin: 0; font-style: italic; }

.shell-preview { display: flex; height: 400px; border-radius: var(--srm-radius-xl, 12px); overflow: hidden; border: 1px solid var(--srm-color-border, #333); box-shadow: 0 12px 40px rgba(0,0,0,0.4); }

/* Sidebar */
.sidebar {
  background: var(--srm-color-primary, #0099ff); display: flex; flex-direction: column;
  width: 64px; transition: width 0.3s cubic-bezier(0.25,1,0.5,1); flex-shrink: 0; overflow: hidden;
}
.sidebar.expanded { width: 220px; }
.sidebar-logo { height: 60px; display: flex; align-items: center; padding: 0 16px; gap: 10px; border-bottom: 1px solid rgba(255,255,255,0.15); flex-shrink: 0; }
.logo-box { width: 32px; height: 32px; background: rgba(255,255,255,0.2); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.95rem; color: #fff; flex-shrink: 0; }
.logo-text { font-weight: 700; font-size: 0.95rem; color: #fff; white-space: nowrap; }
.sidebar-nav { flex: 1; overflow-y: auto; padding: 8px 8px; display: flex; flex-direction: column; gap: 2px; }
.sidebar-footer { padding: 8px; border-top: 1px solid rgba(255,255,255,0.15); }
.nav-item { display: flex; align-items: center; gap: 10px; padding: 8px; border-radius: 8px; cursor: pointer; transition: background 0.15s; white-space: nowrap; overflow: hidden; text-decoration: none; }
.nav-item:hover { background: rgba(255,255,255,0.15); }
.nav-item.active { background: rgba(255,255,255,0.2); }
.nav-icon { width: 20px; height: 20px; flex-shrink: 0; color: rgba(255,255,255,0.9); }
.nav-label { font-size: 0.82rem; font-weight: 500; color: rgba(255,255,255,0.9); }
.version { font-size: 0.65rem; color: rgba(255,255,255,0.5); text-align: center; padding: 4px 0; }

/* Header */
.main { flex: 1; display: flex; flex-direction: column; background: var(--srm-color-bg, #0f172a); min-width: 0; }
.header { height: 60px; background: var(--srm-color-surface, #1e293b); border-bottom: 1px solid var(--srm-color-border, #333); display: flex; align-items: center; padding: 0 1rem; gap: 0.75rem; flex-shrink: 0; }
.header-left { flex: 0 0 auto; }
.header-title { font-size: 0.9rem; font-weight: 600; color: var(--srm-color-text, #fff); white-space: nowrap; }
.header-metrics { flex: 1; display: flex; justify-content: flex-end; gap: 0.35rem; overflow: hidden; }
.metric-chip { display: flex; align-items: center; gap: 4px; padding: 4px 8px; border-radius: 6px; border: 1px solid; font-size: 0.72rem; white-space: nowrap; }
.metric-icon { width: 12px; height: 12px; flex-shrink: 0; }
.metric-val { font-weight: 700; font-size: 0.8rem; }
.header-right { display: flex; align-items: center; gap: 0.5rem; flex-shrink: 0; }
.hdr-btn { width: 30px; height: 30px; border: none; background: var(--srm-color-hover, rgba(255,255,255,.08)); cursor: pointer; color: var(--srm-color-text-muted, #aaa); border-radius: 6px; display: flex; align-items: center; justify-content: center; position: relative; }
.hdr-btn svg { width: 16px; height: 16px; }
.notif-dot { position: absolute; top: 5px; right: 5px; width: 7px; height: 7px; background: #ef4444; border-radius: 50%; border: 1.5px solid var(--srm-color-surface, #1e293b); }
.user-avatar { width: 28px; height: 28px; background: var(--srm-color-primary, #0099ff); color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.68rem; font-weight: 700; }

/* Content */
.content { flex: 1; overflow-y: auto; padding: 0.875rem 1rem; display: flex; flex-direction: column; gap: 0.875rem; }
.page-hdr { display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; }
.page-title { margin: 0; font-size: 0.95rem; font-weight: 700; color: var(--srm-color-text, #fff); white-space: nowrap; }

/* Segmented */
.seg-wrapper { flex-shrink: 0; }
.seg { position: relative; display: inline-flex; gap: 4px; padding: 4px; border-radius: 10px; background: var(--srm-color-surface, #1e293b); }
.seg-indicator { position: absolute; background: var(--srm-color-primary, #0099ff); box-shadow: 0 2px 6px rgba(0,153,255,0.25); transition: all 300ms cubic-bezier(0.25,1,0.5,1); pointer-events: none; z-index: 0; }
.seg-btn { position: relative; z-index: 1; border: none; border-radius: 6px; cursor: pointer; font-family: inherit; font-weight: 500; padding: 4px 10px; font-size: 0.75rem; background: transparent; color: var(--srm-color-text-muted, #aaa); transition: color 0.15s; }
.seg-btn:hover:not(.active) { color: var(--srm-color-text, #fff); }
.seg-btn.active { color: #fff; }

/* List */
.item-list { display: flex; flex-direction: column; gap: 4px; }
.list-item { display: flex; align-items: center; gap: 10px; background: var(--srm-color-surface, #1e293b); border: 1px solid var(--srm-color-border-subtle, rgba(255,255,255,0.08)); border-radius: 8px; padding: 8px 10px; cursor: pointer; transition: border-color 0.15s; }
.list-item:hover { border-color: var(--srm-color-primary-border, rgba(0,153,255,0.3)); }
.item-icon { width: 30px; height: 30px; border-radius: 6px; border: 1px solid; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.item-icon svg { width: 14px; height: 14px; }
.item-info { flex: 1; min-width: 0; }
.item-title { font-size: 0.8rem; font-weight: 500; color: var(--srm-color-text, #fff); margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.item-sub { font-size: 0.7rem; color: var(--srm-color-text-muted, #aaa); margin: 0; }
.status-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.item-date { font-size: 0.7rem; font-weight: 500; color: var(--srm-color-primary, #0099ff); flex-shrink: 0; }

.label-fade-enter-active { transition: opacity 0.15s 0.1s; }
.label-fade-leave-active { transition: opacity 0.08s; }
.label-fade-enter-from, .label-fade-leave-to { opacity: 0; }
</style>
