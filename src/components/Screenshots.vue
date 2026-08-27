<template>
  <section id="screenshots" class="py-24 bg-[#090e18]/80 relative border-y border-slate-800/60">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto mb-14">
        <h2 class="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3 font-mono">
          INTERFACE SHOWCASE
        </h2>
        <p class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          优雅现代的 <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">交互界面</span>
        </p>
        <p class="mt-4 text-sm sm:text-base text-slate-400">
          深色极简美学，流畅的动画过渡与精心打磨的操作手感。
        </p>
      </div>

      <!-- Tab Navigation -->
      <div class="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
        <button 
          v-for="(item, idx) in PROJECT_CONFIG.screenshots" 
          :key="item.id"
          @click="activeTab = idx"
          class="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 border"
          :class="activeTab === idx 
            ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-600/30 scale-105' 
            : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'"
        >
          <span>{{ item.name }}</span>
        </button>
      </div>

      <!-- Active Tab Card Display -->
      <div class="glass-card rounded-2xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl relative overflow-hidden">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <!-- Text info column -->
          <div class="lg:col-span-4 space-y-4 text-left">
            <span class="text-xs font-bold px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              0{{ activeTab + 1 }} / 0{{ PROJECT_CONFIG.screenshots.length }}
            </span>
            <h3 class="text-2xl font-bold text-white leading-snug">
              {{ currentItem.title }}
            </h3>
            <p class="text-sm text-slate-300 leading-relaxed">
              {{ currentItem.desc }}
            </p>

            <div class="pt-4 border-t border-slate-800 space-y-2.5 text-xs text-slate-400">
              <div class="flex items-center gap-2">
                <CheckCircle2 class="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>基于 Vue 3 + Tailwind 响应式渲染</span>
              </div>
              <div class="flex items-center gap-2">
                <CheckCircle2 class="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>全键盘快捷键与系统级托盘联动</span>
              </div>
              <div class="flex items-center gap-2">
                <CheckCircle2 class="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>原生级极致流畅动画响应</span>
              </div>
            </div>
          </div>

          <!-- Interactive Mockup Render Column -->
          <div class="lg:col-span-8 bg-[#0b101d] rounded-xl border border-slate-800 p-4 sm:p-6 shadow-inner min-h-[340px] flex flex-col justify-center">
            <!-- 发现页 Mockup -->
            <div v-if="currentItem.id === 'discover'" class="space-y-4">
              <div class="flex items-center justify-between">
                <h4 class="text-sm font-bold text-white flex items-center gap-2">
                  <Sparkles class="w-4 h-4 text-blue-400" />
                  每日推荐歌单
                </h4>
                <span class="text-xs text-blue-400 hover:underline cursor-pointer">查看更多 &rarr;</span>
              </div>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div v-for="i in 4" :key="i" class="bg-slate-900/80 rounded-lg p-2.5 border border-slate-800 group hover:border-blue-500/50 transition-all">
                  <div class="w-full aspect-square rounded-md bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-900 mb-2 flex items-center justify-center relative overflow-hidden">
                    <Music class="w-8 h-8 text-blue-400/40" />
                    <span class="absolute top-1 right-1 px-1.5 py-0.5 rounded bg-black/60 text-[9px] text-white">120万播放</span>
                  </div>
                  <div class="text-xs font-semibold text-slate-200 truncate">流行华语金曲榜精选 #{{ i }}</div>
                  <div class="text-[10px] text-slate-400">每日 06:00 更新</div>
                </div>
              </div>
            </div>

            <!-- 播放器 Mockup -->
            <div v-else-if="currentItem.id === 'player'" class="space-y-4 text-center py-4">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold border border-blue-500/30">
                Hi-Res Master Audio Quality
              </div>
              <h4 class="text-lg font-bold text-white">正在播放：稻香 - 周杰伦</h4>
              <p class="text-xs text-cyan-300 font-mono">FLAC · 96kHz / 24bit · 2840kbps</p>
              <div class="max-w-md mx-auto py-3 space-y-1.5">
                <p class="text-xs text-slate-500">对这个世界如果你有太多的抱怨</p>
                <p class="text-sm font-bold text-blue-400">跌倒了 就不敢继续往前走</p>
                <p class="text-xs text-slate-400">为什么 人要这么的脆弱 堕落</p>
              </div>
            </div>

            <!-- 桌面歌词 Mockup -->
            <div v-else-if="currentItem.id === 'lyrics'" class="p-6 bg-slate-950/70 border border-cyan-500/30 rounded-xl relative text-center backdrop-blur-md shadow-2xl">
              <div class="absolute top-2 right-2 flex items-center gap-1 text-slate-400">
                <span class="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-cyan-300">置顶锁定中</span>
              </div>
              <div class="space-y-2 py-4">
                <p class="text-sm text-slate-300 font-bold">夜空中最亮的星 能否听清</p>
                <p class="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
                  那仰望的人 心底的孤独和叹息
                </p>
                <p class="text-xs text-slate-400 font-mono">The brightest star in the night sky</p>
              </div>
            </div>

            <!-- 网易云导入 Mockup -->
            <div v-else-if="currentItem.id === 'import'" class="space-y-4">
              <div class="text-xs font-semibold text-slate-300">输入网易云歌单分享链接或歌单 ID：</div>
              <div class="flex gap-2">
                <input 
                  type="text" 
                  value="https://music.163.com/playlist?id=3778678" 
                  readonly
                  class="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-300 font-mono"
                />
                <button class="px-4 py-2 rounded-lg bg-rose-600 text-white text-xs font-bold shadow-md">
                  一键导入
                </button>
              </div>
              <div class="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                <span>已成功解析：热歌榜 (共 100 首歌曲)</span>
                <span class="text-emerald-400 font-bold">导入成功</span>
              </div>
            </div>

            <!-- 私人 FM Mockup -->
            <div v-else class="space-y-4 text-center py-4">
              <div class="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-600 mx-auto flex items-center justify-center shadow-lg shadow-purple-500/30">
                <Radio class="w-8 h-8 text-white" />
              </div>
              <h4 class="text-base font-bold text-white">私人漫游 FM 正在生成专属流</h4>
              <p class="text-xs text-slate-400 max-w-sm mx-auto">根据你的听歌足迹，智能匹配相似曲风与高潮副歌片段</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { PROJECT_CONFIG } from '../config/project'
import { Sparkles, CheckCircle2, Music, Radio } from 'lucide-vue-next'

const activeTab = ref(0)
const currentItem = computed(() => PROJECT_CONFIG.screenshots[activeTab.value])
</script>
