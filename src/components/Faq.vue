<template>
  <section id="faq" class="py-28 md:py-36 relative border-t border-apple-border-light bg-subtle/50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Header -->
      <div class="text-center max-w-xl mx-auto mb-16 md:mb-20">
        <div class="text-xs font-mono font-medium uppercase tracking-widest text-ink-tertiary mb-3">
          Questions & Answers
        </div>
        <h2 class="text-3xl sm:text-5xl font-semibold text-ink-primary tracking-tight leading-[1.15]">
          常见答疑
        </h2>
        <p class="mt-4 text-base text-ink-secondary">
          关于音质机制、软件安全性与更新维护的透明解答。
        </p>
      </div>

      <!-- Clean Minimalist Hairline Accordion -->
      <div class="divide-y divide-apple-border-light">
        <div 
          v-for="(item, index) in PROJECT_CONFIG.faqs" 
          :key="index"
          class="py-6"
        >
          <button 
            @click="toggle(index)"
            class="w-full text-left flex items-center justify-between gap-4 group"
          >
            <span class="text-base sm:text-lg font-medium text-ink-primary group-hover:text-apple-blue transition-colors">
              {{ item.q }}
            </span>
            <ChevronDown 
              class="w-4 h-4 text-ink-tertiary transition-transform duration-300 flex-shrink-0"
              :class="openIndex === index ? 'rotate-180 text-ink-primary' : ''"
            />
          </button>

          <div 
            v-show="openIndex === index"
            class="pt-4 text-sm text-ink-secondary leading-relaxed pr-8 animate-in fade-in duration-200"
          >
            {{ item.a }}
          </div>
        </div>
      </div>

      <!-- Bottom issue link -->
      <div class="mt-16 text-center text-xs text-ink-tertiary">
        仍有疑问或需要反馈新功能？欢迎前往 
        <a 
          :href="PROJECT_CONFIG.github.issuesUrl" 
          target="_blank" 
          class="text-ink-primary underline underline-offset-4 hover:text-apple-blue transition-colors font-medium"
        >
          GitHub Issues
        </a>
        提交反馈。
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { PROJECT_CONFIG } from '../config/project'
import { ChevronDown } from 'lucide-vue-next'

const openIndex = ref(0)

const toggle = (idx) => {
  openIndex.value = openIndex.value === idx ? -1 : idx
}
</script>
