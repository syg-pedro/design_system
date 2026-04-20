
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  DsButtons: typeof import("../../components/ds/DsButtons.vue")['default']
  DsCards: typeof import("../../components/ds/DsCards.vue")['default']
  DsColorPalette: typeof import("../../components/ds/DsColorPalette.vue")['default']
  DsEmptyState: typeof import("../../components/ds/DsEmptyState.vue")['default']
  DsInputs: typeof import("../../components/ds/DsInputs.vue")['default']
  DsModals: typeof import("../../components/ds/DsModals.vue")['default']
  DsNavigation: typeof import("../../components/ds/DsNavigation.vue")['default']
  DsSpacing: typeof import("../../components/ds/DsSpacing.vue")['default']
  DsTable: typeof import("../../components/ds/DsTable.vue")['default']
  DsTags: typeof import("../../components/ds/DsTags.vue")['default']
  DsTypography: typeof import("../../components/ds/DsTypography.vue")['default']
  DsChangelogCfAttachment: typeof import("../../components/ds/changelog/CfAttachment.vue")['default']
  DsChangelogCfBadges: typeof import("../../components/ds/changelog/CfBadges.vue")['default']
  DsChangelogCfButtons: typeof import("../../components/ds/changelog/CfButtons.vue")['default']
  DsChangelogCfColorPalette: typeof import("../../components/ds/changelog/CfColorPalette.vue")['default']
  DsChangelogCfInputs: typeof import("../../components/ds/changelog/CfInputs.vue")['default']
  DsChangelogCfLogCard: typeof import("../../components/ds/changelog/CfLogCard.vue")['default']
  DsChangelogCfModals: typeof import("../../components/ds/changelog/CfModals.vue")['default']
  DsChangelogCfProductCard: typeof import("../../components/ds/changelog/CfProductCard.vue")['default']
  DsChangelogCfSpacing: typeof import("../../components/ds/changelog/CfSpacing.vue")['default']
  DsChangelogCfTypography: typeof import("../../components/ds/changelog/CfTypography.vue")['default']
  NuxtWelcome: typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  NuxtLayout: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  NuxtErrorBoundary: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  ClientOnly: typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  DevOnly: typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  NuxtLink: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  NuxtLoadingIndicator: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  NuxtTime: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  NuxtRouteAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  NuxtImg: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
  NuxtPicture: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
  NuxtPage: typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  NuxtIsland: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyDsButtons: LazyComponent<typeof import("../../components/ds/DsButtons.vue")['default']>
  LazyDsCards: LazyComponent<typeof import("../../components/ds/DsCards.vue")['default']>
  LazyDsColorPalette: LazyComponent<typeof import("../../components/ds/DsColorPalette.vue")['default']>
  LazyDsEmptyState: LazyComponent<typeof import("../../components/ds/DsEmptyState.vue")['default']>
  LazyDsInputs: LazyComponent<typeof import("../../components/ds/DsInputs.vue")['default']>
  LazyDsModals: LazyComponent<typeof import("../../components/ds/DsModals.vue")['default']>
  LazyDsNavigation: LazyComponent<typeof import("../../components/ds/DsNavigation.vue")['default']>
  LazyDsSpacing: LazyComponent<typeof import("../../components/ds/DsSpacing.vue")['default']>
  LazyDsTable: LazyComponent<typeof import("../../components/ds/DsTable.vue")['default']>
  LazyDsTags: LazyComponent<typeof import("../../components/ds/DsTags.vue")['default']>
  LazyDsTypography: LazyComponent<typeof import("../../components/ds/DsTypography.vue")['default']>
  LazyDsChangelogCfAttachment: LazyComponent<typeof import("../../components/ds/changelog/CfAttachment.vue")['default']>
  LazyDsChangelogCfBadges: LazyComponent<typeof import("../../components/ds/changelog/CfBadges.vue")['default']>
  LazyDsChangelogCfButtons: LazyComponent<typeof import("../../components/ds/changelog/CfButtons.vue")['default']>
  LazyDsChangelogCfColorPalette: LazyComponent<typeof import("../../components/ds/changelog/CfColorPalette.vue")['default']>
  LazyDsChangelogCfInputs: LazyComponent<typeof import("../../components/ds/changelog/CfInputs.vue")['default']>
  LazyDsChangelogCfLogCard: LazyComponent<typeof import("../../components/ds/changelog/CfLogCard.vue")['default']>
  LazyDsChangelogCfModals: LazyComponent<typeof import("../../components/ds/changelog/CfModals.vue")['default']>
  LazyDsChangelogCfProductCard: LazyComponent<typeof import("../../components/ds/changelog/CfProductCard.vue")['default']>
  LazyDsChangelogCfSpacing: LazyComponent<typeof import("../../components/ds/changelog/CfSpacing.vue")['default']>
  LazyDsChangelogCfTypography: LazyComponent<typeof import("../../components/ds/changelog/CfTypography.vue")['default']>
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
