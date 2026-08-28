<template>
  <section id="features" class="py-28 md:py-36 relative border-t border-apple-border-light">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header with Abundant Space -->
      <div class="max-w-2xl mb-16 md:mb-24">
        <div class="text-xs font-mono font-medium uppercase tracking-widest text-apple-blue mb-3">
          Acoustic Engineering
        </div>
        <h2 class="text-3xl sm:text-5xl font-semibold text-ink-primary tracking-tight leading-[1.15]">
          纯粹，始于内核。
        </h2>
        <p class="mt-4 text-base text-ink-secondary leading-relaxed">
          专为挑剔的耳朵打造。从 Hi-Res 母带无损解析到独立桌面歌词，每一处设计都克制而高效。
        </p>
      </div>

      <!-- Clean Feature Bento Grid -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        <!-- Feature 1: Large Hi-Res DSP Engine (8 Cols) -->
        <div class="md:col-span-8 p-8 sm:p-10 rounded-3xl apple-card apple-card-hover flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-8">
              <div class="w-11 h-11 rounded-2xl bg-subtle flex items-center justify-center text-ink-primary border border-apple-border-light shadow-apple-subtle">
                <SlidersHorizontal class="w-5 h-5" />
              </div>
              <div class="flex items-center gap-2 font-mono text-xs text-ink-secondary">
                <span class="px-3 py-1 rounded-full bg-subtle border border-apple-border-light font-medium">96,000 Hz</span>
                <span class="px-3 py-1 rounded-full bg-subtle border border-apple-border-light font-medium">24-Bit FLAC</span>
              </div>
            </div>

            <h3 class="text-2xl font-semibold text-ink-primary tracking-tight mb-3">
              Hi-Res 母带声学引擎
            </h3>
            <p class="text-sm text-ink-secondary max-w-lg leading-relaxed">
              全面兼容标准 128k 至 SQ 无损与 Hi-Res 96kHz/24bit 超清母带音质。搭载智能网络自适应平滑回退，保障每一次播放皆纯净稳定。
            </p>
          </div>

          <!-- Clean Wave Spectrum -->
          <div class="mt-10 pt-6 border-t border-apple-border-light">
            <div class="flex items-center justify-between text-[11px] font-mono text-ink-tertiary mb-3">
              <span>频响范围：20Hz - 48kHz</span>
              <span class="text-ink-secondary font-medium">失真率 THD+N &lt; 0.0001%</span>
            </div>
            <div class="h-16 w-full rounded-2xl bg-subtle p-3 border border-apple-border-light flex items-end gap-1 overflow-hidden">
              <span 
                v-for="(h, i) in spectrumBars" 
                :key="i" 
                class="flex-1 bg-ink-primary rounded-t-sm transition-all duration-300 hover:bg-apple-blue"
                :style="{ height: h + '%' }"
              ></span>
            </div>
          </div>
        </div>

        <!-- Feature 2: Desktop Floating Lyric (4 Cols) -->
        <div class="md:col-span-4 p-8 sm:p-10 rounded-3xl apple-card apple-card-hover flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-8">
              <div class="w-11 h-11 rounded-2xl bg-subtle flex items-center justify-center text-ink-primary border border-apple-border-light shadow-apple-subtle">
                <Mic2 class="w-5 h-5" />
              </div>
              <span class="text-xs font-mono font-medium text-ink-tertiary">FLUENT MICA</span>
            </div>

            <h3 class="text-xl font-semibold text-ink-primary tracking-tight mb-3">
              独立悬浮桌面歌词
            </h3>
            <p class="text-xs text-ink-secondary leading-relaxed">
              基于 Windows 极简透明窗口渲染，支持单双行逐字律动同步、双语翻译与鼠标穿透锁定。
            </p>
          </div>

          <!-- Minimalist Lyric Preview Card -->
          <div class="mt-8 p-4 rounded-2xl bg-subtle border border-apple-border-light text-center shadow-apple-subtle">
            <p class="text-xs text-ink-tertiary">夜空中最亮的星 能否听清</p>
            <p class="text-sm font-semibold text-ink-primary mt-1">
              那仰望的人 心底的孤独和叹息
            </p>
          </div>
        </div>

        <!-- Feature 3: 1-Click Migration (6 Cols) -->
        <div class="md:col-span-6 p-8 sm:p-10 rounded-3xl apple-card apple-card-hover flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-6">
              <div class="w-11 h-11 rounded-2xl bg-subtle flex items-center justify-center text-ink-primary border border-apple-border-light shadow-apple-subtle">
                <Import class="w-5 h-5" />
              </div>
              <span class="text-xs font-mono font-medium text-ink-tertiary">CLOUD SYNC</span>
            </div>

            <h3 class="text-xl font-semibold text-ink-primary tracking-tight mb-2">
              网易云曲库秒级迁移
            </h3>
            <p class="text-xs text-ink-secondary leading-relaxed">
              仅需粘贴外部歌单分享链接或 ID，本地服务自动匹配解析转换，珍藏多年的心动歌单无损导入。
            </p>
          </div>

          <div class="mt-6 p-3.5 rounded-2xl bg-subtle border border-apple-border-light flex items-center justify-between text-xs font-mono">
            <span class="text-ink-secondary">100/100 首歌曲转换完毕</span>
            <span class="text-ink-primary font-semibold">100% SUCCESS</span>
          </div>
        </div>

        <!-- Feature 4: Personal FM & Peak Chorus (6 Cols) -->
        <div class="md:col-span-6 p-8 sm:p-10 rounded-3xl apple-card apple-card-hover flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-6">
              <div class="w-11 h-11 rounded-2xl bg-subtle flex items-center justify-center text-ink-primary border border-apple-border-light shadow-apple-subtle">
                <Radio class="w-5 h-5" />
              </div>
              <span class="text-xs font-mono font-medium text-ink-tertiary">AI RADAR</span>
            </div>

            <h3 class="text-xl font-semibold text-ink-primary tracking-tight mb-2">
              私人漫游与高潮副歌试听
            </h3>
            <p class="text-xs text-ink-secondary leading-relaxed">
              智能漫游推荐流，支持一键定位并循环播放歌曲最高潮的副歌段落，高效探索未曾相遇的好旋律。
            </p>
          </div>

          <div class="mt-6 p-3.5 rounded-2xl bg-subtle border border-apple-border-light flex items-center justify-between text-xs font-mono">
            <span class="text-ink-secondary">副歌高潮智能雷达</span>
            <span class="text-apple-blue font-semibold">READY</span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { SlidersHorizontal, Mic2, Import, Radio } from 'lucide-vue-next'

const spectrumBars = [
  25, 45, 70, 35, 80, 60, 30, 50, 85, 65, 40, 55, 75, 50, 78, 42, 68, 88, 55, 35, 70, 48, 60, 80
]
</script>
