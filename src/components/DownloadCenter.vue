<template>
  <section id="download" class="py-28 md:py-36 relative border-t border-apple-border-light">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Header -->
      <div class="text-center max-w-2xl mx-auto mb-16 md:mb-20">
        <div class="text-xs font-mono font-medium uppercase tracking-widest text-ink-tertiary mb-3">
          Download & Packages
        </div>
        <h2 class="text-3xl sm:text-5xl font-semibold text-ink-primary tracking-tight leading-[1.15]">
          即刻开启高保真之旅。
        </h2>
        <p class="mt-4 text-base text-ink-secondary">
          最新版本 <span class="font-mono text-ink-primary font-semibold">{{ release.version || 'v3.4.0' }}</span> · 发布于 {{ release.publishedAt || '2025-02-15' }} · 永久免费
        </p>
      </div>

      <!-- Main Download Showcase Card (Primary Installer) -->
      <div class="mb-10 p-8 sm:p-12 rounded-3xl bg-ink-primary text-white shadow-apple-floating flex flex-col md:flex-row items-center justify-between gap-8">
        <div class="space-y-4 max-w-xl text-center md:text-left">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-neutral-300">
            <Laptop class="w-3.5 h-3.5" />
            <span>Windows 10 / 11 64位</span>
            <span class="text-neutral-500">•</span>
            <span>大小约 {{ release.size || '85 MB' }}</span>
          </div>
          <h3 class="text-2xl sm:text-3xl font-semibold tracking-tight">
            Windows 官方标准安装版
          </h3>
          <p class="text-sm text-neutral-300 leading-relaxed">
            首选推荐版本。集成桌面快捷方式、自动化向导，并支持后续自动静默检测更新，畅享无缝迭代。
          </p>
        </div>

        <!-- Action Download Buttons -->
        <div class="flex flex-col gap-3 w-full sm:w-auto flex-shrink-0">
          <a 
            :href="release.installerFastUrl || release.installerUrl"
            class="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold text-ink-primary bg-white hover:bg-neutral-100 active:scale-[0.98] transition-all shadow-apple-button group"
          >
            <Download class="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            <span>国内极速下载 (.exe)</span>
          </a>

          <a 
            :href="release.installerUrl"
            target="_blank"
            class="inline-flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-full text-xs font-medium text-neutral-400 hover:text-white transition-colors"
          >
            <Github class="w-3.5 h-3.5" />
            <span>GitHub Release 官方源</span>
          </a>
        </div>
      </div>

      <!-- Secondary Packages (Portable & Quark Netdisk) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        
        <!-- Package 2: Portable Package -->
        <div class="p-6 sm:p-8 rounded-3xl apple-card apple-card-hover flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="w-10 h-10 rounded-xl bg-subtle flex items-center justify-center border border-apple-border-light text-ink-primary shadow-apple-subtle">
                <FolderArchive class="w-5 h-5" />
              </div>
              <span class="text-xs font-mono font-medium text-ink-tertiary">免安装便携版</span>
            </div>
            <h4 class="text-lg font-semibold text-ink-primary mb-1.5">绿色解压便携包</h4>
            <p class="text-xs text-ink-secondary leading-relaxed mb-6">
              解压即用，不写入系统注册表。适合随身 U 盘携带或在无管理员权限电脑上快速运行。
            </p>
          </div>

          <div class="flex items-center justify-between pt-4 border-t border-apple-border-light">
            <span class="text-xs text-ink-tertiary font-mono">ZIP Archive</span>
            <a 
              :href="release.portableFastUrl || release.portableUrl"
              class="inline-flex items-center gap-1.5 text-xs font-semibold text-apple-blue hover:text-apple-blue-hover transition-colors"
            >
              <span>立即下载</span>
              <ArrowRight class="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <!-- Package 3: Quark Netdisk -->
        <div class="p-6 sm:p-8 rounded-3xl apple-card apple-card-hover flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="w-10 h-10 rounded-xl bg-subtle flex items-center justify-center border border-apple-border-light text-ink-primary shadow-apple-subtle">
                <CloudDownload class="w-5 h-5" />
              </div>
              <span class="text-xs font-mono font-medium text-ink-tertiary">国内高速备用</span>
            </div>
            <h4 class="text-lg font-semibold text-ink-primary mb-1.5">夸克网盘高速下载</h4>
            <p class="text-xs text-ink-secondary leading-relaxed mb-6">
              为国内特殊网络环境准备的备用通道，支持极速转存与不限速流畅下载。
            </p>
          </div>

          <div class="flex items-center justify-between pt-4 border-t border-apple-border-light">
            <span class="text-xs text-ink-tertiary font-mono">Quark Mirror</span>
            <a 
              :href="PROJECT_CONFIG.netdisk.url"
              target="_blank"
              class="inline-flex items-center gap-1.5 text-xs font-semibold text-apple-blue hover:text-apple-blue-hover transition-colors"
            >
              <span>前往网盘</span>
              <ArrowRight class="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>

      <!-- Minimalist SmartScreen Help Note -->
      <div class="p-5 rounded-2xl bg-subtle border border-apple-border-light flex items-start gap-3.5 text-xs text-ink-secondary leading-relaxed">
        <AlertCircle class="w-4 h-4 text-ink-tertiary flex-shrink-0 mt-0.5" />
        <div>
          <span class="font-medium text-ink-primary">安全安装提示：</span>
          若 Windows 弹出 “Windows 已保护你的电脑 (SmartScreen)” 提示，系非盈利个人开源软件未购买高昂商业证书所致。代码完全公开透明，点击【更多信息】选择【仍要运行】即可安全使用。
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { PROJECT_CONFIG } from '../config/project'
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
</script>
