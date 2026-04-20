import { designSystems, getDesignSystem } from '~/design-systems/index'
import type { DesignSystemConfig } from '~/design-systems/types'

const activeId = ref<string>('logverde')
const darkMode = ref<boolean>(false)

export function useDesignSystem() {
  const systems = computed(() => designSystems)

  const active = computed<DesignSystemConfig | undefined>(
    () => getDesignSystem(activeId.value)
  )

  function setActive(id: string) {
    activeId.value = id
    if (import.meta.client) {
      localStorage.setItem('ds-active', id)
    }
  }

  function toggleDark() {
    darkMode.value = !darkMode.value
    if (import.meta.client) {
      document.documentElement.classList.toggle('app-dark', darkMode.value)
      localStorage.setItem('ds-dark', String(darkMode.value))
    }
  }

  function init() {
    if (!import.meta.client) return
    const saved = localStorage.getItem('ds-active')
    if (saved && getDesignSystem(saved)) activeId.value = saved
    const savedDark = localStorage.getItem('ds-dark')
    if (savedDark === 'true') {
      darkMode.value = true
      document.documentElement.classList.add('app-dark')
    }
  }

  return { systems, active, activeId, darkMode, setActive, toggleDark, init }
}
