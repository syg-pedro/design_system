<template>
  <div class="home">
    <header class="home-header">
      <div class="home-brand">
        <div class="home-brand-mark">S</div>
        <div>
          <strong>Sygecom</strong>
          <span>Design Systems</span>
        </div>
      </div>
      <button class="icon-btn" @click="toggleDark" :title="darkMode ? 'Modo claro' : 'Modo escuro'">
        <i :class="darkMode ? 'pi pi-sun' : 'pi pi-moon'"></i>
      </button>
    </header>

    <main class="home-main">
      <div class="home-hero">
        <p class="hero-eyebrow">Biblioteca de padrões</p>
        <h1>Design <em>Systems</em></h1>
        <p class="hero-sub">Tokens, componentes e padrões de cada produto — web e mobile.</p>
      </div>

      <div class="systems-grid">
        <NuxtLink
          v-for="ds in systems"
          :key="ds.id"
          :to="`/${ds.id}`"
          class="system-card"
          :style="`--card-accent: ${ds.accent}`"
        >
          <div class="system-card-top">
            <div class="system-logo" :style="`background: ${ds.accent}`">
              {{ ds.logoInitial }}
            </div>
            <div class="system-meta">
              <strong>{{ ds.name }}</strong>
              <span>v{{ ds.version }}</span>
            </div>
          </div>
          <p class="system-desc">{{ ds.description }}</p>
          <div class="system-swatches">
            <span
              v-for="(color, key) in ds.colors"
              :key="key"
              class="swatch-dot"
              :style="`background: ${color}`"
              :title="key"
            ></span>
          </div>
          <div class="system-footer">
            <span class="system-tag">Web</span>
            <span class="system-tag">Mobile</span>
            <i class="pi pi-arrow-right system-arrow"></i>
          </div>
        </NuxtLink>

        <div class="system-card system-card--add">
          <i class="pi pi-plus-circle add-icon"></i>
          <strong>Novo design system</strong>
          <span>Adicione um novo projeto ao catálogo.</span>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const { systems, darkMode, toggleDark } = useDesignSystem()

useHead({ title: 'Design Systems — Sygecom' })
</script>

<style scoped>
.home {
  min-height: 100vh;
  background: var(--ds-surface, #f6f8fb);
  color: var(--ds-text, #0f172a);
  font-family: var(--ds-font, "Geist", sans-serif);
}

.home-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 2rem;
  background: var(--ds-bg, #fff);
  border-bottom: 1px solid var(--ds-line, #e5e9f0);
  position: sticky;
  top: 0;
  z-index: 10;
}

.home-brand {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}
.home-brand-mark {
  width: 36px; height: 36px;
  border-radius: 10px;
  background: linear-gradient(135deg, #0094d9, #0066b2);
  color: #fff;
  display: grid; place-items: center;
  font-weight: 700; font-size: 1rem;
}
.home-brand strong {
  display: block;
  font-size: 0.95rem; font-weight: 700;
  line-height: 1.2;
  color: var(--ds-text, #0f172a);
}
.home-brand span {
  font-size: 0.72rem;
  color: var(--ds-muted, #64748b);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.icon-btn {
  width: 40px; height: 40px;
  border: 1px solid var(--ds-line, #e5e9f0);
  border-radius: 10px;
  background: transparent;
  color: var(--ds-muted, #64748b);
  cursor: pointer;
  display: grid; place-items: center;
  font-size: 1rem;
  transition: all 0.15s ease;
}
.icon-btn:hover {
  background: var(--ds-surface-2, #f1f4f9);
  color: var(--ds-text, #0f172a);
}

.home-main {
  max-width: 1100px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

.home-hero {
  text-align: center;
  margin-bottom: 3rem;
}
.hero-eyebrow {
  margin: 0 0 0.5rem;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #0094d9;
}
.home-hero h1 {
  margin: 0 0 0.75rem;
  font-family: "Geist", sans-serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 400;
  letter-spacing: -0.025em;
  line-height: 1;
  color: var(--ds-text, #0f172a);
}
.home-hero h1 em { font-style: italic; color: #0094d9; }
.hero-sub {
  margin: 0;
  color: var(--ds-muted, #64748b);
  font-size: 1.05rem;
}

.systems-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.25rem;
}

.system-card {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  padding: 1.4rem;
  background: var(--ds-bg, #fff);
  border: 1px solid var(--ds-line, #e5e9f0);
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(15,23,42,0.05);
  cursor: pointer;
  transition: all 0.18s ease;
  text-decoration: none;
  color: inherit;
}
.system-card:hover {
  border-color: var(--card-accent, #0094d9);
  box-shadow: 0 1px 3px rgba(15,23,42,0.06), 0 12px 32px -8px rgba(15,23,42,0.12);
  transform: translateY(-2px);
}
.system-card--add {
  align-items: center;
  justify-content: center;
  text-align: center;
  border-style: dashed;
  cursor: default;
  color: var(--ds-muted, #64748b);
}
.add-icon { font-size: 2rem; color: var(--ds-faint, #94a3b8); }
.system-card--add strong { font-size: 0.95rem; color: var(--ds-text, #0f172a); }
.system-card--add span { font-size: 0.82rem; }

.system-card-top {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.system-logo {
  width: 44px; height: 44px;
  border-radius: 12px;
  color: #fff;
  display: grid; place-items: center;
  font-weight: 700; font-size: 1.15rem;
  flex-shrink: 0;
}
.system-meta strong { display: block; font-size: 1rem; font-weight: 700; }
.system-meta span { font-size: 0.72rem; color: var(--ds-muted, #64748b); }

.system-desc {
  margin: 0;
  font-size: 0.85rem;
  color: var(--ds-muted, #64748b);
  line-height: 1.5;
  flex: 1;
}

.system-swatches {
  display: flex;
  gap: 0.35rem;
  flex-wrap: wrap;
}
.swatch-dot {
  width: 18px; height: 18px;
  border-radius: 50%;
  border: 2px solid var(--ds-bg, #fff);
  box-shadow: 0 0 0 1px rgba(0,0,0,0.08);
  display: block;
}

.system-footer {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding-top: 0.5rem;
  border-top: 1px solid var(--ds-line-soft, #eef1f6);
}
.system-tag {
  padding: 0.15rem 0.55rem;
  border-radius: 999px;
  background: var(--ds-surface-2, #f1f4f9);
  color: var(--ds-muted, #64748b);
  font-size: 0.72rem;
  font-weight: 500;
}
.system-arrow {
  margin-left: auto;
  color: var(--ds-faint, #94a3b8);
  font-size: 0.85rem;
  transition: transform 0.15s ease, color 0.15s ease;
}
.system-card:hover .system-arrow {
  color: var(--card-accent, #0094d9);
  transform: translateX(3px);
}
</style>
