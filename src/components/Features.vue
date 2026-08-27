<template>
  <section id="features" class="py-24 relative overflow-hidden">
    <!-- Section background -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3 font-mono">
          CORE HIGHLIGHTS
        </h2>
        <p class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          为纯粹音乐而生的 <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">六大核心亮点</span>
        </p>
        <p class="mt-4 text-sm sm:text-base text-slate-400">
          摒弃臃肿冗余，专注于极致音质与流畅听歌体验，打造 Windows 桌面上最惬意的音乐伴侣。
        </p>
      </div>

      <!-- Feature Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <div 
          v-for="f in PROJECT_CONFIG.features" 
          :key="f.id"
          class="glass-card glass-card-hover rounded-2xl p-7 flex flex-col justify-between group relative overflow-hidden"
        >
          <!-- Top Accent Light -->
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r" :class="f.color"></div>
          
          <div>
            <div class="flex items-center justify-between mb-6">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-800/80 border border-slate-700 text-blue-400 group-hover:scale-110 group-hover:bg-blue-600/20 group-hover:text-blue-300 transition-all duration-300 shadow-md">
                <component :is="getIcon(f.icon)" class="w-6 h-6" />
              </div>
              <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60">
                {{ f.tag }}
              </span>
            </div>

            <h3 class="text-lg font-bold text-white mb-2.5 group-hover:text-blue-300 transition-colors">
              {{ f.title }}
            </h3>

            <p class="text-sm text-slate-400 leading-relaxed">
              {{ f.desc }}
            </p>
          </div>

          <div class="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs font-medium text-slate-400 group-hover:text-blue-400 transition-colors">
            <span>了解体验</span>
            <ArrowRight class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { PROJECT_CONFIG } from '../config/project'
import { 
  Music2, Mic2, Import, Radio, Sliders, Sparkles, ArrowRight 
} from 'lucide-vue-next'

const iconMap = {
  Music2,
  Mic2,
  Import,
  Radio,
  Sliders,
  Sparkles
}

const getIcon = (name) => {
  return iconMap[name] || Music2
}
</script>
