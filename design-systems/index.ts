import { logverdeConfig } from './logverde/config'
import { srmConfig } from './srm/config'
import { changelogConfig } from './changelog/config'
import { portalContadorConfig } from './portal-contador/config'
import type { DesignSystemConfig } from './types'

export const designSystems: DesignSystemConfig[] = [
  logverdeConfig,
  srmConfig,
  changelogConfig,
  portalContadorConfig,
]

export function getDesignSystem(id: string): DesignSystemConfig | undefined {
  return designSystems.find(ds => ds.id === id)
}

export type { DesignSystemConfig }
