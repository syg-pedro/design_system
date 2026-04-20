<template>
  <section class="ds-section">
    <div class="ds-section-head">
      <small>Tipografia</small>
      <h2>Geist + Instrument Serif</h2>
      <p>Sans-serif moderno para interface, serif para títulos e momentos expressivos. Mono para números e códigos.</p>
    </div>

    <div class="type-demo">
      <div class="type-hero">
        <div class="type-eyebrow" :style="`color: ${accent}`">Display</div>
        <h1 class="type-display">Fluxo <em :style="`color: ${accent}`">operacional</em></h1>
        <p>Interface em <strong>Geist</strong> — clara, geométrica e otimizada para números.</p>
      </div>
      <div class="type-scale">
        <div class="type-row" v-for="s in scale" :key="s.name">
          <div class="type-meta">
            <code>{{ s.token }}</code>
            <span>{{ s.name }}</span>
          </div>
          <span class="type-sample" :style="s.style">{{ s.sample }}</span>
        </div>
      </div>
    </div>

    <div class="font-chips">
      <div class="font-chip" v-for="f in fonts" :key="f.name">
        <strong>{{ f.name }}</strong>
        <span :style="`font-family: ${f.family}`">{{ f.preview }}</span>
        <code>{{ f.use }}</code>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ accent: string }>()

const scale = [
  { name: 'Display', token: '3rem / 400', sample: 'Ag', style: 'font-size:3rem;font-weight:400;letter-spacing:-0.025em;line-height:1;' },
  { name: 'H1', token: '2.4rem / 400', sample: 'Heading', style: 'font-size:2.4rem;font-weight:400;letter-spacing:-0.02em;' },
  { name: 'H2', token: '1.8rem / 400', sample: 'Título', style: 'font-size:1.8rem;font-weight:400;letter-spacing:-0.015em;' },
  { name: 'H3', token: '1.2rem / 400', sample: 'Subtítulo', style: 'font-size:1.2rem;font-weight:400;letter-spacing:-0.01em;' },
  { name: 'Body', token: '0.88rem / 400', sample: 'Texto de interface e conteúdo geral.', style: 'font-size:0.88rem;' },
  { name: 'Small', token: '0.78rem / 500', sample: 'Label e metadados secundários', style: 'font-size:0.78rem;font-weight:500;color:var(--ds-muted);' },
  { name: 'Mono', token: '0.82rem / 400', sample: 'NF-9983 · 12/04/2026', style: 'font-size:0.82rem;font-family:var(--ds-font-mono, monospace);' },
]

const fonts = [
  { name: 'Geist', family: '"Geist", sans-serif', preview: 'Interface & numbers', use: 'var(--ds-font)' },
  { name: 'Instrument Serif', family: '"Instrument Serif", serif', preview: 'Display & headings', use: 'var(--ds-font-display)' },
  { name: 'JetBrains Mono', family: '"JetBrains Mono", monospace', preview: 'NF-001 · 2026-04-20', use: 'var(--ds-font-mono)' },
]
</script>

<style scoped>
.ds-section { display: grid; gap: 1.25rem; }
.ds-section-head small { color: var(--ds-primary, #0094d9); font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.ds-section-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 400; letter-spacing: -0.015em; }
.ds-section-head p  { margin: 0; color: var(--ds-muted); font-size: 0.88rem; }

.type-demo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  padding: 2rem;
  background: var(--ds-bg, #fff);
  border: 1px solid var(--ds-line);
  border-radius: 12px;
}
.type-eyebrow { font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.5rem; }
.type-display { margin: 0 0 0.75rem; font-size: 2.8rem; font-weight: 400; letter-spacing: -0.025em; line-height: 1; }
.type-hero p { margin: 0; color: var(--ds-muted); }

.type-scale { display: grid; gap: 0.85rem; }
.type-row { display: flex; align-items: baseline; justify-content: space-between; gap: 1rem; padding-bottom: 0.65rem; border-bottom: 1px solid var(--ds-line-soft); }
.type-row:last-child { border-bottom: 0; }
.type-meta { display: grid; gap: 0.15rem; min-width: 130px; }
.type-meta code { color: var(--ds-primary); font-size: 0.7rem; }
.type-meta span { color: var(--ds-muted); font-size: 0.72rem; }
.type-sample { color: var(--ds-text); }

.font-chips {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
}
.font-chip {
  display: grid; gap: 0.4rem;
  padding: 1rem 1.1rem;
  background: var(--ds-bg); border: 1px solid var(--ds-line); border-radius: 12px;
}
.font-chip strong { font-size: 0.82rem; font-weight: 600; }
.font-chip span   { font-size: 1.1rem; color: var(--ds-text); }
.font-chip code   { font-size: 0.7rem; color: var(--ds-muted); }

@media (max-width: 768px) {
  .type-demo { grid-template-columns: 1fr; }
  .font-chips { grid-template-columns: 1fr; }
}
</style>
