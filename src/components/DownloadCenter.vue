<template>
  <section
    id="download"
    ref="sectionRef"
    class="scroll-mt-14 py-20 md:py-24 relative border-t border-apple-border-light bg-page"
  >
    <div class="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

      <!-- Editorial Section Header (Left Title + Right Baseline Release Meta) -->
      <div
        class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-8 mb-10 md:mb-12 reveal-block"
        :class="{ 'is-visible': isVisible }"
      >
        <div>
          <p class="text-xs font-mono text-ink-muted mb-2">
            Download &amp; packages
          </p>
          <h2 class="text-3xl sm:text-[40px] font-semibold text-ink-primary tracking-[-0.02em] leading-[1.15]">
            即刻开启高保真之旅
          </h2>
        </div>

        <div class="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm text-ink-secondary lg:justify-end">
          <span class="whitespace-nowrap">
            最新版本 <strong class="font-mono tabular-nums font-medium text-ink-primary">{{ release.version || 'vx.x.x' }}</strong>
          </span>
          <span class="text-ink-muted/60" aria-hidden="true">·</span>
          <span class="whitespace-nowrap font-mono tabular-nums text-xs sm:text-sm">
            发布于 {{ release.publishedAt || '20xx-xx-xx' }}
          </span>
          <span class="text-ink-muted/60" aria-hidden="true">·</span>
          <span class="whitespace-nowrap">永久免费</span>
        </div>
      </div>

      <!-- Unified Package Group -->
      <div class="space-y-5">

        <!-- Primary Installer Showcase Card -->
        <div
          class="p-6 sm:p-8 lg:p-10 rounded-[20px] bg-ink-primary text-[#F5F5F7] shadow-surface-lg border border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8 reveal-block reveal-delay-1"
          :class="{ 'is-visible': isVisible }"
        >
          <div class="space-y-3.5 max-w-xl text-left">
            <div class="flex flex-wrap items-center gap-2 text-xs font-mono tabular-nums text-[#B4B4BA]">
              <span class="inline-flex items-center gap-1.5 whitespace-nowrap px-2.5 py-1 rounded-md bg-white/[0.08] border border-white/[0.08] text-[#F5F5F7]">
                <Laptop class="w-3.5 h-3.5" :stroke-width="1.75" />
                <span>Windows 10 / 11 (64位)</span>
              </span>
              <span class="whitespace-nowrap px-2.5 py-1 rounded-md bg-white/[0.06] text-[#B4B4BA]">
                安装包约 {{ release.size || 'xx.xx MB' }}
              </span>
            </div>

            <h3 class="text-2xl sm:text-[28px] font-semibold tracking-tight text-white leading-snug">
              Windows 官方标准安装版
            </h3>
            <p class="text-sm text-[#B4B4BA] leading-relaxed text-balance">
              首选推荐版本。集成桌面快捷方式、自动化向导，并支持后续自动静默检测更新，畅享无缝迭代。
            </p>
          </div>

          <div class="flex flex-col gap-2.5 w-full md:w-auto md:min-w-[228px] flex-shrink-0">
            <a
              :href="release.installerFastUrl || release.installerUrl"
              class="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl text-sm font-medium text-ink-primary bg-white hover:bg-[#F2F2F4] active:scale-[0.98] transition-[background-color,transform] duration-150 ease-studio shadow-surface-xs focus-ring-dark group"
            >
              <Download class="w-4 h-4 transition-transform duration-150 ease-studio group-hover:translate-y-0.5" :stroke-width="1.75" />
              <span>国内极速下载 (.exe)</span>
            </a>

            <a
              :href="release.installerUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-1.5 h-9 px-4 rounded-[10px] text-xs font-medium text-[#B4B4BA] hover:text-white hover:bg-white/[0.06] transition-colors duration-150 ease-studio focus-ring-dark"
            >
              <Github class="w-4 h-4" :stroke-width="1.75" />
              <span>GitHub Release 官方源</span>
            </a>
          </div>
        </div>

        <!-- Secondary Packages Grid (Portable & Quark Netdisk) -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-5 reveal-block reveal-delay-2"
          :class="{ 'is-visible': isVisible }"
        >
          <!-- Package 2: Portable Package -->
          <div class="p-6 sm:p-7 rounded-2xl apple-card apple-card-hover flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="w-10 h-10 rounded-xl bg-subtle flex items-center justify-center border border-apple-border-light text-ink-primary">
                  <FolderArchive class="w-[18px] h-[18px]" :stroke-width="1.75" />
                </div>
                <span class="text-xs font-mono text-ink-muted">免安装便携版</span>
              </div>
              <h3 class="text-lg font-semibold text-ink-primary tracking-tight mb-2">
                免安装绿色便携版 (.exe)
              </h3>
              <p class="text-[13px] sm:text-sm text-ink-secondary leading-relaxed mb-6">
                单文件便携运行，无需安装，不写入系统注册表。适合随身 U 盘携带或在无管理员权限电脑上快速运行。
              </p>
            </div>

            <div class="flex items-center justify-between gap-4 pt-4 border-t border-apple-border-light">
              <span class="text-xs text-ink-muted font-mono tabular-nums whitespace-nowrap">
                Portable · 约 {{ release.portableSize || 'xx.xx MB' }}
              </span>
              <div class="flex items-center gap-4">
                <a
                  :href="release.portableFastUrl || release.portableUrl"
                  class="inline-flex items-center gap-1.5 text-xs font-medium text-apple-blue hover:text-apple-blue-hover transition-colors duration-150 ease-studio focus-ring rounded-md px-1 py-0.5 group whitespace-nowrap"
                >
                  <span>极速下载</span>
                  <ArrowRight class="w-4 h-4 transition-transform duration-150 ease-studio group-hover:translate-x-0.5" :stroke-width="1.75" />
                </a>
                <a
                  :href="release.portableUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-xs text-ink-muted hover:text-ink-primary transition-colors duration-150 ease-studio focus-ring rounded-md px-1 py-0.5 whitespace-nowrap"
                  title="GitHub Release 官方源"
                >
                  官方源
                </a>
              </div>
            </div>
          </div>

          <!-- Package 3: Quark Netdisk -->
          <div class="p-6 sm:p-7 rounded-2xl apple-card apple-card-hover flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="w-10 h-10 rounded-xl bg-subtle flex items-center justify-center border border-apple-border-light text-ink-primary">
                  <CloudDownload class="w-[18px] h-[18px]" :stroke-width="1.75" />
                </div>
                <span class="text-xs font-mono text-ink-muted">国内高速备用</span>
              </div>
              <h3 class="text-lg font-semibold text-ink-primary tracking-tight mb-2">
                夸克网盘高速下载
              </h3>
              <p class="text-[13px] sm:text-sm text-ink-secondary leading-relaxed mb-6">
                为国内特殊网络环境准备的备用通道，支持极速转存与不限速流畅下载。
              </p>
            </div>

            <div class="flex items-center justify-between gap-4 pt-4 border-t border-apple-border-light">
              <span class="text-xs text-ink-muted font-mono whitespace-nowrap">Quark Mirror</span>
              <a
                :href="PROJECT_CONFIG.netdisk.url"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 text-xs font-medium text-apple-blue hover:text-apple-blue-hover transition-colors duration-150 ease-studio focus-ring rounded-md px-1 py-0.5 group whitespace-nowrap"
              >
                <span>前往网盘</span>
                <ArrowRight class="w-4 h-4 transition-transform duration-150 ease-studio group-hover:translate-x-0.5" :stroke-width="1.75" />
              </a>
            </div>
          </div>
        </div>

        <!-- SmartScreen Help Note -->
        <div
          class="p-4 sm:p-5 rounded-xl bg-subtle border border-apple-border-light flex items-start gap-3 text-[13px] text-ink-secondary leading-relaxed reveal-block reveal-delay-3"
          :class="{ 'is-visible': isVisible }"
        >
          <AlertCircle class="w-4 h-4 text-ink-muted flex-shrink-0 mt-0.5" :stroke-width="1.75" />
          <div>
            <span class="font-medium text-ink-primary">安全安装提示：</span>
            若 Windows 弹出 “Windows 已保护你的电脑 (SmartScreen)” 提示，系非盈利个人开源软件未购买高昂商业证书所致。代码完全公开透明，点击【更多信息】选择【仍要运行】即可安全使用。
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { PROJECT_CONFIG } from '../config/project'
import { useScrollReveal } from '../composables/useScrollReveal'
import {
  Laptop, FolderArchive, CloudDownload, Download,
  Github, AlertCircle, ArrowRight
} from 'lucide-vue-next'

defineProps({
  release: {
    type: Object,
    default: () => ({})
  }
})

const { targetRef: sectionRef, isVisible } = useScrollReveal()
</script>
