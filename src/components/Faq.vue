<template>
  <section id="faq" class="py-24 bg-[#090e18]/80 border-t border-slate-800/60">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <h2 class="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3 font-mono">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <p class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          常见问题 <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">与解答</span>
        </p>
        <p class="mt-4 text-sm text-slate-400">
          关于软件使用、安全性与版本更新的详细答疑。
        </p>
      </div>

      <!-- FAQ Accordion List -->
      <div class="space-y-4">
        <div 
          v-for="(item, index) in PROJECT_CONFIG.faqs" 
          :key="index"
          class="glass-card rounded-xl border border-slate-700/80 overflow-hidden transition-all"
        >
          <button 
            @click="toggle(index)"
            class="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-800/40 transition-colors"
          >
            <span class="text-sm sm:text-base font-bold text-white flex items-center gap-3">
              <span class="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 text-xs flex items-center justify-center font-mono">
                Q
              </span>
              {{ item.q }}
            </span>
            <ChevronDown 
              class="w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0"
              :class="openIndex === index ? 'rotate-180 text-blue-400' : ''"
            />
          </button>

          <div 
            v-show="openIndex === index"
            class="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 animate-in fade-in duration-200"
          >
            {{ item.a }}
          </div>
        </div>
      </div>

      <!-- Feedback CTA -->
      <div class="mt-12 text-center text-xs text-slate-400">
        还有其他疑问或遇到 Bug？欢迎到 
        <a 
          :href="PROJECT_CONFIG.github.issuesUrl" 
          target="_blank" 
          class="text-blue-400 hover:underline font-semibold"
        >
          GitHub Issues 提交反馈
        </a>
        ，我们会第一时间跟进解决。
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { PROJECT_CONFIG } from '../config/project'
import { ChevronDown } from 'lucide-vue-next'

const openIndex = ref(0) // 默认展开第1项

const toggle = (idx) => {
  openIndex.value = openIndex.value === idx ? -1 : idx
}
</script>
