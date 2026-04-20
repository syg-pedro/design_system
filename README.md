# Sygecom Design System

Showcase multi-sistema dos design systems Sygecom. Nuxt 3 + Vue 3, empacotado para mobile com Capacitor v7.

## Sistemas incluídos

| ID | Nome | Cor | Stack de origem |
|---|---|---|---|
| `logverde` | LogVerde | `#0094d9` | Nuxt / Vue 3 |
| `srm` | SRM | `#7c3aed` | Vue 3 |
| `changelog` | Changelog | `#79b83e` | Nuxt / Vue 3, `--ff-*` tokens |
| `portal-contador` | Portal do Contador | `#2563eb` | Vue 3 + Tailwind |

## Requisitos

- Node 20+
- npm 10+

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Build estático

```bash
npm run generate
# saída em .output/public/
```

## Docker

```bash
# build
docker build -t sygecom-ds .

# rodar
docker run -p 8080:80 sygecom-ds
# acesse http://localhost:8080
```

## Mobile (Capacitor)

```bash
# após gerar o build estático
npm run generate
npx cap sync

# abrir no Android Studio
npm run cap:android

# abrir no Xcode
npm run cap:ios
```

> O `webDir` do Capacitor aponta para `.output/public` (saída do `nuxt generate`).

## Estrutura

```
design-systems/
  {id}/
    config.ts       # metadados do sistema (nome, cores, versão)
    tokens.css      # CSS custom properties --{prefix}-*

components/ds/
  changelog/        # Cf*.vue  — showcase Changelog
  portal-contador/  # Pc*.vue  — showcase Portal do Contador

public/design-tokens/
  {id}.css          # tokens injetados dinamicamente por rota

pages/
  index.vue         # grade de seleção de sistemas
  [system]/
    index.vue       # layout com sidebar + tabs (Tokens / Componentes / Padrões)
```

## Adicionar um novo design system

1. Criar `design-systems/{id}/config.ts` e `design-systems/{id}/tokens.css`
2. Registrar em `design-systems/index.ts`
3. Copiar tokens para `public/design-tokens/{id}.css`
4. Criar componentes de showcase em `components/ds/{id}/`
5. Adicionar `is{Nome}` computed e bloco `<template v-if>` em `pages/[system]/index.vue`
