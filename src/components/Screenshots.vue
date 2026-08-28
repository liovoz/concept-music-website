<template>
  <section id="showcase" class="py-28 md:py-36 relative border-t border-apple-border-light bg-subtle/50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-14 md:mb-18">
        <div class="text-xs font-mono font-medium uppercase tracking-widest text-ink-tertiary mb-3">
          Product Showcase
        </div>
        <h2 class="text-3xl sm:text-5xl font-semibold text-ink-primary tracking-tight leading-[1.15]">
          精致，见于毫厘。
        </h2>
        <p class="mt-4 text-base text-ink-secondary">
          基于 Electron 与 Vue 3 打造的 Windows 原生高颜值客户端，每一处交互皆纯净自然。
        </p>
      </div>

      <!-- Minimalist Pill Selector -->
      <div class="flex items-center justify-center gap-2 flex-wrap mb-12 p-1.5 max-w-fit mx-auto rounded-full bg-neutral-200/60 border border-apple-border-light shadow-apple-subtle">
        <button 
          v-for="(item, idx) in showcaseTabs" 
          :key="item.id"
          @click="activeTab = idx"
          class="px-5 py-2 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-2"
          :class="activeTab === idx 
            ? 'bg-white text-ink-primary shadow-apple-subtle font-semibold' 
            : 'text-ink-secondary hover:text-ink-primary'"
        >
          <component :is="item.icon" class="w-3.5 h-3.5" />
          <span>{{ item.name }}</span>
        </button>
      </div>

      <!-- Clean Showcase Stage with Real Screenshot & Spotlight Details -->
      <div class="max-w-5xl mx-auto rounded-3xl p-6 sm:p-8 bg-white apple-card shadow-apple-floating">
        
        <!-- Showcase Header Meta -->
        <div class="px-2 pb-5 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-apple-border-light text-xs font-mono">
          <div class="flex items-center gap-2 text-ink-tertiary">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span class="text-ink-primary font-medium">CONCEPT_MUSIC // {{ currentTab.viewName }}</span>
          </div>
          <span class="text-apple-blue font-semibold">{{ currentTab.highlightText }}</span>
        </div>

        <!-- Dynamic Content Grid: Image Showcase + Feature Focus Callout -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <!-- Screenshot View (Border-free) -->
          <div class="lg:col-span-8 rounded-2xl overflow-hidden shadow-apple-card relative group">
            <img 
              src="/home.png" 
              alt="概念音乐主界面" 
              class="w-full h-auto object-cover block select-none transition-transform duration-500 group-hover:scale-[1.01]"
            />
          </div>

          <!-- Feature Focus Panel on the Right -->
          <div class="lg:col-span-4 space-y-6">
            <div class="p-6 rounded-2xl bg-subtle border border-apple-border-light space-y-3">
              <div class="w-9 h-9 rounded-xl bg-white shadow-apple-subtle flex items-center justify-center text-ink-primary">
                <component :is="currentTab.icon" class="w-4 h-4" />
              </div>
              <h3 class="text-lg font-semibold text-ink-primary">
                {{ currentTab.title }}
              </h3>
              <p class="text-xs text-ink-secondary leading-relaxed">
                {{ currentTab.desc }}
              </p>
            </div>

            <!-- Highlights Checklist -->
            <div class="space-y-2.5">
              <div v-for="bullet in currentTab.bullets" :key="bullet" class="flex items-center gap-2.5 text-xs text-ink-secondary">
                <Check class="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>{{ bullet }}</span>
              </div>
            </div>

            <!-- Quick Download CTA Link -->
            <div class="pt-2">
              <a 
                href="#download" 
                class="inline-flex items-center gap-1.5 text-xs font-semibold text-apple-blue hover:text-apple-blue-hover transition-colors"
              >
                <span>立即体验该功能</span>
                <ArrowRight class="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { 
  Compass, Disc, Mic2, Import, Radio, 
  Check, ArrowRight 
} from 'lucide-vue-next'

const activeTab = ref(0)

const showcaseTabs = [
  { 
    id: 'discover', 
    name: '精选推荐首页', 
    icon: Compass, 
    viewName: 'HOME_RECOMMENDATION',
    highlightText: 'SMART_RADAR // 06:00 DAILY UPDATE',
    title: '每日精选与歌单广场',
    desc: '聚合全网流行榜、飙升榜与分类歌单广场，根据你的听歌历史智能推荐心动旋律。',
    bullets: [
      '每日 06:00 自动雷达更新',
      '百万热歌榜与精选歌单聚合',
      '无缝一键载入播放队列'
    ]
  },
  { 
    id: 'turntable', 
    name: 'Hi-Res 母带音效', 
    icon: Disc, 
    viewName: 'LOSSLESS_MASTER_AUDIO',
    highlightText: '96kHz / 24-BIT // ZERO LOSS',
    title: '超清无损与自适应回退',
    desc: '支持标准 128k 至 SQ FLAC 与 Hi-Res 96kHz/24bit 母带级音源，彻底告别压缩损耗。',
    bullets: [
      '智能探测音源最高可用音质',
      '无卡顿平滑自适应回退机制',
      '独家本地代理声学增益增强'
    ]
  },
  { 
    id: 'lyrics', 
    name: '独立悬浮歌词', 
    icon: Mic2, 
    viewName: 'DESKTOP_FLOATING_LYRIC',
    highlightText: 'FLUENT_MICA // AUTO_SYNC',
    title: '双语逐字律动桌面歌词',
    desc: '基于 Windows 独立透明磨砂窗口渲染，支持逐字律动同步、鼠标穿透与窗口锁定。',
    bullets: [
      '单行 / 双行律动自由切换',
      '双语对照与外语逐词翻译',
      '快捷键一键锁定与鼠标穿透'
    ]
  },
  { 
    id: 'import', 
    name: '歌单秒级导入', 
    icon: Import, 
    viewName: 'NETEASE_CLOUD_SYNC',
    highlightText: '1-CLICK // 100% CONVERSION',
    title: '网易云曲库一键无缝迁移',
    desc: '仅需复制外部歌单链接或 ID 即可完成秒级解析匹配，一键将珍藏歌单转移到本地。',
    bullets: [
      '支持公开分享链接秒级解析',
      '智能模糊匹配高保真音频源',
      '导入歌单永久本地留存'
    ]
  },
  { 
    id: 'fm', 
    name: '私人漫游探索', 
    icon: Radio, 
    viewName: 'PERSONAL_CHORUS_FM',
    highlightText: 'CHORUS_RADAR // AI EXPLORER',
    title: '私人 FM 与副歌高潮试听',
    desc: '懂你所爱的智能漫游流，独家支持一键定位歌曲最高潮副歌片段进行快速探索。',
    bullets: [
      '智能识别副歌高潮黄金节点',
      '心动单曲一键红心收藏',
      '海量未知好歌高效漫游'
    ]
  }
]

const currentTab = computed(() => showcaseTabs[activeTab.value])
</script>
