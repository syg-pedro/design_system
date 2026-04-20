<template>
  <div v-if="ds" class="ds-shell" :class="{ 'app-dark': darkMode }">
    <!-- Sidebar -->
    <aside class="ds-sidebar" :class="{ collapsed: sidebarCollapsed }">
      <div class="ds-brand">
        <div class="ds-logo" :style="`background: ${ds.accent}`">{{ ds.logoInitial }}</div>
        <div class="ds-brand-text" v-if="!sidebarCollapsed">
          <strong>{{ ds.name }}</strong>
          <small>Design System</small>
        </div>
      </div>

      <div class="ds-nav-section">
        <span v-if="!sidebarCollapsed" class="ds-nav-label">Navegação</span>
        <nav class="ds-nav">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            class="ds-nav-link"
            :class="{ active: activeTab === tab.id }"
            @click="activeTab = tab.id"
          >
            <i :class="`pi ${tab.icon}`"></i>
            <span v-if="!sidebarCollapsed">{{ tab.label }}</span>
          </button>
        </nav>
      </div>

      <div class="ds-sidebar-spacer"></div>

      <div class="ds-sidebar-footer">
        <NuxtLink to="/" class="ds-nav-link ds-nav-link--back">
          <i class="pi pi-arrow-left"></i>
          <span v-if="!sidebarCollapsed">Todos os sistemas</span>
        </NuxtLink>
        <div class="ds-version" v-if="!sidebarCollapsed">
          <span class="ds-dot"></span>
          <span>v{{ ds.version }}</span>
        </div>
      </div>
    </aside>

    <!-- Main -->
    <main class="ds-main">
      <!-- Header -->
      <header class="ds-header">
        <button class="icon-btn" @click="sidebarCollapsed = !sidebarCollapsed">
          <i class="pi pi-bars"></i>
        </button>
        <div class="ds-breadcrumb">
          <span class="ds-bc-root">Design Systems</span>
          <i class="pi pi-angle-right"></i>
          <strong>{{ ds.name }}</strong>
        </div>
        <div class="ds-header-actions">
          <button class="icon-btn" @click="toggleDark" :title="darkMode ? 'Modo claro' : 'Modo escuro'">
            <i :class="darkMode ? 'pi pi-sun' : 'pi pi-moon'"></i>
          </button>
        </div>
      </header>

      <!-- Content -->
      <div class="ds-content">
        <div class="ds-page-header">
          <div class="ds-eyebrow">{{ ds.name }}</div>
          <h1>Design <em>System</em></h1>
          <p>Tokens, tipografia e componentes — {{ ds.description }}</p>
        </div>

        <!-- Tabs nav (mobile) -->
        <div class="ds-tabs-mobile">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            class="ds-tab-btn"
            :class="{ active: activeTab === tab.id }"
            @click="activeTab = tab.id"
          >
            <i :class="`pi ${tab.icon}`"></i>
            {{ tab.label }}
          </button>
        </div>

        <!-- ViraVerde tabs -->
        <template v-if="isViraVerde">
          <div v-show="activeTab === 'tokens'" class="ds-section-group">
            <DsViraverdeVvColorPalette />
            <DsViraverdeVvTypography />
          </div>
          <div v-show="activeTab === 'components'" class="ds-section-group">
            <DsViraverdeVvButtons />
            <DsViraverdeVvBadges />
            <DsViraverdeVvInputs />
          </div>
          <div v-show="activeTab === 'patterns'" class="ds-section-group">
            <DsViraverdeVvShell />
            <DsViraverdeVvTabs />
            <DsViraverdeVvTable />
            <DsViraverdeVvModal />
          </div>
        </template>

        <!-- Portal do Contador tabs -->
        <template v-else-if="isPortalContador">
          <div v-show="activeTab === 'tokens'" class="ds-section-group">
            <DsPortalContadorPcColorPalette />
            <DsPortalContadorPcTypography />
          </div>
          <div v-show="activeTab === 'components'" class="ds-section-group">
            <DsPortalContadorPcButtons />
            <DsPortalContadorPcBadges />
            <DsPortalContadorPcInputs />
          </div>
          <div v-show="activeTab === 'patterns'" class="ds-section-group">
            <DsPortalContadorPcShell />
            <DsPortalContadorPcTabs />
            <DsPortalContadorPcTable />
            <DsPortalContadorPcModal />
          </div>
        </template>

        <!-- Changelog-specific tabs -->
        <template v-else-if="isChangelog">
          <div v-show="activeTab === 'tokens'" class="ds-section-group">
            <DsChangelogCfColorPalette />
            <DsChangelogCfTypography />
            <DsChangelogCfSpacing />
          </div>
          <div v-show="activeTab === 'components'" class="ds-section-group">
            <DsChangelogCfButtons />
            <DsChangelogCfBadges />
            <DsChangelogCfInputs />
          </div>
          <div v-show="activeTab === 'patterns'" class="ds-section-group">
            <DsChangelogCfModals />
            <DsChangelogCfLogCard />
            <DsChangelogCfProductCard />
            <DsChangelogCfAttachment />
          </div>
        </template>

        <!-- Generic tabs -->
        <template v-else-if="true">
          <div v-show="activeTab === 'tokens'" class="ds-section-group">
            <DsColorPalette :colors="ds.colors" />
            <DsTypography :accent="ds.accent" />
            <DsSpacing />
          </div>
          <div v-show="activeTab === 'components'" class="ds-section-group">
            <DsButtons />
            <DsInputs />
            <DsTags />
            <DsCards :accent="ds.accent" />
            <DsTable />
            <DsEmptyState />
          </div>
          <div v-show="activeTab === 'patterns'" class="ds-section-group">
            <DsNavigation :ds="ds" :collapsed="false" />
            <DsModals />
          </div>
        </template>
      </div>
    </main>
  </div>

  <div v-else class="not-found">
    <i class="pi pi-exclamation-triangle"></i>
    <h2>Design system não encontrado</h2>
    <NuxtLink to="/" class="ds-btn-primary">Voltar ao início</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { getDesignSystem } from '~/design-systems/index'

const route = useRoute()
const { darkMode, toggleDark } = useDesignSystem()

const ds = computed(() => getDesignSystem(route.params.system as string))
const isChangelog = computed(() => route.params.system === 'changelog')
const isPortalContador = computed(() => route.params.system === 'portal-contador')
const isViraVerde = computed(() => route.params.system === 'viraverde')

const sidebarCollapsed = ref(false)
const activeTab = ref('tokens')

const tabs = [
  { id: 'tokens',     label: 'Tokens',      icon: 'pi-palette' },
  { id: 'components', label: 'Componentes', icon: 'pi-th-large' },
  { id: 'patterns',   label: 'Padrões',     icon: 'pi-sitemap' },
]

watchEffect(() => {
  if (ds.value) {
    useHead({ title: `${ds.value.name} Design System — Sygecom` })
    if (import.meta.client) {
      applyTokens(ds.value.id)
    }
  }
})

function applyTokens(id: string) {
  const existing = document.getElementById('ds-tokens')
  if (existing) existing.remove()
  const link = document.createElement('link')
  link.id = 'ds-tokens'
  link.rel = 'stylesheet'
  link.href = `/design-tokens/${id}.css`
  document.head.appendChild(link)
}

watch([darkMode, isChangelog], ([dark, isCl]) => {
  if (!import.meta.client) return
  if (isCl) {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : '')
  } else {
    document.documentElement.removeAttribute('data-theme')
  }
}, { immediate: true })
</script>

<style scoped>
.ds-shell {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 252px minmax(0, 1fr);
  background: var(--ds-surface, #f6f8fb);
  color: var(--ds-text, #0f172a);
  font-family: var(--ds-font, "Geist", sans-serif);
  transition: grid-template-columns 0.22s ease;
}
.ds-shell:has(.ds-sidebar.collapsed) {
  grid-template-columns: 68px minmax(0, 1fr);
}

/* Sidebar */
.ds-sidebar {
  position: sticky; top: 0; height: 100vh;
  display: flex; flex-direction: column;
  padding: 0;
  background: var(--ds-bg, #fff);
  border-right: 1px solid var(--ds-line, #e5e9f0);
  overflow: hidden;
  transition: width 0.22s ease;
}

/* Brand */
.ds-brand {
  display: flex; align-items: center; gap: 0.65rem;
  padding: 1.1rem 1rem 1rem;
  border-bottom: 1px solid var(--ds-line, #e5e9f0);
  min-height: 64px; flex-shrink: 0;
}
.ds-logo {
  width: 36px; height: 36px; flex: 0 0 36px;
  display: grid; place-items: center;
  color: #fff; border-radius: 10px;
  font-weight: 700; font-size: 1rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.18);
}
.ds-brand-text { min-width: 0; }
.ds-brand-text strong { display: block; font-size: 0.95rem; font-weight: 700; line-height: 1.25; color: var(--ds-text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.ds-brand-text small  { font-size: 0.62rem; color: var(--ds-muted); letter-spacing: 0.1em; text-transform: uppercase; font-weight: 600; }

/* Nav section */
.ds-nav-section { padding: 1.25rem 0.75rem 0.5rem; }
.ds-nav-label {
  display: block; font-size: 0.62rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.12em;
  color: var(--ds-faint); padding: 0 0.4rem;
  margin-bottom: 0.4rem;
}
.ds-nav { display: flex; flex-direction: column; gap: 0.2rem; }

.ds-nav-link {
  display: flex; align-items: center; gap: 0.65rem;
  height: 40px; padding: 0 0.75rem;
  border: 0; border-radius: 9px;
  background: transparent; color: var(--ds-text-soft, #334155);
  cursor: pointer; text-align: left;
  font: inherit; font-size: 0.875rem; font-weight: 500;
  transition: background 0.13s, color 0.13s;
  text-decoration: none; position: relative;
  white-space: nowrap; overflow: hidden;
}
.ds-nav-link i { font-size: 0.95rem; width: 1rem; flex-shrink: 0; color: var(--ds-faint); transition: color 0.13s; }
.ds-nav-link:hover { background: var(--ds-surface-2); color: var(--ds-text); }
.ds-nav-link:hover i { color: var(--ds-primary); }
.ds-nav-link.active {
  background: color-mix(in srgb, var(--ds-primary, #0094d9) 12%, transparent);
  color: var(--ds-primary); font-weight: 600;
}
.ds-nav-link.active i { color: var(--ds-primary); }
.ds-nav-link.active::before {
  content: ""; position: absolute; left: 0; top: 20%; bottom: 20%;
  width: 3px; border-radius: 0 3px 3px 0;
  background: var(--ds-primary);
}

/* Collapsed sidebar */
.ds-sidebar.collapsed { }
.ds-sidebar.collapsed .ds-brand { justify-content: center; padding-inline: 0; }
.ds-sidebar.collapsed .ds-brand-text { display: none; }
.ds-sidebar.collapsed .ds-nav-section { padding-inline: 0.5rem; }
.ds-sidebar.collapsed .ds-nav-label { display: none; }
.ds-sidebar.collapsed .ds-nav-link { justify-content: center; padding-inline: 0; }
.ds-sidebar.collapsed .ds-nav-link span { display: none; }
.ds-sidebar.collapsed .ds-nav-link.active::before { display: none; }

/* Spacer */
.ds-sidebar-spacer { flex: 1; }

/* Footer */
.ds-sidebar-footer {
  border-top: 1px solid var(--ds-line-soft);
  padding: 0.75rem;
  display: flex; flex-direction: column; gap: 0.15rem; flex-shrink: 0;
}
.ds-nav-link--back { color: var(--ds-muted); font-size: 0.82rem; }
.ds-nav-link--back i { color: var(--ds-faint); }
.ds-nav-link--back:hover { color: var(--ds-text); }

.ds-version {
  display: flex; align-items: center; gap: 0.5rem;
  padding: 0.3rem 0.75rem;
  color: var(--ds-faint); font-size: 0.68rem;
}
.ds-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--ds-success, #3dac00); flex-shrink: 0; }

/* Header */
.ds-header {
  display: flex; align-items: center; gap: 0.75rem;
  padding: 0.85rem 1.75rem;
  background: var(--ds-bg, #fff);
  border-bottom: 1px solid var(--ds-line, #e5e9f0);
  position: sticky; top: 0; z-index: 5;
}
.ds-breadcrumb {
  display: flex; align-items: center; gap: 0.4rem;
  font-size: 0.82rem; color: var(--ds-muted);
}
.ds-breadcrumb strong { color: var(--ds-text); }
.ds-breadcrumb .pi { font-size: 0.75rem; }
.ds-bc-root { color: var(--ds-muted); }
.ds-header-actions { margin-left: auto; display: flex; gap: 0.4rem; }

.icon-btn {
  width: 40px; height: 40px;
  border: 1px solid var(--ds-line, #e5e9f0); border-radius: 10px;
  background: transparent; color: var(--ds-muted, #64748b);
  cursor: pointer; display: grid; place-items: center;
  transition: all 0.15s ease;
}
.icon-btn:hover { background: var(--ds-surface-2); color: var(--ds-text); }

/* Content */
.ds-main { min-width: 0; }
.ds-content { padding: 2rem 2.5rem 3rem; max-width: 1100px; }

.ds-page-header { margin-bottom: 2.5rem; }
.ds-eyebrow {
  display: inline-flex; align-items: center; gap: 0.4rem;
  color: var(--ds-primary, #0094d9); font-weight: 600;
  font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase;
  margin-bottom: 0.4rem;
}
.ds-eyebrow::before { content: ""; width: 16px; height: 1px; background: currentColor; }
.ds-page-header h1 {
  margin: 0 0 0.4rem;
  font-size: 2.4rem; font-weight: 400;
  letter-spacing: -0.02em; line-height: 1.05;
  color: var(--ds-text);
}
.ds-page-header h1 em { font-style: italic; color: var(--ds-primary, #0094d9); }
.ds-page-header p { margin: 0; color: var(--ds-muted); font-size: 0.94rem; max-width: 540px; }

/* Mobile tabs (hidden on desktop) */
.ds-tabs-mobile {
  display: none;
  gap: 0.2rem;
  margin-bottom: 1.5rem;
  overflow-x: auto;
  border-bottom: 1px solid var(--ds-line);
}
.ds-tab-btn {
  flex: 0 0 auto;
  display: inline-flex; align-items: center; gap: 0.4rem;
  padding: 0.65rem 0.9rem;
  border: 0; border-bottom: 2px solid transparent; margin-bottom: -1px;
  background: transparent; color: var(--ds-muted);
  font: inherit; font-size: 0.86rem; font-weight: 500;
  cursor: pointer; transition: all 0.15s;
}
.ds-tab-btn:hover { color: var(--ds-text); }
.ds-tab-btn.active { color: var(--ds-text); border-bottom-color: var(--ds-primary, #0094d9); }

.ds-section-group { display: grid; gap: 2.5rem; }

/* Not found */
.not-found {
  min-height: 100vh;
  display: grid; place-items: center; place-content: center;
  gap: 1rem; text-align: center;
  color: var(--ds-muted, #64748b);
}
.not-found .pi { font-size: 3rem; color: var(--ds-faint, #94a3b8); }
.not-found h2 { margin: 0; font-size: 1.5rem; color: var(--ds-text, #0f172a); }
.ds-btn-primary {
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 0.6rem 1.25rem; border-radius: 10px;
  background: var(--ds-primary, #0094d9); color: #fff;
  font: inherit; font-weight: 500; font-size: 0.88rem;
  text-decoration: none; transition: all 0.15s;
}
.ds-btn-primary:hover { opacity: 0.9; transform: translateY(-1px); }

@media (max-width: 768px) {
  .ds-shell { grid-template-columns: 1fr !important; }
  .ds-sidebar { display: none; }
  .ds-content { padding: 1.25rem 1rem 2rem; }
  .ds-tabs-mobile { display: flex; }
  .ds-page-header h1 { font-size: 1.8rem; }
}
</style>
