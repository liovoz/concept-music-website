<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md border-b border-white/10"
    :class="isScrolled ? 'bg-[#080c14]/85 py-3 shadow-xl shadow-black/30' : 'bg-[#080c14]/40 py-4'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <!-- Logo -->
      <a href="#" class="flex items-center gap-3 group">
        <div class="relative w-9 h-9 rounded-xl flex items-center justify-center p-1 bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform duration-300">
          <img src="/logo.svg" alt="Concept Music Logo" class="w-full h-full object-contain" />
        </div>
        <div class="flex flex-col">
          <div class="flex items-center gap-2">
            <span class="font-bold text-lg text-white tracking-wide group-hover:text-blue-400 transition-colors">概念音乐</span>
            <span class="text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 font-medium border border-blue-500/30">
              {{ release.version || 'v3.4.0' }}
            </span>
          </div>
          <span class="text-[10px] text-slate-400 -mt-0.5 font-mono">Concept Music</span>
        </div>
      </a>

      <!-- Desktop Nav Links -->
      <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
        <a href="#features" class="hover:text-white transition-colors">核心特性</a>
        <a href="#screenshots" class="hover:text-white transition-colors">界面画廊</a>
        <a href="#download" class="hover:text-white transition-colors">下载中心</a>
        <a href="#faq" class="hover:text-white transition-colors">常见问题</a>
      </nav>

      <!-- Right CTAs -->
      <div class="hidden sm:flex items-center gap-3">
        <a 
          :href="PROJECT_CONFIG.github.repoUrl" 
          target="_blank" 
          rel="noopener noreferrer"
          class="flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 transition-all hover:border-slate-500"
        >
          <Github class="w-4 h-4" />
          <span>GitHub 开源</span>
        </a>

        <a 
          href="#download"
          class="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-500/20 transition-all hover:scale-105 active:scale-95"
        >
          <Download class="w-3.5 h-3.5" />
          <span>立即下载</span>
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        @click="mobileOpen = !mobileOpen"
        class="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
        aria-label="Toggle Menu"
      >
        <Menu v-if="!mobileOpen" class="w-6 h-6" />
        <X v-else class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile Drawer -->
    <div 
      v-if="mobileOpen"
      class="md:hidden px-4 pt-3 pb-6 bg-[#0c121e] border-b border-slate-800 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200"
    >
      <a 
        href="#features" 
        @click="mobileOpen = false" 
        class="block py-2 text-sm text-slate-300 hover:text-blue-400 font-medium"
      >
        核心特性
      </a>
      <a 
        href="#screenshots" 
        @click="mobileOpen = false" 
        class="block py-2 text-sm text-slate-300 hover:text-blue-400 font-medium"
      >
        界面画廊
      </a>
      <a 
        href="#download" 
        @click="mobileOpen = false" 
        class="block py-2 text-sm text-slate-300 hover:text-blue-400 font-medium"
      >
        下载中心
      </a>
      <a 
        href="#faq" 
        @click="mobileOpen = false" 
        class="block py-2 text-sm text-slate-300 hover:text-blue-400 font-medium"
      >
        常见问题
      </a>

      <div class="pt-3 flex flex-col gap-2">
        <a 
          :href="PROJECT_CONFIG.github.repoUrl" 
          target="_blank" 
          class="flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm text-slate-200 bg-slate-800 border border-slate-700"
        >
          <Github class="w-4 h-4" />
          <span>GitHub 仓库</span>
        </a>
        <a 
          href="#download" 
          @click="mobileOpen = false"
          class="flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 shadow-lg shadow-blue-600/30"
        >
          <Download class="w-4 h-4" />
          <span>立即下载 ({{ release.version || 'v3.4.0' }})</span>
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { PROJECT_CONFIG } from '../config/project'
import { Github, Download, Menu, X } from 'lucide-vue-next'

defineProps({
  release: {
    type: Object,
    default: () => ({})
  }
})

const isScrolled = ref(false)
const mobileOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
