<template>
  <section class="vv-section">
    <div class="vv-head">
      <small>Padrões</small>
      <h2>App Shell</h2>
      <p>Layout principal com SidebarMenu colapsável, HeaderBar e área de conteúdo — padrão de todas as páginas autenticadas.</p>
    </div>

    <div class="shell-preview">
      <!-- Sidebar -->
      <aside class="sidebar" :class="{ collapsed }">
        <div class="sidebar-logo">
          <div class="logo-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
            </svg>
          </div>
          <Transition name="fade-text">
            <span v-if="!collapsed" class="logo-text">ViraVerde</span>
          </Transition>
        </div>

        <nav class="sidebar-nav">
          <a v-for="item in menuItems" :key="item.key"
            :class="['nav-link', activeNav === item.key && 'active']"
            :title="collapsed ? item.label : undefined"
            @click="activeNav = item.key">
            <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" :d="item.icon" />
            </svg>
            <Transition name="fade-text">
              <span v-if="!collapsed" class="nav-label">{{ item.label }}</span>
            </Transition>
          </a>
        </nav>

        <div class="sidebar-footer">
          <a :class="['nav-link', activeNav === 'conta' && 'active']" @click="activeNav = 'conta'" :title="collapsed ? 'Minha Conta' : undefined">
            <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <Transition name="fade-text">
              <span v-if="!collapsed">Minha Conta</span>
            </Transition>
          </a>
        </div>
      </aside>

      <!-- Main -->
      <div class="main">
        <!-- Header -->
        <header class="header">
          <button class="collapse-btn" @click="collapsed = !collapsed" :title="collapsed ? 'Expandir' : 'Colapsar'">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div class="header-breadcrumb">
            <span>{{ currentLabel }}</span>
          </div>
          <div class="header-right">
            <button class="header-icon-btn" title="Notificações">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
              <span class="notif-dot"></span>
            </button>
            <div class="header-avatar">JS</div>
          </div>
        </header>

        <!-- Content -->
        <div class="content">
          <div class="page-header">
            <div>
              <h1 class="page-title">{{ currentLabel }}</h1>
              <p class="page-sub">Gerencie {{ currentLabel.toLowerCase() }} cadastrados na plataforma.</p>
            </div>
            <button class="btn btn--primary btn--sm">
              <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              Novo
            </button>
          </div>
          <div class="stats-row">
            <div v-for="stat in stats" :key="stat.label" class="stat-card">
              <div class="stat-label">{{ stat.label }}</div>
              <div class="stat-value">{{ stat.value }}</div>
              <div class="stat-delta" :class="stat.up ? 'up' : 'down'">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline :points="stat.up ? '18 15 12 9 6 15' : '6 9 12 15 18 9'" />
                </svg>
                {{ stat.delta }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const collapsed = ref(false)
const activeNav = ref('cadastros')

const menuItems = [
  { key: 'home',        label: 'Home',          icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { key: 'cadastros',   label: 'Cadastros',      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
  { key: 'marketplace', label: 'Marketplace',    icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' },
  { key: 'financeiro',  label: 'Financeiro',     icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { key: 'relatorios',  label: 'Relatórios',     icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
  { key: 'usuarios',    label: 'Usuários',       icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
]

const currentLabel = computed(() => {
  const found = menuItems.find(m => m.key === activeNav.value)
  if (found) return found.label
  return 'Minha Conta'
})

const stats = [
  { label: 'Empresas ativas',  value: '124',    delta: '+8 este mês',  up: true  },
  { label: 'Livros ofertados', value: '37',     delta: '+12 este mês', up: true  },
  { label: 'Negociações',      value: '18',     delta: '-2 esta semana', up: false },
  { label: 'Receita mensal',   value: 'R$ 48k', delta: '+15%', up: true },
]
</script>

<style scoped>
.vv-section { display: grid; gap: 1.5rem; font-family: var(--vv-font-sans, 'Inter', sans-serif); }
.vv-head small { color: var(--vv-color-primary, #16a34a); font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.vv-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 700; color: var(--vv-color-text, #111827); }
.vv-head p  { margin: 0; color: var(--vv-color-text-muted, #6b7280); font-size: 0.88rem; }

.shell-preview { display: flex; border: 1px solid var(--vv-color-line, #e5e7eb); border-radius: var(--vv-radius-xl, 12px); overflow: hidden; height: 420px; box-shadow: var(--vv-shadow-md, 0 4px 6px rgba(0,0,0,.07)); }

/* Sidebar */
.sidebar { background: var(--vv-color-surface, #fff); border-right: 1px solid var(--vv-color-sidebar-border, #e5e7eb); display: flex; flex-direction: column; transition: width 0.3s ease; flex-shrink: 0; width: 200px; }
.sidebar.collapsed { width: 56px; }
.sidebar-logo { height: 56px; display: flex; align-items: center; padding: 0 12px; gap: 10px; border-bottom: 1px solid var(--vv-color-line, #e5e7eb); overflow: hidden; }
.logo-icon { width: 32px; height: 32px; background: var(--vv-color-primary, #16a34a); border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.logo-icon svg { width: 18px; height: 18px; stroke: #fff; }
.logo-text { font-weight: 700; font-size: 0.9rem; color: var(--vv-color-text, #111827); white-space: nowrap; }
.sidebar-nav { flex: 1; overflow-y: auto; padding: 0.5rem 0.375rem; display: flex; flex-direction: column; gap: 2px; }
.sidebar-footer { padding: 0.5rem 0.375rem; border-top: 1px solid var(--vv-color-line, #e5e7eb); }
.nav-link { display: flex; align-items: center; gap: 0.625rem; padding: 0.5rem 0.5rem; border-radius: 8px; cursor: pointer; transition: all 0.15s; text-decoration: none; overflow: hidden; white-space: nowrap; }
.nav-link:hover { background: var(--vv-color-surface-2, #f3f4f6); }
.nav-link.active { background: var(--vv-color-sidebar-active-bg, #f0fdf4); color: var(--vv-color-sidebar-active-text, #15803d); }
.nav-icon { width: 18px; height: 18px; flex-shrink: 0; stroke: var(--vv-color-text-muted, #6b7280); }
.nav-link.active .nav-icon { stroke: var(--vv-color-sidebar-active-text, #15803d); }
.nav-label { font-size: 0.82rem; font-weight: 500; color: var(--vv-color-text-soft, #374151); }
.nav-link.active .nav-label { color: var(--vv-color-sidebar-active-text, #15803d); }

/* Header */
.main { flex: 1; display: flex; flex-direction: column; overflow: hidden; background: var(--vv-color-page-bg, #f9fafb); min-width: 0; }
.header { height: 56px; background: var(--vv-color-surface, #fff); border-bottom: 1px solid var(--vv-color-line, #e5e7eb); display: flex; align-items: center; padding: 0 1rem; gap: 0.75rem; flex-shrink: 0; }
.collapse-btn { width: 32px; height: 32px; border: none; background: none; cursor: pointer; color: var(--vv-color-text-muted, #6b7280); border-radius: 6px; display: flex; align-items: center; justify-content: center; transition: background 0.15s; }
.collapse-btn:hover { background: var(--vv-color-surface-2, #f3f4f6); }
.collapse-btn svg { width: 18px; height: 18px; }
.header-breadcrumb { flex: 1; font-size: 0.875rem; font-weight: 500; color: var(--vv-color-text, #111827); }
.header-right { display: flex; align-items: center; gap: 0.5rem; }
.header-icon-btn { width: 32px; height: 32px; border: none; background: none; cursor: pointer; color: var(--vv-color-text-muted, #6b7280); border-radius: 6px; display: flex; align-items: center; justify-content: center; position: relative; }
.header-icon-btn svg { width: 18px; height: 18px; }
.notif-dot { position: absolute; top: 6px; right: 6px; width: 7px; height: 7px; background: #dc2626; border-radius: 50%; border: 1.5px solid #fff; }
.header-avatar { width: 30px; height: 30px; background: var(--vv-color-primary, #16a34a); color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; font-weight: 700; }

/* Content */
.content { flex: 1; overflow-y: auto; padding: 1.25rem; display: flex; flex-direction: column; gap: 1rem; }
.page-header { display: flex; align-items: flex-start; justify-content: space-between; }
.page-title { margin: 0 0 0.1rem; font-size: 1.1rem; font-weight: 700; color: var(--vv-color-text, #111827); }
.page-sub { margin: 0; font-size: 0.78rem; color: var(--vv-color-text-muted, #6b7280); }
.stats-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.75rem; }
.stat-card { background: var(--vv-color-surface, #fff); border: 1px solid var(--vv-color-line, #e5e7eb); border-radius: var(--vv-radius-lg, 10px); padding: 0.875rem; }
.stat-label { font-size: 0.72rem; color: var(--vv-color-text-muted, #6b7280); margin-bottom: 0.3rem; }
.stat-value { font-size: 1.25rem; font-weight: 700; color: var(--vv-color-text, #111827); }
.stat-delta { display: flex; align-items: center; gap: 3px; font-size: 0.7rem; margin-top: 0.2rem; }
.stat-delta svg { width: 12px; height: 12px; }
.stat-delta.up   { color: var(--vv-color-success, #16a34a); }
.stat-delta.down { color: var(--vv-color-error, #dc2626); }

.btn { display: inline-flex; align-items: center; gap: 0.35rem; border: none; border-radius: 8px; font-size: 0.8rem; font-weight: 500; padding: 0.4rem 0.875rem; cursor: pointer; font-family: inherit; transition: all 0.15s; }
.btn--primary { background: var(--vv-color-primary, #16a34a); color: #fff; }
.btn--primary:hover { background: var(--vv-color-primary-hover, #15803d); }
.btn-icon { width: 13px; height: 13px; }

.fade-text-enter-active { transition: opacity 0.15s 0.1s; }
.fade-text-leave-active { transition: opacity 0.1s; }
.fade-text-enter-from, .fade-text-leave-to { opacity: 0; }
</style>
