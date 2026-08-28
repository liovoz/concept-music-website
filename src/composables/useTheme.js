import { ref } from 'vue'

const isDark = ref(false)

export function useTheme() {
  const initTheme = () => {
    const root = document.documentElement
    root.classList.remove('dark')
    root.classList.add('light')
    isDark.value = false
  }

  return {
    isDark,
    initTheme,
  }
}
