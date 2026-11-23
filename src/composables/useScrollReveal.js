import { ref, onMounted, onUnmounted } from 'vue'

/**
 * One-shot scroll reveal helper using IntersectionObserver.
 * Respects prefers-reduced-motion by revealing immediately.
 */
export function useScrollReveal(options = {}) {
  const targetRef = ref(null)
  const isVisible = ref(false)
  let observer = null

  onMounted(() => {
    if (typeof window === 'undefined') {
      isVisible.value = true
      return
    }

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      isVisible.value = true
      return
    }

    if (!targetRef.value) {
      isVisible.value = true
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            isVisible.value = true
            observer?.disconnect()
            observer = null
            break
          }
        }
      },
      {
        threshold: options.threshold ?? 0.12,
        rootMargin: options.rootMargin ?? '0px 0px -48px 0px',
      }
    )

    observer.observe(targetRef.value)
  })

  onUnmounted(() => {
    observer?.disconnect()
    observer = null
  })

  return {
    targetRef,
    isVisible,
  }
}
