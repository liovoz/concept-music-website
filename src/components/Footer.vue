<template>
  <footer class="bg-[#060a12] border-t border-slate-800/80 py-12 sm:py-16 text-slate-400 text-xs">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        <!-- Col 1: Brand Info -->
        <div class="md:col-span-5 space-y-4">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 p-1 flex items-center justify-center">
              <img src="/logo.svg" alt="Concept Music" class="w-full h-full object-contain" />
            </div>
            <div>
              <span class="font-bold text-base text-white">概念音乐</span>
              <span class="text-xs text-slate-500 font-mono block -mt-1">Concept Music</span>
            </div>
          </div>
          <p class="text-slate-400 text-xs max-w-sm leading-relaxed">
            基于 Electron 与 Vue 3 构建的高颜值 Windows 桌面音乐播放器。自由纯净，畅享 Hi-Res 与 SQ 无损天籁。
          </p>
          <div class="flex items-center gap-3 pt-2">
            <a 
              :href="PROJECT_CONFIG.github.repoUrl" 
              target="_blank" 
              class="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              title="GitHub 仓库"
            >
              <Github class="w-4 h-4" />
            </a>
            <a 
              :href="PROJECT_CONFIG.github.issuesUrl" 
              target="_blank" 
              class="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              title="问题与建议反馈"
            >
              <MessageSquareQuote class="w-4 h-4" />
            </a>
          </div>
        </div>

        <!-- Col 2: Fast Navigation -->
        <div class="md:col-span-3 space-y-3">
          <div class="text-xs font-bold uppercase tracking-wider text-slate-300">快速导航</div>
          <ul class="space-y-2 text-slate-400">
            <li><a href="#features" class="hover:text-blue-400 transition-colors">核心功能特性</a></li>
            <li><a href="#screenshots" class="hover:text-blue-400 transition-colors">软件界面展示</a></li>
            <li><a href="#download" class="hover:text-blue-400 transition-colors">Windows 下载中心</a></li>
            <li><a href="#faq" class="hover:text-blue-400 transition-colors">常见使用答疑</a></li>
          </ul>
        </div>

        <!-- Col 3: Developer & Open Source -->
        <div class="md:col-span-4 space-y-3">
          <div class="text-xs font-bold uppercase tracking-wider text-slate-300">开源与生态</div>
          <p class="text-slate-400 text-xs leading-relaxed">
            本项目基于 MIT 协议完全开源，代码透明、不收集任何敏感数据，欢迎在 GitHub 提交 Pull Request 与 Star 支持。
          </p>
          <div class="flex flex-wrap gap-2 pt-1">
            <span class="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300 font-mono">Vue 3</span>
            <span class="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300 font-mono">Electron 30+</span>
            <span class="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300 font-mono">Vite</span>
            <span class="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300 font-mono">Tailwind CSS</span>
            <span class="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300 font-mono">MIT License</span>
          </div>
        </div>
      </div>

      <!-- Bottom copyright -->
      <div class="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
        <div>
          © {{ currentYear }} 概念音乐 (Concept Music). Released under the MIT License.
        </div>
        <div class="flex items-center gap-4">
          <a :href="PROJECT_CONFIG.github.repoUrl" target="_blank" class="hover:text-slate-400">GitHub</a>
          <span>·</span>
          <a :href="PROJECT_CONFIG.github.releasesUrl" target="_blank" class="hover:text-slate-400">Releases</a>
          <span>·</span>
          <a :href="PROJECT_CONFIG.github.issuesUrl" target="_blank" class="hover:text-slate-400">Issues</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { PROJECT_CONFIG } from '../config/project'
import { Github, MessageSquareQuote } from 'lucide-vue-next'

const currentYear = computed(() => new Date().getFullYear())
</script>
