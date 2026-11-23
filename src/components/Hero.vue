<template>
  <section class="relative pt-24 pb-16 sm:pt-28 md:pt-28 md:pb-24 overflow-x-clip bg-page">
    <div class="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 text-center">

      <!-- Release Eyebrow & Headline -->
      <div class="hero-enter-1">
        <a
          :href="PROJECT_CONFIG.github.releasesUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 text-xs font-medium text-ink-secondary hover:text-apple-blue transition-colors duration-150 ease-studio mb-5 focus-ring rounded-md px-2 py-1"
        >
          <span class="font-mono tabular-nums px-1.5 py-0.5 rounded bg-subtle border border-apple-border-light text-ink-primary">
            {{ release.version || 'vx.x.x' }}
          </span>
          <span>全新发布 · 查看更新日志</span>
          <ArrowUpRight class="w-3.5 h-3.5 text-ink-muted" :stroke-width="1.75" />
        </a>

        <h1 class="text-[36px] sm:text-[52px] md:text-[60px] font-semibold text-ink-primary tracking-[-0.025em] leading-[1.12] mb-5">
          只留下音乐<br />其余归于纯净
        </h1>
      </div>

      <!-- Slogan Description -->
      <p class="hero-enter-2 max-w-[38rem] mx-auto text-[15px] sm:text-[17px] text-ink-secondary font-normal leading-[1.7] text-balance mb-8">
        {{ PROJECT_CONFIG.subSlogan }}
      </p>

      <!-- Primary Action Buttons & Spec Metadata -->
      <div class="hero-enter-3">
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
          <a
            :href="release.installerFastUrl || release.installerUrl"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl text-sm font-medium text-white bg-apple-blue hover:bg-apple-blue-hover active:scale-[0.98] transition-[background-color,transform] duration-150 ease-studio shadow-surface-xs focus-ring group"
          >
            <Download class="w-4 h-4 transition-transform duration-150 ease-studio group-hover:translate-y-0.5" :stroke-width="1.75" />
            <span>免费下载 Windows 安装版</span>
            <span class="text-xs text-white/80 font-mono tabular-nums">({{ release.version || 'vx.x.x' }})</span>
          </a>

          <a
            :href="release.portableFastUrl || release.portableUrl"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl text-sm font-medium text-ink-primary bg-surface hover:bg-subtle border border-apple-border active:scale-[0.98] transition-[background-color,border-color,transform] duration-150 ease-studio shadow-surface-xs focus-ring group"
          >
            <FolderArchive class="w-4 h-4 text-ink-secondary group-hover:text-ink-primary transition-colors duration-150 ease-studio" :stroke-width="1.75" />
            <span>免安装绿色便携版 (.exe)</span>
          </a>
        </div>

        <!-- Clean Metadata Specs (no dangling bullets on mobile wraps) -->
        <ul class="inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-0 text-xs text-ink-muted tabular-nums mb-10 md:mb-12">
          <li class="whitespace-nowrap sm:after:content-['·'] sm:after:mx-3 sm:after:text-ink-muted/60">
            适用于 Windows 10 / 11 (64位)
          </li>
          <li class="whitespace-nowrap sm:after:content-['·'] sm:after:mx-3 sm:after:text-ink-muted/60">
            100% 永久免费开源
          </li>
          <li class="whitespace-nowrap sm:after:content-['·'] sm:after:mx-3 sm:after:text-ink-muted/60">
            0 商业广告与弹窗
          </li>
          <li class="whitespace-nowrap">
            安装包约 {{ release.size || 'xx.xx MB' }}
          </li>
        </ul>
      </div>

      <!-- Real Client 3D Showcase Carousel -->
      <div class="hero-enter-4">
        <Hero3DCarousel />
      </div>

    </div>
  </section>
</template>

<script setup>
import { PROJECT_CONFIG } from '../config/project'
import { Download, FolderArchive, ArrowUpRight } from 'lucide-vue-next'
import Hero3DCarousel from './Hero3DCarousel.vue'

defineProps({
  release: {
    type: Object,
    default: () => ({})
  }
})
</script>
