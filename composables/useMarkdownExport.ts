import type { DesignSystemConfig } from '~/design-systems/types'

// ── Per-DS metadata not derivable from config ───────────────────────────────
interface DsMeta {
  prefix: string
  darkMode: string
  font: string
  stack: string
  components: Record<string, string[]>
}

const DS_META: Record<string, DsMeta> = {
  logverde: {
    prefix: 'lv',
    darkMode: '`.app-dark` class no elemento raiz',
    font: 'Geist (sans) + JetBrains Mono',
    stack: 'Nuxt 3 + PrimeVue',
    components: {
      'Botões (BaseButton)': [
        'Sólidos: default, secondary, success, info, warn, danger',
        'Outlined: mesmas 5 variantes',
        'Text / ghost: default, danger, warn',
        'Loading: spinner inline',
        'BaseIconButton: 36×36 px, 5 variantes',
      ],
      'Tags & StatusTag': [
        'Variantes: primary, success, warn, danger, info, secondary',
        'Com ícone PrimeIcons',
        'StatusTag: mapeamento automático string → severidade',
        'Contexto de tabela',
      ],
      'Inputs': [
        'BaseTextInput com detecção de máscara (CPF/CNPJ, telefone, CEP)',
        'BaseSelect',
        'BaseTextarea (redimensionável)',
        'BaseSwitch (ToggleSwitch PrimeVue)',
        'BaseCheckbox',
        'Estado de erro e campo obrigatório (*)',
      ],
      'Cards & Dialogs': [
        'SummaryCard: label, valor, ícone, trend (up/down/flat), rodapé — 4 variantes de cor',
        'BaseDialog (md, 560 px)',
        'ConfirmDialog (sm, 400 px)',
        'AlertDialog (sm, centrado, ícone de aviso)',
        'Transições fade + scale via Vue Transition',
      ],
      'Shell & Layout': [
        'AppMenuDrawer variante light: fundo branco, borda esquerda no item ativo',
        'AppMenuDrawer variante brand: gradiente #003c6e → #0066b2 → #0094d9',
        'Colapso animado (52 px ↔ 200 px)',
        'Logo icon com dot verde (tertiary)',
        'Seções de nav: Operação, Financeiro, Outros',
        'PageHeader: título + breadcrumb + ações',
      ],
    },
  },

  srm: {
    prefix: 'srm',
    darkMode: 'dark-first — `:root` = dark, `:not(.app-dark)` = light',
    font: 'Inter + JetBrains Mono',
    stack: 'Nuxt 3 + Tailwind CSS',
    components: {
      'Botões (UiButton)': [
        'Variantes: primary, secondary, success, danger, ghost, link',
        '3 tamanhos: sm / md / lg',
        'Loading com spinner',
        'Full-width',
        'Disabled',
      ],
      'Badges': [
        '7 variantes semânticas',
        'Dot indicator',
        'UiStatusBadgeGroup com ícones PrimeIcons',
        'Badges de domínio: Finalizado, Acompanhamento, Pendente, Vencido',
      ],
      'Inputs': [
        'Input text / email / número',
        'Select',
        'Textarea',
        'UiToggle',
        'Checkbox — todos dark-styled',
      ],
      'SegmentedControl (UiSegmentedControl)': [
        'Tamanhos: xs, sm, md, lg',
        'Full-width',
        'Indicador deslizante animado (cubic-bezier 0.25,1,0.5,1)',
        'Posicionamento via offsetWidth / offsetLeft',
      ],
      'Cards (UiCard / UiExpandableCard)': [
        'UiCard básico com header, body e footer',
        'UiExpandableCard: expand/collapse com animação de altura (Vue transition hooks)',
        'Cabeçalho com ícone e badge de status',
      ],
      'Shell & Layout': [
        'Sidebar azul sólida (#0099ff)',
        'Hover-expand (64 px → 248 px)',
        'UiStatusBadgeGroup no header',
        'UiSegmentedControl embutido no conteúdo',
        'Itens de lista com ícone + label',
      ],
      'Modais': [
        'FormModal dark-styled',
        'ConfirmModal',
        'DeleteModal com aviso de ação irreversível',
      ],
    },
  },

  viraverde: {
    prefix: 'vv',
    darkMode: '`.app-dark` class no elemento raiz',
    font: 'Inter + JetBrains Mono',
    stack: 'Vue 3 + Vite + Tailwind CSS',
    components: {
      'Botões (AppButton)': [
        'Variantes: primary, secondary, outlined, ghost, danger',
        '4 tamanhos: xs, sm, md, lg',
        'Loading com spinner',
        'Icon buttons (32×32, 36×36, 40×40)',
      ],
      'Badges (AppBadge)': [
        '6 variantes: success, warning, error, info, neutral, primary',
        'Dot indicator',
        'StatusBadge: mapeamento automático por domínio (livro, empresa, situação)',
      ],
      'Inputs': [
        'Text, email, CPF / documento',
        'Select',
        'Textarea',
        'Checkbox',
        'Switch',
        'Estados: error, disabled, com hint',
      ],
      'DataTable (AppDataTable)': [
        'Linhas selecionáveis',
        'Colunas ordenáveis',
        'Paginação',
        'Células com avatar (empresa)',
        'Badge de status inline',
      ],
      'Tabs (AppTabs)': [
        'Variante underline (padrão)',
        'Variante pills',
        'Variante boxed',
        'Todas interativas',
      ],
      'Modal (AppModal)': [
        'FormModal (nova empresa)',
        'ConfirmModal',
        'DeleteModal',
        'Teleport + Transition scale',
      ],
      'Shell (AppShell)': [
        'Sidebar colapsável (240 px → 64 px)',
        'Logo + dot de versão verde',
        'Seções de nav com submenus',
        'Cards de estatística no dashboard',
      ],
    },
  },

  changelog: {
    prefix: 'cf',
    darkMode: '`data-theme="dark"` attribute',
    font: 'Geist / Inter',
    stack: 'Vue 3 + Nuxt',
    components: {
      'Botões': ['Variantes padrão com severidades semânticas'],
      'Badges': ['Variantes semânticas de release (feature, fix, breaking, deprecated)'],
      'Inputs': ['Campos de texto, select e textarea padrão'],
      'LogCard': ['Card de entrada de changelog com versão, data, tipo e descrição'],
      'ProductCard': ['Card de produto com logo, nome e resumo'],
      'Attachment': ['Componente de arquivo/anexo com ícone e nome'],
      'Modais': ['Dialog padrão do sistema'],
    },
  },

  'portal-contador': {
    prefix: 'pc',
    darkMode: '`.app-dark` class no elemento raiz',
    font: 'Inter',
    stack: 'Vue 3 + Tailwind CSS',
    components: {
      'Botões': ['Variantes padrão com severidades semânticas'],
      'Badges': ['Variantes semânticas'],
      'Inputs': ['Campos de formulário padrão'],
      'Shell': ['Layout com sidebar e header'],
      'Tabs': ['Navegação por abas'],
      'DataTable': ['Tabela de documentos fiscais'],
      'Modal': ['Dialogs padrão'],
    },
  },
}

// ── Token parsing ────────────────────────────────────────────────────────────

function parseTokens(css: string): Map<string, string> {
  const tokens = new Map<string, string>()
  // Match CSS custom properties, skipping --ds-* showcase aliases
  const re = /(--(?!ds-)[\w-]+)\s*:\s*([^;{}]+);/g
  let m: RegExpExecArray | null
  while ((m = re.exec(css)) !== null) {
    const name = m[1].trim()
    const value = m[2].trim()
    // Last value wins (handles :root + .app-dark overrides — we want :root value)
    if (!tokens.has(name)) tokens.set(name, value)
  }
  return tokens
}

function categorize(name: string): string {
  const n = name.toLowerCase()
  if (n.includes('font'))                                          return 'Tipografia'
  if (/-(primary|secondary|tertiary|alternate|brand)/.test(n))   return 'Cores de Marca'
  if (/-(success|warning|error|info|danger|finalizado|acompanhamento|pendente|vencido)/.test(n)) return 'Cores de Status'
  if (/-(bg|surface|line|text|muted|faint|border|dk-|hover|label|icon)/.test(n))                 return 'Superfícies & Texto'
  if (n.includes('radius'))                                        return 'Raios & Bordas'
  if (/(-shadow|-ring|-glow)/.test(n))                            return 'Sombras & Efeitos'
  if (/-(sidebar|header|field|touch|transition|min-|w-)/.test(n)) return 'Layout & Motion'
  return 'Outros'
}

function groupTokens(tokens: Map<string, string>): Record<string, Array<[string, string]>> {
  const ORDER = ['Tipografia', 'Cores de Marca', 'Cores de Status', 'Superfícies & Texto', 'Raios & Bordas', 'Sombras & Efeitos', 'Layout & Motion', 'Outros']
  const groups: Record<string, Array<[string, string]>> = {}
  for (const cat of ORDER) groups[cat] = []

  for (const [name, value] of tokens) {
    const cat = categorize(name)
    groups[cat].push([name, value])
  }

  return Object.fromEntries(Object.entries(groups).filter(([, v]) => v.length > 0))
}

// ── Markdown generation ──────────────────────────────────────────────────────

function escapeValue(v: string): string {
  // Truncate very long values (e.g. font stack) for table readability
  return v.length > 80 ? v.slice(0, 77) + '…' : v
}

function generateMarkdown(ds: DesignSystemConfig, tokens: Map<string, string>, meta: DsMeta): string {
  const date = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })
  const grouped = groupTokens(tokens)
  const p = meta.prefix

  const lines: string[] = []

  // ── Header ──────────────────────────────────────────────────────────────
  lines.push(`# ${ds.name} Design System`)
  lines.push('')
  lines.push(`> ${ds.description}`)
  lines.push('')
  lines.push('---')
  lines.push('')

  // ── Overview ────────────────────────────────────────────────────────────
  lines.push('## Visão Geral')
  lines.push('')
  lines.push('| Campo | Valor |')
  lines.push('|---|---|')
  lines.push(`| **Versão** | \`${ds.version}\` |`)
  lines.push(`| **ID** | \`${ds.id}\` |`)
  lines.push(`| **Prefixo de tokens** | \`--${p}-*\` |`)
  lines.push(`| **Stack** | ${meta.stack} |`)
  lines.push(`| **Tipografia** | ${meta.font} |`)
  lines.push(`| **Dark mode** | ${meta.darkMode} |`)
  lines.push(`| **Cor primária** | \`${ds.colors.primary}\` |`)
  lines.push('')
  lines.push('---')
  lines.push('')

  // ── Quick color reference ────────────────────────────────────────────────
  lines.push('## Paleta de Cores')
  lines.push('')
  lines.push('| Token | Valor | Uso |')
  lines.push('|---|---|---|')
  const colorRows: [string, string, string][] = [
    ['primary',   ds.colors.primary,   'Cor principal da marca'],
    ['secondary', ds.colors.secondary, 'Variante escura / hover'],
    ['tertiary',  ds.colors.tertiary,  'Acento complementar'],
    ['alternate', ds.colors.alternate, 'Destaque alternativo'],
    ['success',   ds.colors.success,   'Estados positivos'],
    ['warning',   ds.colors.warning,   'Alertas e avisos'],
    ['error',     ds.colors.error,     'Erros e ações destrutivas'],
    ['info',      ds.colors.info,      'Informações neutras'],
  ]
  for (const [token, value, usage] of colorRows) {
    lines.push(`| \`--${p}-${token}\` | \`${value}\` | ${usage} |`)
  }
  lines.push('')
  lines.push('---')
  lines.push('')

  // ── Full token reference ─────────────────────────────────────────────────
  lines.push('## Referência Completa de Tokens')
  lines.push('')
  lines.push(`> Prefixo nativo: \`--${p}-*\`  ·  Total: **${tokens.size} tokens**`)
  lines.push('')

  for (const [groupName, entries] of Object.entries(grouped)) {
    lines.push(`### ${groupName}`)
    lines.push('')
    lines.push('| Token | Valor |')
    lines.push('|---|---|')
    for (const [name, value] of entries) {
      lines.push(`| \`${name}\` | \`${escapeValue(value)}\` |`)
    }
    lines.push('')
  }

  lines.push('---')
  lines.push('')

  // ── Component inventory ──────────────────────────────────────────────────
  lines.push('## Inventário de Componentes')
  lines.push('')

  for (const [component, variants] of Object.entries(meta.components)) {
    lines.push(`### ${component}`)
    lines.push('')
    for (const v of variants) {
      lines.push(`- ${v}`)
    }
    lines.push('')
  }

  lines.push('---')
  lines.push('')

  // ── Usage ────────────────────────────────────────────────────────────────
  lines.push('## Como Usar')
  lines.push('')
  lines.push('### 1. Importar os tokens')
  lines.push('')
  lines.push('```html')
  lines.push(`<link rel="stylesheet" href="/design-tokens/${ds.id}.css">`)
  lines.push('```')
  lines.push('')
  lines.push('### 2. Referenciar nos estilos')
  lines.push('')
  lines.push('```css')
  lines.push('.meu-botao {')
  lines.push(`  background:    var(--${p}-primary);`)
  lines.push(`  border-radius: var(--${p}-radius-sm);`)
  // Font token name differs per DS
  const fontToken = p === 'lv' ? `--${p}-font` : `--${p}-font-sans`
  lines.push(`  font-family:   var(${fontToken});`)
  lines.push('}')
  lines.push('```')
  lines.push('')
  lines.push('### 3. Ativar dark mode')
  lines.push('')
  if (meta.darkMode.includes('data-theme')) {
    lines.push('```html')
    lines.push('<html data-theme="dark">')
    lines.push('  <!-- seus componentes -->')
    lines.push('</html>')
    lines.push('```')
  } else if (meta.darkMode.includes('not(.app-dark)')) {
    lines.push('> **Atenção:** este DS é **dark-first**. O tema claro é ativado pela *ausência* de `.app-dark`.')
    lines.push('')
    lines.push('```html')
    lines.push('<!-- Light mode (padrão) — nenhuma classe necessária -->')
    lines.push('<div>conteúdo claro</div>')
    lines.push('')
    lines.push('<!-- Dark mode — adicionar .app-dark -->')
    lines.push('<div class="app-dark">conteúdo escuro</div>')
    lines.push('```')
  } else {
    lines.push('```html')
    lines.push('<!-- Light mode (padrão) -->')
    lines.push('<div>conteúdo</div>')
    lines.push('')
    lines.push('<!-- Dark mode -->')
    lines.push('<div class="app-dark">conteúdo</div>')
    lines.push('```')
  }
  lines.push('')
  lines.push('---')
  lines.push('')

  // ── Footer ───────────────────────────────────────────────────────────────
  lines.push(`*Exportado pelo [Sygecom Design System Showcase](/) em ${date}.*`)
  lines.push('')

  return lines.join('\n')
}

// ── Public composable ────────────────────────────────────────────────────────

export function useMarkdownExport() {
  const isExporting = ref(false)

  async function exportMarkdown(ds: DesignSystemConfig): Promise<void> {
    if (isExporting.value) return
    isExporting.value = true
    try {
      const res = await fetch(`/design-tokens/${ds.id}.css`)
      if (!res.ok) throw new Error(`Failed to fetch tokens for ${ds.id}`)
      const css = await res.text()

      const tokens = parseTokens(css)
      const meta = DS_META[ds.id] ?? {
        prefix:     ds.id.replace(/-/g, ''),
        darkMode:   '`.app-dark` class',
        font:       'Sans-serif',
        stack:      'Vue 3',
        components: {},
      }

      const markdown = generateMarkdown(ds, tokens, meta)
      triggerDownload(markdown, `${ds.id}-design-system.md`)
    }
    finally {
      isExporting.value = false
    }
  }

  return { exportMarkdown, isExporting }
}

function triggerDownload(content: string, filename: string): void {
  const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' })
  const url  = URL.createObjectURL(blob)
  const a    = document.createElement('a')
  a.href     = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
