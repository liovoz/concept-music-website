<template>
  <section
    id="faq"
    ref="sectionRef"
    class="scroll-mt-14 py-20 md:py-24 relative border-t border-apple-border-light bg-subtle/60"
  >
    <div class="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

        <!-- Left Editorial Header (Sticky on Desktop) -->
        <div
          class="lg:col-span-4 lg:sticky lg:top-24 reveal-block"
          :class="{ 'is-visible': isVisible }"
        >
          <p class="text-xs font-mono text-ink-muted mb-2">
            Questions &amp; answers
          </p>
          <h2 class="text-3xl sm:text-[40px] font-semibold text-ink-primary tracking-[-0.02em] leading-[1.15]">
            常见答疑
          </h2>
          <p class="mt-3 text-sm sm:text-[15px] text-ink-secondary leading-relaxed text-balance">
            关于音质机制、软件安全性与更新维护的透明解答
          </p>

          <!-- Desktop Feedback Prompt -->
          <div class="mt-6 pt-6 border-t border-apple-border-light hidden lg:block text-xs text-ink-muted leading-relaxed text-balance">
            仍有疑问或需要反馈新功能？欢迎前往
            <a
              :href="PROJECT_CONFIG.github.issuesUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="text-ink-primary underline underline-offset-4 hover:text-apple-blue transition-colors duration-150 ease-studio font-medium focus-ring rounded whitespace-nowrap"
            >
              GitHub Issues
            </a>
            <span class="whitespace-nowrap"> 提交反馈。</span>
          </div>
        </div>

        <!-- Right Smooth Accordion Card -->
        <div
          class="lg:col-span-8 reveal-block reveal-delay-1"
          :class="{ 'is-visible': isVisible }"
        >
          <div class="rounded-2xl bg-surface border border-apple-border-light shadow-surface-xs divide-y divide-apple-border-light overflow-hidden">
            <div
              v-for="(item, index) in PROJECT_CONFIG.faqs"
              :key="index"
            >
              <button
                type="button"
                @click="toggle(index)"
                :aria-expanded="openIndex === index"
                :aria-controls="`faq-panel-${index}`"
                class="w-full text-left px-5 sm:px-6 py-5 flex items-center justify-between gap-4 hover:bg-subtle/50 transition-colors duration-150 ease-studio focus-ring group"
              >
                <span class="text-[15px] sm:text-base font-medium text-ink-primary group-hover:text-apple-blue transition-colors duration-150 ease-studio leading-snug">
                  {{ item.q }}
                </span>
                <ChevronDown
                  class="w-4 h-4 text-ink-muted transition-transform duration-200 ease-studio flex-shrink-0"
                  :stroke-width="1.75"
                  :class="openIndex === index ? 'rotate-180 text-ink-primary' : ''"
                />
              </button>

              <div
                :id="`faq-panel-${index}`"
                role="region"
                class="accordion-grid"
                :data-open="openIndex === index"
              >
                <div class="accordion-inner">
                  <p class="px-5 sm:px-6 pb-5 pt-0.5 text-sm text-ink-secondary leading-[1.7] pr-8 sm:pr-12">
                    {{ item.a }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Mobile & Tablet Feedback Prompt -->
          <div class="mt-8 lg:hidden text-center text-xs text-ink-muted leading-relaxed text-balance">
            仍有疑问或需要反馈新功能？欢迎前往
            <a
              :href="PROJECT_CONFIG.github.issuesUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="text-ink-primary underline underline-offset-4 hover:text-apple-blue transition-colors duration-150 ease-studio font-medium focus-ring rounded whitespace-nowrap"
            >
              GitHub Issues
            </a>
            <span class="whitespace-nowrap"> 提交反馈。</span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { PROJECT_CONFIG } from '../config/project'
import { useScrollReveal } from '../composables/useScrollReveal'
import { ChevronDown } from 'lucide-vue-next'

const openIndex = ref(0)
const { targetRef: sectionRef, isVisible } = useScrollReveal()

const toggle = (idx) => {
  openIndex.value = openIndex.value === idx ? -1 : idx
}
</script>
