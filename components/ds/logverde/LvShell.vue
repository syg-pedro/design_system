<template>
  <section class="lv-section">
    <div class="lv-head">
      <small>Componentes</small>
      <h2>AppMenuDrawer &amp; PageShell</h2>
      <p><code>AppMenuDrawer</code> tem duas variantes: <strong>light</strong> (fundo branco, borda esquerda colorida no item ativo) e <strong>brand</strong> (gradiente azul profundo, links semi-transparentes em branco).</p>
    </div>

    <div class="variants-row">
      <!-- Light variant -->
      <div class="shell-demo">
        <div class="demo-badge">Variante Light</div>
        <div class="shell-frame">
          <aside class="drawer drawer--light" :class="{ collapsed: lightCollapsed }">
            <div class="drawer-top">
              <div class="logo-box">
                <div class="logo-icon">
                  <i class="pi pi-truck"></i>
                  <span class="logo-dot"></span>
                </div>
                <transition name="label-fade">
                  <span v-if="!lightCollapsed" class="logo-name">LogVerde</span>
                </transition>
              </div>
              <button class="collapse-btn" @click="lightCollapsed = !lightCollapsed">
                <i :class="lightCollapsed ? 'pi pi-angle-right' : 'pi pi-angle-left'"></i>
              </button>
            </div>

            <nav class="drawer-nav">
              <div v-for="group in navGroups" :key="group.label" class="nav-group">
                <transition name="label-fade">
                  <span v-if="!lightCollapsed" class="nav-group-label">{{ group.label }}</span>
                </transition>
                <a
                  v-for="item in group.items"
                  :key="item.id"
                  class="menu-link"
                  :class="{ active: lightActive === item.id }"
                  :title="lightCollapsed ? item.label : ''"
                  @click="lightActive = item.id"
                >
                  <i :class="item.icon"></i>
                  <transition name="label-fade">
                    <span v-if="!lightCollapsed">{{ item.label }}</span>
                  </transition>
                </a>
              </div>
            </nav>

            <div class="drawer-foot">
              <transition name="label-fade">
                <div v-if="!lightCollapsed" class="drawer-sig">
                  <span class="sig-dot"></span>
                  <span class="sig-ver">v2.4.1</span>
                </div>
              </transition>
            </div>
          </aside>

          <main class="shell-main">
            <header class="page-header">
              <div class="page-header-left">
                <h1 class="page-title">Dashboard</h1>
                <span class="page-breadcrumb">Início / Dashboard</span>
              </div>
              <div class="page-header-right">
                <button class="btn btn--default btn--sm"><i class="pi pi-plus"></i> Nova coleta</button>
                <div class="avatar">PV</div>
              </div>
            </header>
            <div class="page-body">
              <div class="mini-cards">
                <div class="mini-card" v-for="c in miniCards" :key="c.label">
                  <span class="mc-label">{{ c.label }}</span>
                  <span class="mc-val">{{ c.val }}</span>
                </div>
              </div>
              <div class="content-placeholder">
                <i class="pi pi-table"></i>
                <span>DataTableShell</span>
              </div>
            </div>
          </main>
        </div>
      </div>

      <!-- Brand variant -->
      <div class="shell-demo">
        <div class="demo-badge demo-badge--brand">Variante Brand</div>
        <div class="shell-frame">
          <aside class="drawer drawer--brand" :class="{ collapsed: brandCollapsed }">
            <div class="drawer-top">
              <div class="logo-box">
                <div class="logo-icon logo-icon--brand">
                  <i class="pi pi-truck"></i>
                  <span class="logo-dot"></span>
                </div>
                <transition name="label-fade">
                  <span v-if="!brandCollapsed" class="logo-name logo-name--brand">LogVerde</span>
                </transition>
              </div>
              <button class="collapse-btn collapse-btn--brand" @click="brandCollapsed = !brandCollapsed">
                <i :class="brandCollapsed ? 'pi pi-angle-right' : 'pi pi-angle-left'"></i>
              </button>
            </div>

            <nav class="drawer-nav">
              <div v-for="group in navGroups" :key="group.label" class="nav-group">
                <transition name="label-fade">
                  <span v-if="!brandCollapsed" class="nav-group-label nav-group-label--brand">{{ group.label }}</span>
                </transition>
                <a
                  v-for="item in group.items"
                  :key="item.id"
                  class="menu-link menu-link--brand"
                  :class="{ active: brandActive === item.id }"
                  :title="brandCollapsed ? item.label : ''"
                  @click="brandActive = item.id"
                >
                  <i :class="item.icon"></i>
                  <transition name="label-fade">
                    <span v-if="!brandCollapsed">{{ item.label }}</span>
                  </transition>
                </a>
              </div>
            </nav>

            <div class="drawer-foot">
              <transition name="label-fade">
                <div v-if="!brandCollapsed" class="drawer-sig">
                  <span class="sig-dot"></span>
                  <span class="sig-ver sig-ver--brand">v2.4.1</span>
                </div>
              </transition>
            </div>
          </aside>

          <main class="shell-main shell-main--brand">
            <header class="page-header">
              <div class="page-header-left">
                <h1 class="page-title">Dashboard</h1>
                <span class="page-breadcrumb">Início / Dashboard</span>
              </div>
              <div class="page-header-right">
                <button class="btn btn--default btn--sm"><i class="pi pi-plus"></i> Nova coleta</button>
                <div class="avatar">PV</div>
              </div>
            </header>
            <div class="page-body">
              <div class="mini-cards">
                <div class="mini-card" v-for="c in miniCards" :key="c.label">
                  <span class="mc-label">{{ c.label }}</span>
                  <span class="mc-val">{{ c.val }}</span>
                </div>
              </div>
              <div class="content-placeholder">
                <i class="pi pi-table"></i>
                <span>DataTableShell</span>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>

    <div class="group-label">PageHeader standalone</div>
    <div class="page-header page-header--standalone">
      <div class="page-header-left">
        <h1 class="page-title">Extrato Unificado</h1>
        <span class="page-breadcrumb">Financeiro / Extrato Unificado</span>
      </div>
      <div class="page-header-right">
        <button class="btn btn--secondary btn--sm"><i class="pi pi-filter"></i> Filtrar</button>
        <button class="btn btn--default-o btn--sm"><i class="pi pi-download"></i> Exportar</button>
        <button class="btn btn--default btn--sm"><i class="pi pi-plus"></i> Novo lançamento</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const lightCollapsed = ref(false)
const brandCollapsed = ref(false)
const lightActive = ref('dashboard')
const brandActive = ref('dashboard')

const navGroups = [
  {
    label: 'Operação',
    items: [
      { id: 'dashboard', label: 'Dashboard',   icon: 'pi pi-home' },
      { id: 'coletas',   label: 'Coletas',     icon: 'pi pi-truck' },
      { id: 'cargas',    label: 'Cargas',      icon: 'pi pi-box' },
      { id: 'notas',     label: 'Notas Fiscais',icon: 'pi pi-file' },
    ],
  },
  {
    label: 'Financeiro',
    items: [
      { id: 'extrato',   label: 'Extrato',     icon: 'pi pi-wallet' },
      { id: 'cobranças', label: 'Cobranças',   icon: 'pi pi-credit-card' },
    ],
  },
  {
    label: 'Outros',
    items: [
      { id: 'relatorios',label: 'Relatórios',  icon: 'pi pi-chart-bar' },
      { id: 'config',    label: 'Configurações',icon: 'pi pi-cog' },
    ],
  },
]

const miniCards = [
  { label: 'Coletas',  val: '1.284' },
  { label: 'Notas',    val: '347' },
  { label: 'CO₂',     val: '28,4t' },
  { label: 'Pendente', val: 'R$ 94k' },
]
</script>

<style scoped>
.lv-section { display: grid; gap: 1.5rem; font-family: var(--lv-font, 'Geist', sans-serif); }
.lv-head small { color: var(--lv-primary, #0094d9); font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.lv-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 700; color: var(--lv-text, #0f172a); }
.lv-head p  { margin: 0; color: var(--lv-muted, #64748b); font-size: 0.88rem; }
.lv-head code { font-family: var(--lv-font-mono, monospace); font-size: 0.82em; background: var(--lv-surface-2, #f1f4f9); padding: 0.1em 0.35em; border-radius: 4px; }
.group-label { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--lv-muted, #64748b); }

/* Two-column variant layout */
.variants-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
@media (max-width: 900px) { .variants-row { grid-template-columns: 1fr; } }

.shell-demo { display: flex; flex-direction: column; gap: 0.5rem; }
.demo-badge {
  display: inline-block; align-self: flex-start;
  font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.07em;
  padding: 0.2rem 0.6rem; border-radius: 1rem;
  background: color-mix(in srgb, var(--lv-primary, #0094d9) 12%, transparent);
  color: var(--lv-primary, #0094d9);
}
.demo-badge--brand {
  background: color-mix(in srgb, var(--lv-secondary, #0066b2) 15%, transparent);
  color: var(--lv-secondary, #0066b2);
}

/* Shell frame (fixed-height demo container) */
.shell-frame {
  display: flex; height: 380px; border-radius: var(--lv-radius, 12px);
  overflow: hidden; border: 1px solid var(--lv-line, #e5e9f0);
  box-shadow: var(--lv-shadow-sm, 0 1px 2px rgba(15,23,42,.05));
}

/* ── DRAWER BASE ─────────────────────────────── */
.drawer {
  display: flex; flex-direction: column; flex-shrink: 0;
  width: 200px; transition: width 0.22s cubic-bezier(0.25,1,0.5,1);
  overflow: hidden;
}
.drawer.collapsed { width: 52px; }

/* Light */
.drawer--light {
  background: var(--lv-bg, #fff);
  border-right: 1px solid var(--lv-line, #e5e9f0);
}

/* Brand gradient */
.drawer--brand {
  background: linear-gradient(165deg, #003c6e 0%, var(--lv-secondary, #0066b2) 45%, var(--lv-primary, #0094d9) 100%);
}

/* ── DRAWER TOP ──────────────────────────────── */
.drawer-top {
  display: flex; align-items: center; justify-content: space-between;
  padding: 0.875rem 0.75rem; flex-shrink: 0;
  border-bottom: 1px solid rgba(0,0,0,0.06);
}
.drawer--brand .drawer-top { border-bottom-color: rgba(255,255,255,0.1); }

.logo-box { display: flex; align-items: center; gap: 0.5rem; min-width: 0; overflow: hidden; }

.logo-icon {
  position: relative; flex-shrink: 0;
  width: 28px; height: 28px; border-radius: 6px;
  background: var(--lv-primary, #0094d9);
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-size: 0.8rem;
}
.logo-icon--brand { background: rgba(255,255,255,0.15); }
.logo-dot {
  position: absolute; top: -2px; right: -2px;
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--lv-tertiary, #79b83e); border: 1.5px solid var(--lv-bg, #fff);
}
.drawer--brand .logo-dot { border-color: #003c6e; }

.logo-name { font-size: 0.85rem; font-weight: 700; color: var(--lv-text, #0f172a); white-space: nowrap; }
.logo-name--brand { color: #fff; }

.collapse-btn {
  flex-shrink: 0; width: 24px; height: 24px; border: none; background: none;
  cursor: pointer; color: var(--lv-faint, #94a3b8); border-radius: 4px;
  display: flex; align-items: center; justify-content: center; font-size: 0.75rem;
  transition: all 0.15s;
}
.collapse-btn:hover { background: var(--lv-surface-2, #f1f4f9); color: var(--lv-text, #0f172a); }
.collapse-btn--brand { color: rgba(255,255,255,0.5); }
.collapse-btn--brand:hover { background: rgba(255,255,255,0.12); color: #fff; }

/* ── DRAWER NAV ──────────────────────────────── */
.drawer-nav { flex: 1; overflow-y: auto; overflow-x: hidden; padding: 0.5rem 0; }
.nav-group { margin-bottom: 0.25rem; }

.nav-group-label {
  display: block; font-size: 0.62rem; font-weight: 600; text-transform: uppercase;
  letter-spacing: 0.09em; color: var(--lv-faint, #94a3b8);
  padding: 0.5rem 0.875rem 0.25rem; white-space: nowrap;
}
.nav-group-label--brand { color: rgba(255,255,255,0.4); }

.menu-link {
  display: flex; align-items: center; gap: 0.6rem;
  padding: 0.45rem 0.875rem; font-size: 0.825rem; font-weight: 500;
  color: var(--lv-text-soft, #334155); text-decoration: none;
  cursor: pointer; transition: all 0.15s; white-space: nowrap;
  border-left: 3px solid transparent; position: relative;
}
.menu-link i { font-size: 0.85rem; flex-shrink: 0; width: 16px; text-align: center; }
.menu-link:hover { background: var(--lv-surface, #f6f8fb); color: var(--lv-text, #0f172a); }
.menu-link.active {
  background: color-mix(in srgb, var(--lv-primary, #0094d9) 10%, transparent);
  color: var(--lv-primary, #0094d9); font-weight: 600;
  border-left-color: var(--lv-primary, #0094d9);
}

/* Brand links */
.menu-link--brand { color: rgba(255,255,255,0.65); border-left-color: transparent; }
.menu-link--brand:hover { background: rgba(255,255,255,0.1); color: #fff; }
.menu-link--brand.active {
  background: rgba(255,255,255,0.15); color: #fff; font-weight: 600;
  border-left-color: rgba(255,255,255,0.8);
}

/* ── DRAWER FOOTER ───────────────────────────── */
.drawer-foot { padding: 0.75rem; flex-shrink: 0; border-top: 1px solid rgba(0,0,0,0.06); }
.drawer--brand .drawer-foot { border-top-color: rgba(255,255,255,0.1); }
.drawer-sig { display: flex; align-items: center; gap: 0.4rem; }
.sig-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--lv-tertiary, #79b83e); flex-shrink: 0; }
.sig-ver { font-size: 0.65rem; font-family: var(--lv-font-mono, monospace); color: var(--lv-faint, #94a3b8); }
.sig-ver--brand { color: rgba(255,255,255,0.4); }

/* ── SHELL MAIN ──────────────────────────────── */
.shell-main {
  flex: 1; display: flex; flex-direction: column; min-width: 0;
  background: var(--lv-surface, #f6f8fb);
}
.shell-main--brand { background: var(--lv-surface, #f6f8fb); }

.page-header {
  display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem;
  padding: 0.75rem 1rem; background: var(--lv-bg, #fff);
  border-bottom: 1px solid var(--lv-line, #e5e9f0); flex-shrink: 0;
}
.page-header--standalone {
  border: 1px solid var(--lv-line, #e5e9f0); border-radius: var(--lv-radius, 12px);
  padding: 0.875rem 1.25rem;
}
.page-header-left { display: flex; flex-direction: column; gap: 0.1rem; }
.page-title { margin: 0; font-size: 1rem; font-weight: 700; color: var(--lv-text, #0f172a); }
.page-breadcrumb { font-size: 0.72rem; color: var(--lv-muted, #64748b); }
.page-header-right { display: flex; align-items: center; gap: 0.5rem; }

.page-body { flex: 1; padding: 0.875rem; display: flex; flex-direction: column; gap: 0.75rem; overflow: hidden; }

.mini-cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.5rem; }
.mini-card {
  background: var(--lv-bg, #fff); border: 1px solid var(--lv-line, #e5e9f0);
  border-radius: var(--lv-radius-sm, 8px); padding: 0.5rem 0.625rem;
  display: flex; flex-direction: column; gap: 0.15rem;
}
.mc-label { font-size: 0.62rem; font-weight: 500; color: var(--lv-muted, #64748b); }
.mc-val { font-size: 0.875rem; font-weight: 700; color: var(--lv-text, #0f172a); }

.content-placeholder {
  flex: 1; background: var(--lv-bg, #fff); border: 1px solid var(--lv-line, #e5e9f0);
  border-radius: var(--lv-radius-sm, 8px);
  display: flex; align-items: center; justify-content: center; gap: 0.4rem;
  color: var(--lv-faint, #94a3b8); font-size: 0.78rem;
}
.content-placeholder i { font-size: 0.9rem; }

/* ── BUTTONS (inline) ────────────────────────── */
.btn {
  display: inline-flex; align-items: center; gap: 0.35rem;
  border: none; border-radius: var(--lv-radius-sm, 8px); font-weight: 600;
  cursor: pointer; transition: all 0.15s; font-family: inherit; white-space: nowrap;
}
.btn--sm { font-size: 0.78rem; padding: 0.35rem 0.75rem; min-height: 30px; }
.btn--default { background: var(--lv-primary, #0094d9); color: #fff; }
.btn--default:hover { background: var(--lv-secondary, #0066b2); }
.btn--default-o { background: transparent; border: 1px solid var(--lv-primary, #0094d9); color: var(--lv-primary, #0094d9); }
.btn--default-o:hover { background: color-mix(in srgb, var(--lv-primary, #0094d9) 8%, transparent); }
.btn--secondary { background: var(--lv-surface-2, #f1f4f9); color: var(--lv-text, #0f172a); border: 1px solid var(--lv-line, #e5e9f0); }
.btn--secondary:hover { background: var(--lv-line, #e5e9f0); }

/* Avatar */
.avatar {
  width: 28px; height: 28px; border-radius: 50%;
  background: var(--lv-primary, #0094d9); color: #fff;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.62rem; font-weight: 700; flex-shrink: 0;
}

/* Transitions */
.label-fade-enter-active, .label-fade-leave-active { transition: opacity 0.15s, transform 0.15s; }
.label-fade-enter-from, .label-fade-leave-to { opacity: 0; transform: translateX(-4px); }
</style>
