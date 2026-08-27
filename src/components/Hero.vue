<template>
  <section class="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
    <!-- Ambient Glow Backgrounds -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/20 via-indigo-500/15 to-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
    <div class="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <!-- Top Announcement Badge -->
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 shadow-inner mb-8 animate-in fade-in slide-in-from-bottom-3 duration-500">
        <span class="flex h-2 w-2 relative">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        <span class="text-xs font-medium text-slate-300">
          最新版本 <span class="text-blue-400 font-semibold">{{ release.version || 'v3.4.0' }}</span> 现已发布
        </span>
        <span class="text-slate-600">|</span>
        <span class="text-xs text-slate-400">Windows 10 / 11 x64</span>
      </div>

      <!-- Main Headline -->
      <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
        极致纯净 · 畅享
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
          高品质音乐
        </span>
      </h1>

      <!-- Slogan Description -->
      <p class="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed mb-10">
        {{ PROJECT_CONFIG.subSlogan }}
      </p>

      <!-- Primary Action Buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
        <!-- Main Download Button (Fast Mirror) -->
        <a 
          :href="release.installerFastUrl || release.installerUrl"
          class="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-600/30 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
        >
          <Download class="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          <div class="text-left">
            <div class="leading-tight">立即下载 (Windows 安装版)</div>
            <div class="text-[11px] text-blue-200/90 font-mono font-normal">
              {{ release.version }} · 推荐国内高速通道 · {{ release.size }}
            </div>
          </div>
        </a>

        <!-- Portable & More Options Dropdown Button -->
        <a 
          href="#download"
          class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-medium text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 shadow-md transition-all duration-200"
        >
          <FolderArchive class="w-4 h-4 text-slate-400" />
          <span>绿色便携版 & 更多通道</span>
        </a>
      </div>

      <!-- Micro metadata / Safety info -->
      <div class="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 mb-16">
        <span class="flex items-center gap-1.5">
          <ShieldCheck class="w-4 h-4 text-emerald-400" />
          <span>100% 开源安全 (MIT)</span>
        </span>
        <span class="flex items-center gap-1.5">
          <Ban class="w-4 h-4 text-blue-400" />
          <span>0 商业广告 / 0 捆绑</span>
        </span>
        <span class="flex items-center gap-1.5">
          <Sparkles class="w-4 h-4 text-cyan-400" />
          <span>Hi-Res / SQ 无损多音质</span>
        </span>
        <span class="flex items-center gap-1.5">
          <RefreshCw class="w-4 h-4 text-purple-400" />
          <span>支持静默自动升级</span>
        </span>
      </div>

      <!-- Interactive Mockup Showcase Window -->
      <div class="relative max-w-5xl mx-auto">
        <!-- Frame Glow -->
        <div class="absolute -inset-1 bg-gradient-to-r from-blue-500/30 via-indigo-500/30 to-cyan-500/30 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition duration-1000 -z-10"></div>
        
        <!-- Window Container -->
        <div class="glass-card rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 text-left">
          <!-- Window Titlebar -->
          <div class="bg-[#0b111e]/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="flex items-center gap-1.5">
                <span class="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                <span class="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                <span class="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
              </div>
              <span class="text-xs font-medium text-slate-400 font-mono flex items-center gap-1.5">
                <Music class="w-3.5 h-3.5 text-blue-400" />
                概念音乐 - 正在播放：晴天 - 周杰伦
              </span>
            </div>
            <div class="flex items-center gap-3 text-xs text-slate-400">
              <span class="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-bold">
                Hi-Res 96kHz/24bit
              </span>
              <span class="hidden sm:inline text-slate-500 font-mono">v{{ release.version?.replace('v','') || '3.4.0' }}</span>
            </div>
          </div>

          <!-- Window Inner Layout (Simulated Player UI) -->
          <div class="grid grid-cols-1 md:grid-cols-12 bg-[#090d16]/95 min-h-[380px]">
            <!-- Simulated Sidebar -->
            <div class="hidden md:flex md:col-span-3 flex-col justify-between p-4 border-r border-slate-800/80 bg-[#0b101c]/60">
              <div class="space-y-6">
                <!-- Nav group 1 -->
                <div>
                  <div class="text-[11px] font-bold uppercase tracking-wider text-slate-500 px-3 mb-2">在线音乐</div>
                  <div class="space-y-1">
                    <div class="flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-semibold text-white bg-blue-600/20 text-blue-400 border border-blue-500/30">
                      <Compass class="w-4 h-4 text-blue-400" />
                      <span>发现音乐</span>
                    </div>
                    <div class="flex items-center gap-3 px-3 py-2 rounded-lg text-xs text-slate-400 hover:text-slate-200">
                      <Flame class="w-4 h-4" />
                      <span>排行榜</span>
                    </div>
                    <div class="flex items-center gap-3 px-3 py-2 rounded-lg text-xs text-slate-400 hover:text-slate-200">
                      <Radio class="w-4 h-4" />
                      <span>私人 FM</span>
                    </div>
                  </div>
                </div>

                <!-- Nav group 2 -->
                <div>
                  <div class="text-[11px] font-bold uppercase tracking-wider text-slate-500 px-3 mb-2">我的库</div>
                  <div class="space-y-1">
                    <div class="flex items-center gap-3 px-3 py-2 rounded-lg text-xs text-slate-400 hover:text-slate-200">
                      <Heart class="w-4 h-4" />
                      <span>我喜欢的音乐</span>
                    </div>
                    <div class="flex items-center gap-3 px-3 py-2 rounded-lg text-xs text-slate-400 hover:text-slate-200">
                      <Import class="w-4 h-4 text-rose-400" />
                      <span>网易云歌单导入</span>
                    </div>
                    <div class="flex items-center gap-3 px-3 py-2 rounded-lg text-xs text-slate-400 hover:text-slate-200">
                      <Mic2 class="w-4 h-4 text-cyan-400" />
                      <span>桌面歌词窗口</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Bottom Mini Profile -->
              <div class="flex items-center gap-2 px-2 py-2 rounded-lg bg-slate-900/60 border border-slate-800">
                <div class="w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-[10px] font-bold text-white">
                  CM
                </div>
                <div class="flex flex-col">
                  <span class="text-xs text-slate-200 font-medium">概念听友</span>
                  <span class="text-[10px] text-emerald-400">已开启本地高增益</span>
                </div>
              </div>
            </div>

            <!-- Simulated Main Playing & Music Area -->
            <div class="col-span-1 md:col-span-9 p-6 flex flex-col justify-between relative overflow-hidden">
              <!-- Background Ambient Wave Effect -->
              <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

              <!-- Top Content: Song Banner & Visualizer -->
              <div class="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <!-- Album Vinyl Cover -->
                <div class="sm:col-span-4 flex justify-center">
                  <div class="relative group cursor-pointer">
                    <!-- Spinning Record Background -->
                    <div class="absolute -right-5 top-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-slate-950 border-4 border-slate-800 flex items-center justify-center shadow-2xl animate-[spin_8s_linear_infinite]">
                      <div class="w-10 h-10 rounded-full bg-slate-900 border-2 border-slate-700 flex items-center justify-center">
                        <div class="w-3 h-3 rounded-full bg-blue-500"></div>
                      </div>
                    </div>
                    <!-- Cover Image Card -->
                    <div class="relative z-10 w-32 h-32 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-700 to-slate-900 p-2 shadow-2xl border border-white/10 flex flex-col justify-between">
                      <div class="flex justify-between items-start">
                        <span class="px-1.5 py-0.5 rounded bg-black/50 text-[9px] font-bold text-cyan-300 backdrop-blur-sm">Hi-Res</span>
                        <Disc class="w-4 h-4 text-white/60" />
                      </div>
                      <div>
                        <div class="text-xs font-bold text-white">叶惠美</div>
                        <div class="text-[10px] text-slate-300">Jay Chou</div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Song Details & Synchronized Lyrics Simulation -->
                <div class="sm:col-span-8 flex flex-col justify-center space-y-3">
                  <div class="flex items-center gap-3">
                    <h3 class="text-xl font-bold text-white">晴天 (Sunny Day)</h3>
                    <span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      SQ 无损
                    </span>
                  </div>
                  <p class="text-xs text-slate-400">歌手：周杰伦 · 专辑：叶惠美 (2003)</p>

                  <!-- Simulated Dynamic Lyric Lines -->
                  <div class="space-y-1.5 py-2">
                    <p class="text-xs text-slate-500">故事的小黄花 从出生那年就飘着</p>
                    <p class="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 text-glow">
                      童年的荡秋千 随记忆一直晃到现在
                    </p>
                    <p class="text-xs text-slate-400">Re So So Si Do Si La So La Si Si Si Si La Si La So</p>
                  </div>

                  <!-- Audio Spectrum Waves -->
                  <div class="flex items-end gap-1 h-6">
                    <span class="w-1 bg-blue-500 rounded-full animate-wave h-3" style="animation-delay: 0.1s"></span>
                    <span class="w-1 bg-blue-400 rounded-full animate-wave h-5" style="animation-delay: 0.3s"></span>
                    <span class="w-1 bg-cyan-400 rounded-full animate-wave h-6" style="animation-delay: 0.5s"></span>
                    <span class="w-1 bg-indigo-400 rounded-full animate-wave h-4" style="animation-delay: 0.2s"></span>
                    <span class="w-1 bg-blue-500 rounded-full animate-wave h-5" style="animation-delay: 0.4s"></span>
                    <span class="w-1 bg-cyan-300 rounded-full animate-wave h-3" style="animation-delay: 0.6s"></span>
                    <span class="w-1 bg-indigo-500 rounded-full animate-wave h-4" style="animation-delay: 0.15s"></span>
                  </div>
                </div>
              </div>

              <!-- Bottom Control Bar -->
              <div class="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
                <!-- Progress Bar -->
                <div class="flex items-center gap-3">
                  <span class="text-[10px] text-slate-400 font-mono">02:18</span>
                  <div class="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden relative cursor-pointer group">
                    <div class="w-[52%] h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
                  </div>
                  <span class="text-[10px] text-slate-500 font-mono">04:29</span>
                </div>

                <!-- Action Controls -->
                <div class="flex items-center justify-between pt-1">
                  <div class="flex items-center gap-2">
                    <button class="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"><Shuffle class="w-4 h-4" /></button>
                    <button class="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"><SkipBack class="w-4 h-4" /></button>
                    <button class="p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-lg shadow-blue-600/40"><Pause class="w-4 h-4" /></button>
                    <button class="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"><SkipForward class="w-4 h-4" /></button>
                    <button class="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"><Repeat class="w-4 h-4" /></button>
                  </div>
                  <div class="flex items-center gap-3">
                    <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">FLAC 24bit</span>
                    <button class="p-1.5 text-slate-400 hover:text-white"><Volume2 class="w-4 h-4" /></button>
                    <button class="p-1.5 text-slate-400 hover:text-white"><ListMusic class="w-4 h-4" /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { PROJECT_CONFIG } from '../config/project'
import { 
  Download, FolderArchive, ShieldCheck, Ban, Sparkles, RefreshCw, 
  Music, Disc, Compass, Flame, Radio, Heart, Import, Mic2, 
  Shuffle, SkipBack, Pause, SkipForward, Repeat, Volume2, ListMusic 
} from 'lucide-vue-next'

defineProps({
  release: {
    type: Object,
    default: () => ({})
  }
})
</script>
