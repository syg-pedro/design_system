import { logverdeConfig } from './logverde/config'
import { srmConfig } from './srm/config'
import { changelogConfig } from './changelog/config'
import type { DesignSystemConfig } from './types'

export const designSystems: DesignSystemConfig[] = [
  logverdeConfig,
  srmConfig,
  changelogConfig,
]

export function getDesignSystem(id: string): DesignSystemConfig | undefined {
  return designSystems.find(ds => ds.id === id)
}

export type { DesignSystemConfig }
