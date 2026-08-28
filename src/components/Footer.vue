<template>
  <footer class="bg-subtle border-t border-apple-border-light py-16 text-ink-secondary text-xs">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        
        <!-- Brand Info -->
        <div class="md:col-span-5 space-y-3">
          <div class="flex items-center gap-2.5">
            <div class="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center shadow-apple-subtle">
              <img src="/logo.svg" alt="概念音乐" class="w-full h-full object-contain" />
            </div>
            <span class="font-bold text-sm text-ink-primary">概念音乐</span>
            <span class="text-[10px] text-ink-tertiary font-mono">Concept Music</span>
          </div>
          <p class="text-ink-secondary text-xs max-w-sm leading-relaxed">
            基于 Electron 与 Vue 3 构建的 Windows 现代化高保真桌面音乐播放器。自由纯净，畅享 Hi-Res 与 SQ 无损天籁。
          </p>
        </div>

        <!-- Fast Navigation -->
        <div class="md:col-span-3 space-y-3">
          <div class="font-medium text-ink-primary">导航</div>
          <ul class="space-y-2">
            <li><a href="#download" class="hover:text-ink-primary transition-colors">Windows 下载中心</a></li>
            <li><a href="#faq" class="hover:text-ink-primary transition-colors">常见答疑</a></li>
            <li><a :href="PROJECT_CONFIG.github.repoUrl" target="_blank" class="hover:text-ink-primary transition-colors">GitHub 开源仓库</a></li>
          </ul>
        </div>

        <!-- Open Source Info -->
        <div class="md:col-span-4 space-y-3">
          <div class="font-medium text-ink-primary">开源生态</div>
          <p class="leading-relaxed text-ink-secondary">
            本项目基于 MIT 协议完全开源，不含任何商业广告与隐私追踪。
          </p>
          <div class="flex items-center gap-3 pt-1 text-ink-secondary">
            <a 
              :href="PROJECT_CONFIG.github.repoUrl" 
              target="_blank" 
              class="hover:text-ink-primary transition-colors"
            >
              GitHub 仓库
            </a>
            <span>•</span>
            <a 
              :href="PROJECT_CONFIG.github.releasesUrl" 
              target="_blank" 
              class="hover:text-ink-primary transition-colors"
            >
              更新日志
            </a>
            <span>•</span>
            <a 
              :href="PROJECT_CONFIG.github.issuesUrl" 
              target="_blank" 
              class="hover:text-ink-primary transition-colors"
            >
              问题反馈
            </a>
          </div>
        </div>

      </div>

      <!-- Bottom copyright -->
      <div class="pt-8 border-t border-apple-border-light flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-ink-tertiary">
        <div>
          © {{ currentYear }} 概念音乐 (Concept Music). Released under the MIT License.
        </div>
        <div>
          Designed for pure acoustic listening.
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { PROJECT_CONFIG } from '../config/project'

const currentYear = computed(() => new Date().getFullYear())
</script>
