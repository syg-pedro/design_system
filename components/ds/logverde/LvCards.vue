<template>
  <section class="lv-section">
    <div class="lv-head">
      <small>Componentes</small>
      <h2>SummaryCard &amp; BaseDialog</h2>
      <p><code>SummaryCard</code> é o card de métrica padrão do dashboard — label, valor, ícone, trend e rodapé. 4 variantes de cor.</p>
    </div>

    <div class="group-label">SummaryCard — variantes</div>
    <div class="cards-grid">
      <article v-for="card in summaryCards" :key="card.label" class="summary-card" :class="card.variant">
        <div class="card-head">
          <span class="card-label">{{ card.label }}</span>
          <span class="card-icon"><i :class="card.icon"></i></span>
        </div>
        <div class="card-value">
          {{ card.value }}
          <span v-if="card.unit" class="card-unit">{{ card.unit }}</span>
        </div>
        <div class="card-foot">
          <span v-if="card.trend" :class="['trend', card.trendDir]">
            <i :class="card.trendDir === 'up' ? 'pi pi-arrow-up' : card.trendDir === 'down' ? 'pi pi-arrow-down' : 'pi pi-minus'"></i>
            {{ card.trend }}
          </span>
          <span v-if="card.foot" class="foot-text">{{ card.foot }}</span>
        </div>
      </article>
    </div>

    <div class="group-label">BaseDialog (modal PrimeVue)</div>
    <div class="demo-row">
      <button class="btn btn--default" @click="showDialog = true">Abrir Dialog</button>
      <button class="btn btn--danger-o" @click="showConfirm = true">Confirm Dialog</button>
      <button class="btn btn--warn-o" @click="showAlert = true">Alert Dialog</button>
    </div>

    <Teleport to="body">
      <Transition name="fade">
        <div v-if="showDialog" class="overlay" @click.self="showDialog = false">
          <Transition name="scale">
            <div v-if="showDialog" class="dialog dialog--md">
              <div class="dialog-header">
                <h3 class="dialog-title">Detalhes da Coleta</h3>
                <button class="close-btn" @click="showDialog = false"><i class="pi pi-times"></i></button>
              </div>
              <div class="dialog-body">
                <div class="detail-grid">
                  <div class="detail"><span class="dl">Documento:</span><span class="dv">NF-001234</span></div>
                  <div class="detail"><span class="dl">Data:</span><span class="dv">24/04/2026</span></div>
                  <div class="detail"><span class="dl">Valor:</span><span class="dv dv--money">R$ 1.850,00</span></div>
                  <div class="detail"><span class="dl">Status:</span><span class="tag tag--success">Pago</span></div>
                  <div class="detail" style="grid-column:1/-1"><span class="dl">Fornecedor:</span><span class="dv">Reciclagem Norte Ltda — CNPJ 12.345.678/0001-99</span></div>
                </div>
              </div>
              <div class="dialog-footer">
                <button class="btn btn--secondary" @click="showDialog = false">Fechar</button>
                <button class="btn btn--default"><i class="pi pi-file-pdf"></i> Exportar PDF</button>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>

    <Teleport to="body">
      <Transition name="fade">
        <div v-if="showConfirm" class="overlay" @click.self="showConfirm = false">
          <Transition name="scale">
            <div v-if="showConfirm" class="dialog dialog--sm">
              <div class="dialog-header">
                <h3 class="dialog-title">Confirmar operação</h3>
                <button class="close-btn" @click="showConfirm = false"><i class="pi pi-times"></i></button>
              </div>
              <div class="dialog-body">
                <p class="dialog-text">Deseja confirmar o pagamento da <strong>NF-001234</strong>? Esta ação não pode ser desfeita.</p>
              </div>
              <div class="dialog-footer">
                <button class="btn btn--secondary" @click="showConfirm = false">Não</button>
                <button class="btn btn--success" @click="showConfirm = false"><i class="pi pi-check"></i> Confirmar</button>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>

    <Teleport to="body">
      <Transition name="fade">
        <div v-if="showAlert" class="overlay" @click.self="showAlert = false">
          <Transition name="scale">
            <div v-if="showAlert" class="dialog dialog--sm">
              <div class="dialog-body" style="text-align:center; padding: 2rem 1.5rem">
                <div class="alert-icon alert-icon--warn"><i class="pi pi-exclamation-triangle"></i></div>
                <h3 class="dialog-title" style="margin-bottom:.5rem">Atenção</h3>
                <p class="dialog-text">Existem documentos com vencimento nos próximos 3 dias. Verifique o extrato unificado.</p>
              </div>
              <div class="dialog-footer" style="justify-content:center">
                <button class="btn btn--warn" @click="showAlert = false">Entendido</button>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const showDialog  = ref(false)
const showConfirm = ref(false)
const showAlert   = ref(false)

const summaryCards = [
  { label: 'Coletas do mês',    value: '1.284', icon: 'pi pi-truck', trend: '+12% vs mês anterior', trendDir: 'up', foot: 'Atualizado agora', variant: '' },
  { label: 'Notas emitidas',    value: '347',   icon: 'pi pi-file', trend: '-3% vs semana passada', trendDir: 'down', foot: 'Esta semana', variant: 'alt' },
  { label: 'Economia de CO₂',   value: '28,4',  unit: 'ton', icon: 'pi pi-leaf', trend: '+8 ton', trendDir: 'up', foot: 'Estimativa do mês', variant: 'alt2' },
  { label: 'Valor pendente',    value: 'R$ 94k', icon: 'pi pi-wallet', trend: '5 documentos', trendDir: 'flat', foot: 'Vence em 7 dias', variant: 'alt3' },
]
</script>

<style scoped>
.lv-section { display: grid; gap: 1.5rem; font-family: var(--lv-font, 'Geist', sans-serif); }
.lv-head small { color: var(--lv-primary, #0094d9); font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.lv-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 700; color: var(--lv-text, #0f172a); }
.lv-head p  { margin: 0; color: var(--lv-muted, #64748b); font-size: 0.88rem; }
.lv-head code { font-family: var(--lv-font-mono, monospace); font-size: 0.82em; background: var(--lv-surface-2, #f1f4f9); padding: 0.1em 0.35em; border-radius: 4px; }
.group-label { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--lv-muted, #64748b); }
.demo-row { display: flex; flex-wrap: wrap; gap: 0.75rem; }

.cards-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 0.875rem; }

.summary-card { background: var(--lv-bg, #fff); border: 1px solid var(--lv-line, #e5e9f0); border-radius: var(--lv-radius, 12px); padding: 1.1rem 1.25rem; box-shadow: var(--lv-shadow-sm, 0 1px 2px rgba(15,23,42,.05)); }
.summary-card.alt  { border-left: 3px solid var(--lv-tertiary, #79b83e); }
.summary-card.alt2 { border-left: 3px solid var(--lv-success, #3dac00); }
.summary-card.alt3 { border-left: 3px solid var(--lv-warning, #ffb11d); }
.card-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem; }
.card-label { font-size: 0.78rem; font-weight: 500; color: var(--lv-muted, #64748b); }
.card-icon { width: 28px; height: 28px; background: color-mix(in srgb, var(--lv-primary, #0094d9) 10%, transparent); color: var(--lv-primary, #0094d9); display: flex; align-items: center; justify-content: center; border-radius: var(--lv-radius-sm, 8px); font-size: 0.8rem; }
.summary-card.alt  .card-icon { background: color-mix(in srgb, var(--lv-tertiary, #79b83e) 12%, transparent); color: var(--lv-tertiary, #79b83e); }
.summary-card.alt2 .card-icon { background: color-mix(in srgb, var(--lv-success, #3dac00) 12%, transparent); color: var(--lv-success, #3dac00); }
.summary-card.alt3 .card-icon { background: color-mix(in srgb, var(--lv-warning, #ffb11d) 12%, transparent); color: #b87d00; }
.card-value { font-size: 1.5rem; font-weight: 700; color: var(--lv-text, #0f172a); line-height: 1; margin-bottom: 0.5rem; }
.card-unit { font-size: 0.8rem; font-weight: 500; color: var(--lv-muted, #64748b); margin-left: 0.2rem; }
.card-foot { display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; }
.trend { display: inline-flex; align-items: center; gap: 3px; font-size: 0.72rem; font-weight: 600; }
.trend.up   { color: var(--lv-success, #3dac00); }
.trend.down { color: var(--lv-error, #ff1414); }
.trend.flat { color: var(--lv-muted, #64748b); }
.trend i { font-size: 0.65rem; }
.foot-text { font-size: 0.72rem; color: var(--lv-muted, #64748b); }

.btn { display: inline-flex; align-items: center; gap: 0.4rem; border-radius: var(--lv-radius-sm, 8px); font-size: 0.875rem; font-weight: 600; padding: 0.5rem 1rem; cursor: pointer; font-family: inherit; transition: all var(--lv-transition-fast, 0.15s); border: none; min-height: var(--lv-min-touch, 40px); }
.btn--default   { background: var(--lv-primary, #0094d9); color: #fff; }
.btn--default:hover   { background: var(--lv-secondary, #0066b2); }
.btn--secondary { background: var(--lv-surface-2, #f1f4f9); color: var(--lv-text, #0f172a); border: 1px solid var(--lv-line, #e5e9f0); }
.btn--secondary:hover { background: var(--lv-line, #e5e9f0); }
.btn--success   { background: var(--lv-success, #3dac00); color: #fff; }
.btn--success:hover   { filter: brightness(0.9); }
.btn--warn      { background: var(--lv-warning, #ffb11d); color: #fff; }
.btn--warn:hover      { filter: brightness(0.9); }
.btn--danger-o  { background: transparent; border: 1px solid var(--lv-error, #ff1414); color: var(--lv-error, #ff1414); }
.btn--danger-o:hover  { background: color-mix(in srgb, var(--lv-error, #ff1414) 8%, transparent); }
.btn--warn-o    { background: transparent; border: 1px solid var(--lv-warning, #ffb11d); color: #b87d00; }
.btn--warn-o:hover    { background: color-mix(in srgb, var(--lv-warning, #ffb11d) 10%, transparent); }

.overlay { position: fixed; inset: 0; background: rgba(15,23,42,0.35); z-index: 1000; display: flex; align-items: center; justify-content: center; padding: 1rem; backdrop-filter: blur(2px); }
.dialog { background: var(--lv-bg, #fff); border-radius: var(--lv-radius, 12px); box-shadow: var(--lv-shadow-lg, 0 24px 48px rgba(15,23,42,0.18)); display: flex; flex-direction: column; max-height: 90vh; width: 100%; border: 1px solid var(--lv-line, #e5e9f0); }
.dialog--sm { max-width: 400px; }
.dialog--md { max-width: 560px; }
.dialog-header { display: flex; align-items: center; justify-content: space-between; padding: 1.25rem 1.5rem; border-bottom: 1px solid var(--lv-line-soft, #eef1f6); }
.dialog-title { margin: 0; font-size: 1.05rem; font-weight: 600; color: var(--lv-text, #0f172a); }
.close-btn { width: 28px; height: 28px; border: none; background: none; cursor: pointer; color: var(--lv-faint, #94a3b8); border-radius: 6px; display: flex; align-items: center; justify-content: center; transition: all 0.15s; }
.close-btn:hover { background: var(--lv-surface-2, #f1f4f9); color: var(--lv-text, #0f172a); }
.dialog-body { padding: 1.25rem 1.5rem; overflow-y: auto; flex: 1; }
.dialog-text { margin: 0; font-size: 0.875rem; color: var(--lv-text-soft, #334155); line-height: 1.6; }
.dialog-footer { padding: 1rem 1.5rem; border-top: 1px solid var(--lv-line-soft, #eef1f6); display: flex; justify-content: flex-end; gap: 0.5rem; }
.detail-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.875rem; }
.detail { display: flex; flex-direction: column; gap: 0.2rem; }
.dl { font-size: 0.72rem; font-weight: 600; color: var(--lv-muted, #64748b); text-transform: uppercase; letter-spacing: 0.04em; }
.dv { font-size: 0.875rem; font-weight: 500; color: var(--lv-text, #0f172a); }
.dv--money { font-family: var(--lv-font-mono, monospace); color: var(--lv-primary, #0094d9); font-weight: 700; }
.tag { display: inline-flex; align-items: center; gap: 0.3rem; padding: 0.15rem 0.6rem; border-radius: 1rem; font-size: 0.75rem; font-weight: 600; }
.tag--success { background: color-mix(in srgb, var(--lv-success, #3dac00) 12%, transparent); color: color-mix(in srgb, var(--lv-success, #3dac00) 85%, black); }
.alert-icon { width: 52px; height: 52px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; font-size: 1.4rem; }
.alert-icon--warn { background: color-mix(in srgb, var(--lv-warning, #ffb11d) 15%, transparent); color: #b87d00; border: 1px solid color-mix(in srgb, var(--lv-warning, #ffb11d) 30%, transparent); }

.fade-enter-active, .fade-leave-active { transition: opacity 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
.scale-enter-active, .scale-leave-active { transition: all 0.2s; }
.scale-enter-from, .scale-leave-to { opacity: 0; transform: scale(0.95); }
</style>
