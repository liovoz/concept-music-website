<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b"
    :class="[
      isScrolled 
        ? 'glass-apple-nav border-apple-border-light shadow-apple-subtle' 
        : 'bg-transparent border-transparent'
    ]"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
      <!-- Logo & Brand (Official Packaged Icon) -->
      <a href="#" class="flex items-center gap-2.5 group">
        <div class="w-7 h-7 rounded-full overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform shadow-apple-subtle">
          <img src="/logo.svg" alt="概念音乐" class="w-full h-full object-contain" />
        </div>
        <div class="flex items-center gap-2">
          <span class="font-bold text-base text-ink-primary tracking-tight">
            概念音乐
          </span>
          <span class="text-[10px] px-1.5 py-0.5 rounded-full font-mono font-medium bg-subtle text-ink-tertiary border border-apple-border-light">
            {{ release.version || 'v3.4.0' }}
          </span>
        </div>
      </a>

      <!-- Desktop Nav Links -->
      <nav class="hidden md:flex items-center gap-8 text-xs font-medium text-ink-secondary">
        <a href="#download" class="hover:text-ink-primary transition-colors">下载中心</a>
        <a href="#faq" class="hover:text-ink-primary transition-colors">常见答疑</a>
        <a :href="PROJECT_CONFIG.github.repoUrl" target="_blank" rel="noopener noreferrer" class="hover:text-ink-primary transition-colors">开源仓库</a>
      </nav>

      <!-- Right Action Items -->
      <div class="flex items-center gap-2.5 sm:gap-3">
        <!-- GitHub Repo Link -->
        <a 
          :href="PROJECT_CONFIG.github.repoUrl" 
          target="_blank" 
          rel="noopener noreferrer"
          class="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-ink-secondary hover:text-ink-primary hover:bg-subtle transition-colors"
        >
          <Github class="w-3.5 h-3.5" />
          <span>GitHub</span>
        </a>

        <!-- Fast Download Pill Button -->
        <a 
          href="#download"
          class="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-medium tracking-tight text-white bg-ink-primary hover:bg-neutral-800 transition-all shadow-apple-subtle active:scale-95"
        >
          <span>免费下载</span>
        </a>

        <!-- Mobile Menu Toggle -->
        <button 
          @click="mobileOpen = !mobileOpen"
          class="md:hidden p-1.5 rounded-lg text-ink-secondary hover:text-ink-primary"
          aria-label="Open menu"
        >
          <Menu v-if="!mobileOpen" class="w-5 h-5" />
          <X v-else class="w-5 h-5" />
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <div 
      v-if="mobileOpen"
      class="md:hidden px-6 py-6 bg-white/95 backdrop-blur-2xl border-b border-apple-border-light space-y-4 shadow-xl"
    >
      <div class="flex flex-col space-y-3 text-sm font-medium text-ink-secondary">
        <a href="#download" @click="mobileOpen = false" class="py-1 hover:text-ink-primary transition-colors">下载中心</a>
        <a href="#faq" @click="mobileOpen = false" class="py-1 hover:text-ink-primary transition-colors">常见答疑</a>
        <a :href="PROJECT_CONFIG.github.repoUrl" target="_blank" @click="mobileOpen = false" class="py-1 hover:text-ink-primary transition-colors">开源仓库</a>
      </div>

      <div class="pt-4 border-t border-apple-border-light flex items-center justify-between">
        <a 
          :href="PROJECT_CONFIG.github.repoUrl" 
          target="_blank"
          class="flex items-center gap-1.5 text-xs text-ink-secondary"
        >
          <Github class="w-4 h-4" />
          <span>开源仓库</span>
        </a>
        <a 
          href="#download" 
          @click="mobileOpen = false"
          class="px-4 py-1.5 rounded-full text-xs font-medium text-white bg-ink-primary"
        >
          立即下载 ({{ release.version || 'v3.4.0' }})
        </a>
      </div>
    </div>
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

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
