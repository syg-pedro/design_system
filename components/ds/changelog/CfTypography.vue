<template>
  <section class="ds-section">
    <div class="ds-head">
      <small>Tipografia</small>
      <h2>Escala tipográfica</h2>
      <p>Fonte <code>Source Sans 3</code>. Tokens <code>--ff-text-*</code>.</p>
    </div>

    <div class="type-group">
      <div class="group-label">Display</div>
      <div v-for="t in displayScale" :key="t.token" class="type-row">
        <span class="type-sample" :style="`font-size:${t.size};font-weight:${t.weight}`">{{ t.label }}</span>
        <div class="type-meta">
          <code>{{ t.token }}</code>
          <span class="type-size">{{ t.size }}</span>
        </div>
      </div>
    </div>

    <div class="type-group">
      <div class="group-label">Headline</div>
      <div v-for="t in headlineScale" :key="t.token" class="type-row">
        <span class="type-sample" :style="`font-size:${t.size};font-weight:${t.weight}`">{{ t.label }}</span>
        <div class="type-meta">
          <code>{{ t.token }}</code>
          <span class="type-size">{{ t.size }}</span>
        </div>
      </div>
    </div>

    <div class="type-group">
      <div class="group-label">Title</div>
      <div v-for="t in titleScale" :key="t.token" class="type-row">
        <span class="type-sample" :style="`font-size:${t.size};font-weight:${t.weight}`">{{ t.label }}</span>
        <div class="type-meta">
          <code>{{ t.token }}</code>
          <span class="type-size">{{ t.size }}</span>
        </div>
      </div>
    </div>

    <div class="type-group">
      <div class="group-label">Body & Label</div>
      <div v-for="t in bodyScale" :key="t.token" class="type-row">
        <span class="type-sample" :style="`font-size:${t.size};font-weight:${t.weight}`">{{ t.label }}</span>
        <div class="type-meta">
          <code>{{ t.token }}</code>
          <span class="type-size">{{ t.size }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const displayScale = [
  { label: 'Display Large',  token: '--ff-text-display-large',  size: '57px', weight: 400 },
  { label: 'Display Medium', token: '--ff-text-display-medium', size: '45px', weight: 400 },
  { label: 'Display Small',  token: '--ff-text-display-small',  size: '36px', weight: 400 },
]
const headlineScale = [
  { label: 'Headline Large',  token: '--ff-text-headline-large',  size: '32px', weight: 600 },
  { label: 'Headline Medium', token: '--ff-text-headline-medium', size: '28px', weight: 600 },
  { label: 'Headline Small',  token: '--ff-text-headline-small',  size: '24px', weight: 600 },
]
const titleScale = [
  { label: 'Title Large',  token: '--ff-text-title-large',  size: '22px', weight: 600 },
  { label: 'Title Medium', token: '--ff-text-title-medium', size: '20px', weight: 600 },
  { label: 'Title Small',  token: '--ff-text-title-small',  size: '18px', weight: 600 },
]
const bodyScale = [
  { label: 'Body — Lorem ipsum dolor sit amet consectetur.', token: '--ff-text-body',  size: '14px', weight: 400 },
  { label: 'Label — UI chip, tag, caption',                  token: '--ff-text-label', size: '12px', weight: 400 },
]
</script>

<style scoped>
.ds-section { display: grid; gap: 1.5rem; }
.ds-head small { color: #79b83e; font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.ds-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 600; }
.ds-head p  { margin: 0; color: var(--ff-color-secondary-text, #979ca3); font-size: 0.88rem; }
.group-label { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--ff-color-secondary-text); margin-bottom: 0.25rem; }
.type-group { display: grid; gap: 0.5rem; }
.type-row {
  display: flex; align-items: baseline; justify-content: space-between; gap: 1rem;
  padding: 0.75rem 1rem;
  background: var(--ff-color-primary-bg, #fff);
  border: 1px solid var(--ff-color-accent-3, #e0e0e0);
  border-radius: 10px;
}
.type-sample { color: var(--ff-color-primary-text, #3c3c3c); font-family: "Source Sans 3", "Segoe UI", sans-serif; line-height: 1.2; }
.type-meta { display: flex; gap: 0.75rem; align-items: center; flex-shrink: 0; }
.type-meta code { font-size: 0.7rem; color: var(--ff-color-secondary-text); }
.type-size { font-size: 0.7rem; color: var(--ff-color-accent-2, #757575); font-family: monospace; }
</style>
