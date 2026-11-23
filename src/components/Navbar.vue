<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-200 ease-studio"
    :class="[
      isScrolled || mobileOpen
        ? 'glass-apple-nav border-apple-border-light shadow-surface-xs'
        : 'bg-transparent border-transparent'
    ]"
  >
    <div class="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
      <!-- Logo & Brand (Official Packaged Icon) -->
      <a href="#" class="flex items-center gap-2.5 focus-ring rounded-lg py-1 pr-1.5">
        <div class="w-7 h-7 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0 ring-1 ring-black/[0.06] bg-surface">
          <img src="/logo.svg" alt="概念音乐" class="w-full h-full object-contain" />
        </div>
        <div class="flex items-center gap-2">
          <span class="font-semibold text-[15px] text-ink-primary tracking-tight">
            概念音乐
          </span>
          <span class="text-xs px-2 py-0.5 rounded-md font-mono tabular-nums text-ink-muted bg-subtle border border-apple-border-light">
            {{ release.version || 'vx.x.x' }}
          </span>
        </div>
      </a>

      <!-- Desktop Nav Links -->
      <nav aria-label="主导航" class="hidden md:flex items-center gap-8 text-[13px] font-medium">
        <a
          href="#download"
          class="relative py-1 transition-colors duration-150 ease-studio focus-ring rounded-md px-1"
          :class="activeSection === 'download' ? 'text-ink-primary' : 'text-ink-secondary hover:text-ink-primary'"
        >
          <span>下载中心</span>
          <span
            v-if="activeSection === 'download'"
            aria-hidden="true"
            class="absolute inset-x-1 -bottom-[15px] h-[2px] rounded-full bg-apple-blue"
          ></span>
        </a>
        <a
          href="#faq"
          class="relative py-1 transition-colors duration-150 ease-studio focus-ring rounded-md px-1"
          :class="activeSection === 'faq' ? 'text-ink-primary' : 'text-ink-secondary hover:text-ink-primary'"
        >
          <span>常见答疑</span>
          <span
            v-if="activeSection === 'faq'"
            aria-hidden="true"
            class="absolute inset-x-1 -bottom-[15px] h-[2px] rounded-full bg-apple-blue"
          ></span>
        </a>
        <a
          :href="PROJECT_CONFIG.github.repoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="py-1 text-ink-secondary hover:text-ink-primary transition-colors duration-150 ease-studio focus-ring rounded-md px-1"
        >
          开源仓库
        </a>
      </nav>

      <!-- Right Action Items -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- GitHub Repo Link -->
        <a
          :href="PROJECT_CONFIG.github.repoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="hidden sm:inline-flex items-center gap-1.5 h-8 px-3 rounded-[10px] text-[13px] font-medium text-ink-secondary hover:text-ink-primary hover:bg-subtle transition-colors duration-150 ease-studio focus-ring"
        >
          <Github class="w-4 h-4" :stroke-width="1.75" />
          <span>GitHub</span>
        </a>

        <!-- Fast Download Button -->
        <a
          href="#download"
          class="inline-flex items-center justify-center h-8 px-4 rounded-[10px] text-[13px] font-medium text-white bg-ink-primary hover:bg-neutral-800 active:scale-[0.98] transition-[background-color,transform] duration-150 ease-studio shadow-surface-xs focus-ring"
        >
          <span>免费下载</span>
        </a>

        <!-- Mobile Menu Toggle -->
        <button
          type="button"
          @click="mobileOpen = !mobileOpen"
          class="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-[10px] text-ink-secondary hover:text-ink-primary hover:bg-subtle transition-colors duration-150 ease-studio focus-ring"
          :aria-expanded="mobileOpen"
          aria-controls="mobile-nav-drawer"
          aria-label="切换导航菜单"
        >
          <Menu v-if="!mobileOpen" class="w-[18px] h-[18px]" :stroke-width="1.75" />
          <X v-else class="w-[18px] h-[18px]" :stroke-width="1.75" />
        </button>
      </div>
    </div>

    <!-- Mobile Backdrop -->
    <Transition name="backdrop-fade">
      <div
        v-if="mobileOpen"
        class="md:hidden fixed inset-0 top-14 bg-black/15 z-40"
        aria-hidden="true"
        @click="mobileOpen = false"
      ></div>
    </Transition>

    <!-- Mobile Drawer -->
    <Transition name="drawer-slide">
      <div
        v-if="mobileOpen"
        id="mobile-nav-drawer"
        class="md:hidden relative z-50 px-5 py-5 bg-surface/95 backdrop-blur-xl border-b border-apple-border-light shadow-surface-md space-y-4"
      >
        <nav aria-label="移动端导航" class="flex flex-col space-y-1 text-sm font-medium">
          <a
            href="#download"
            @click="mobileOpen = false"
            class="h-10 px-3 rounded-[10px] flex items-center justify-between transition-colors duration-150 ease-studio focus-ring"
            :class="activeSection === 'download' ? 'bg-subtle text-ink-primary' : 'text-ink-secondary hover:text-ink-primary hover:bg-subtle/70'"
          >
            <span>下载中心</span>
          </a>
          <a
            href="#faq"
            @click="mobileOpen = false"
            class="h-10 px-3 rounded-[10px] flex items-center justify-between transition-colors duration-150 ease-studio focus-ring"
            :class="activeSection === 'faq' ? 'bg-subtle text-ink-primary' : 'text-ink-secondary hover:text-ink-primary hover:bg-subtle/70'"
          >
            <span>常见答疑</span>
          </a>
          <a
            :href="PROJECT_CONFIG.github.repoUrl"
            target="_blank"
            rel="noopener noreferrer"
            @click="mobileOpen = false"
            class="h-10 px-3 rounded-[10px] flex items-center justify-between text-ink-secondary hover:text-ink-primary hover:bg-subtle/70 transition-colors duration-150 ease-studio focus-ring"
          >
            <span>开源仓库</span>
            <Github class="w-4 h-4 text-ink-muted" :stroke-width="1.75" />
          </a>
        </nav>

        <div class="pt-4 border-t border-apple-border-light">
          <a
            href="#download"
            @click="mobileOpen = false"
            class="w-full h-10 inline-flex items-center justify-center gap-2 rounded-[10px] text-sm font-medium text-white bg-ink-primary hover:bg-neutral-800 active:scale-[0.98] transition-[background-color,transform] duration-150 ease-studio focus-ring"
          >
            <span>立即下载</span>
            <span class="text-xs font-mono tabular-nums text-white/75">{{ release.version || 'vx.x.x' }}</span>
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { PROJECT_CONFIG } from '../config/project'
import { Github, Menu, X } from 'lucide-vue-next'

defineProps({
  release: {
    type: Object,
    default: () => ({})
  }
})

const isScrolled = ref(false)
const mobileOpen = ref(false)
const activeSection = ref('')
let sectionObserver = null

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
  if (window.scrollY < 160) {
    activeSection.value = ''
  }
}

const handleKeydown = (e) => {
  if (e.key === 'Escape' && mobileOpen.value) {
    mobileOpen.value = false
  }
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('keydown', handleKeydown)

  if (typeof IntersectionObserver !== 'undefined') {
    const sections = ['download', 'faq']
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (sections.length > 0) {
      sectionObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              activeSection.value = entry.target.id
            }
          }
        },
        {
          rootMargin: '-35% 0px -55% 0px',
          threshold: 0
        }
      )
      sections.forEach((el) => sectionObserver.observe(el))
    }
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', handleKeydown)
  sectionObserver?.disconnect()
  sectionObserver = null
})
</script>

<style scoped>
.drawer-slide-enter-active,
.drawer-slide-leave-active {
  transition:
    opacity 180ms cubic-bezier(0.22, 1, 0.36, 1),
    transform 180ms cubic-bezier(0.22, 1, 0.36, 1);
}
.drawer-slide-enter-from,
.drawer-slide-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

.backdrop-fade-enter-active,
.backdrop-fade-leave-active {
  transition: opacity 180ms cubic-bezier(0.22, 1, 0.36, 1);
}
.backdrop-fade-enter-from,
.backdrop-fade-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .drawer-slide-enter-active,
  .drawer-slide-leave-active,
  .backdrop-fade-enter-active,
  .backdrop-fade-leave-active {
    transition-duration: 0.01ms;
  }
}
</style>
