<template>
  <section class="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden bg-studio-ambient">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      
      <!-- Top Subtle Micro-Badge (Clean version badge) -->
      <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface border border-apple-border shadow-apple-subtle text-ink-primary text-xs font-medium mb-8">
        <span class="w-1.5 h-1.5 rounded-full bg-apple-blue"></span>
        <span>全新发布 {{ release.version || 'v3.4.0' }}</span>
      </div>

      <!-- Main Headline with Generous Spacing -->
      <h1 class="text-4xl sm:text-6xl md:text-7xl font-semibold text-ink-primary tracking-tight leading-[1.1] mb-6">
        只留下音乐<br class="hidden sm:inline" />
        其余归于纯净
      </h1>

      <!-- Slogan Description -->
      <p class="max-w-2xl mx-auto text-base sm:text-lg text-ink-secondary font-normal leading-relaxed mb-10">
        {{ PROJECT_CONFIG.subSlogan }}
      </p>

      <!-- Primary Action Buttons (Apple Style) -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
        <!-- Main Download CTA Button -->
        <a 
          :href="release.installerFastUrl || release.installerUrl"
          class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-medium text-white bg-apple-blue hover:bg-apple-blue-hover active:scale-[0.98] transition-all duration-200 shadow-apple-button group"
        >
          <Download class="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          <span>免费下载 Windows 安装版</span>
          <span class="text-xs text-blue-100 font-mono">({{ release.version || 'v3.4.0' }})</span>
        </a>

        <!-- Portable & More Options Link -->
        <a 
          :href="release.portableFastUrl || release.portableUrl"
          class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-ink-primary bg-surface hover:bg-subtle border border-apple-border active:scale-[0.98] transition-all shadow-apple-subtle group"
        >
          <FolderArchive class="w-4 h-4 text-ink-secondary group-hover:text-ink-primary transition-colors" />
          <span>免安装绿色便携版 (.exe)</span>
        </a>
      </div>

      <!-- Minimalist Metadata Footnote -->
      <div class="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-ink-tertiary mb-20">
        <span>适用于 Windows 10 / 11 (64位)</span>
        <span>•</span>
        <span>100% 永久免费开源</span>
        <span>•</span>
        <span>0 商业广告与弹窗</span>
        <span>•</span>
        <span>安装包约 {{ release.size || '82.8 MB' }}</span>
      </div>

      <!-- Real Client Suspended App Mockup (Border-free Soft Floating Shadow) -->
      <div class="relative max-w-5xl mx-auto">
        <div class="relative rounded-2xl overflow-hidden bg-white mockup-shadow transition-transform duration-500 hover:scale-[1.005]">
          <img 
            src="/home.png" 
            alt="概念音乐 Desktop 软件真实界面" 
            class="w-full h-auto object-cover block select-none"
            loading="eager"
          />
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { PROJECT_CONFIG } from '../config/project'
import { Download, FolderArchive } from 'lucide-vue-next'

defineProps({
  release: {
    type: Object,
    default: () => ({})
  }
})
</script>
