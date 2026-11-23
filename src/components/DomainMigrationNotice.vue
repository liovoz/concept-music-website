<template>
  <div class="fixed inset-0 z-[100] flex flex-col justify-between min-h-screen bg-page text-ink-primary overflow-y-auto selection:bg-ink-primary selection:text-white px-5 py-8 sm:py-12">
    <!-- Top Brand Header -->
    <header class="w-full max-w-xl mx-auto flex items-center justify-between gap-4">
      <div class="flex items-center gap-2.5">
        <div class="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0 bg-surface ring-1 ring-black/[0.06]">
          <img src="/logo.svg" alt="概念音乐" class="w-full h-full object-contain" />
        </div>
        <div class="flex items-center gap-2">
          <span class="font-semibold text-[15px] tracking-tight text-ink-primary">概念音乐</span>
          <span class="text-xs text-ink-muted font-mono">Concept Music</span>
        </div>
      </div>

      <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-amber-50 text-amber-800 border border-amber-200/80 whitespace-nowrap">
        <span class="w-1.5 h-1.5 rounded-full bg-amber-600 flex-shrink-0"></span>
        <span>域名升级过渡期</span>
      </div>
    </header>

    <!-- Main Transition Card -->
    <main class="w-full max-w-xl mx-auto my-auto py-6">
      <div class="apple-card shadow-surface-lg rounded-[20px] p-6 sm:p-8 border border-apple-border-light bg-surface">
        <!-- Announcement Tag -->
        <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-apple-blue/[0.08] text-apple-blue border border-apple-blue/15 mb-4">
          <Globe class="w-3.5 h-3.5" :stroke-width="1.75" />
          <span>{{ domainConfig.announcement.badge }}</span>
        </div>

        <!-- Headline -->
        <h1 class="text-xl sm:text-[26px] font-semibold tracking-tight text-ink-primary leading-[1.3] text-balance mb-3">
          {{ domainConfig.announcement.title }}
        </h1>

        <!-- Narrative Description -->
        <p class="text-sm sm:text-[15px] text-ink-secondary leading-relaxed mb-6">
          {{ domainConfig.announcement.desc }}
        </p>

        <!-- Domain Comparison Box -->
        <div class="p-4 rounded-xl bg-subtle border border-apple-border-light mb-6 space-y-3">
          <!-- Legacy Domain Row -->
          <div class="flex items-center justify-between gap-3 text-xs sm:text-sm pb-2.5 border-b border-apple-border-light">
            <div class="flex items-center gap-2 text-ink-muted min-w-0">
              <span class="w-2 h-2 rounded-full bg-neutral-300 flex-shrink-0"></span>
              <span class="font-mono line-through truncate">{{ displayLegacyHostname }}</span>
            </div>
            <span class="text-xs px-2 py-0.5 rounded-md bg-black/[0.05] text-ink-muted font-medium whitespace-nowrap">
              {{ domainConfig.announcement.legacyLabel }}
            </span>
          </div>

          <!-- Primary Domain Row -->
          <div class="flex items-center justify-between gap-3 text-xs sm:text-sm">
            <div class="flex items-center gap-2 min-w-0">
              <span class="w-2 h-2 rounded-full bg-apple-blue flex-shrink-0"></span>
              <span class="font-mono font-semibold text-apple-blue text-sm sm:text-base tracking-tight truncate">
                {{ domainConfig.primaryDomain }}
              </span>
            </div>
            <span class="text-xs px-2 py-0.5 rounded-md bg-apple-blue/[0.08] text-apple-blue font-medium border border-apple-blue/15 whitespace-nowrap">
              {{ domainConfig.announcement.primaryLabel }}
            </span>
          </div>
        </div>

        <!-- Countdown & Auto Redirect Notice -->
        <div class="mb-6">
          <div class="flex items-center justify-between text-xs text-ink-secondary mb-2">
            <span class="flex items-center gap-1.5">
              <Clock class="w-3.5 h-3.5 text-apple-blue" :stroke-width="1.75" />
              <span>将在 <strong class="text-ink-primary font-mono tabular-nums font-semibold text-sm">{{ countdown }}</strong> 秒后自动跳转至新官网</span>
            </span>
            <span class="text-xs font-mono tabular-nums text-ink-muted">{{ countdownProgress }}%</span>
          </div>
          <!-- GPU-composited Progress bar (scaleX instead of width) -->
          <div class="w-full h-1.5 bg-black/[0.06] rounded-full overflow-hidden">
            <div
              class="w-full h-full bg-apple-blue rounded-full origin-left transition-transform duration-1000 ease-linear"
              :style="{ transform: `scaleX(${countdownProgress / 100})` }"
            ></div>
          </div>
        </div>

        <!-- Action Button Group -->
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <button
            type="button"
            @click="handleRedirectNow"
            class="flex-1 inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl text-sm font-medium text-white bg-apple-blue hover:bg-apple-blue-hover shadow-surface-xs active:scale-[0.98] transition-[background-color,transform] duration-150 ease-studio focus-ring"
          >
            <span>立即前往新官网</span>
            <ArrowRight class="w-4 h-4" :stroke-width="1.75" />
          </button>

          <button
            type="button"
            @click="handleCopyDomain"
            class="inline-flex items-center justify-center gap-1.5 h-11 px-5 rounded-xl text-sm font-medium text-ink-secondary hover:text-ink-primary bg-subtle hover:bg-black/[0.06] border border-apple-border-light active:scale-[0.98] transition-[background-color,color,transform] duration-150 ease-studio focus-ring"
            :title="domainConfig.primaryUrl"
          >
            <component :is="isCopied ? Check : Copy" class="w-4 h-4 text-apple-blue" :stroke-width="1.75" />
            <span>{{ isCopied ? '已复制新域名' : '复制新网址' }}</span>
          </button>
        </div>

        <!-- Stay on current site temporary bypass -->
        <div class="mt-6 pt-4 border-t border-apple-border-light flex items-center justify-center">
          <button
            type="button"
            @click="handleDismiss"
            class="text-xs text-ink-muted hover:text-ink-secondary hover:underline underline-offset-4 transition-colors duration-150 ease-studio py-1 px-2 rounded focus-ring"
          >
            暂不跳转，继续临时浏览当前站点
          </button>
        </div>
      </div>
    </main>

    <!-- Footer Security & Guarantee -->
    <footer class="w-full max-w-xl mx-auto text-center">
      <div class="flex items-center justify-center gap-2 text-xs text-ink-muted mb-1">
        <ShieldCheck class="w-3.5 h-3.5 text-emerald-600" :stroke-width="1.75" />
        <span>官方开源数字签名认证与持续分发支持</span>
      </div>
      <p class="text-xs text-ink-muted">
        © 2024-2026 概念音乐 Concept Music. All rights reserved.
      </p>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Globe, Clock, ArrowRight, Copy, Check, ShieldCheck } from 'lucide-vue-next'
import { PROJECT_CONFIG } from '../config/project'

const emit = defineEmits(['dismiss'])

const domainConfig = PROJECT_CONFIG.domainConfig
const totalSeconds = domainConfig.autoRedirectSeconds || 6
const countdown = ref(totalSeconds)
const isCopied = ref(false)

const resolveDisplayLegacyHostname = () => {
  const fallbackLegacy = domainConfig.legacyDomains?.[0] || 'liovoz.xyz'
  if (typeof window === 'undefined') return fallbackLegacy
  const params = new URLSearchParams(window.location.search)
  const testDomain = params.get('test_domain')
  if (testDomain) return testDomain
  const host = window.location.hostname
  if (host === 'localhost' || host === '127.0.0.1') return fallbackLegacy
  return host
}

const displayLegacyHostname = ref(resolveDisplayLegacyHostname())

let timer = null

const countdownProgress = computed(() => {
  return Math.round(((totalSeconds - countdown.value) / totalSeconds) * 100)
})

const getTargetUrl = () => {
  if (typeof window === 'undefined') return domainConfig.primaryUrl
  const { pathname, search, hash } = window.location
  return `${domainConfig.primaryUrl}${pathname}${search}${hash}`
}

const handleRedirectNow = () => {
  if (timer) clearInterval(timer)
  const target = getTargetUrl()
  window.location.href = target
}

const handleCopyDomain = async () => {
  try {
    await navigator.clipboard.writeText(domainConfig.primaryUrl)
    isCopied.value = true
    setTimeout(() => {
      isCopied.value = false
    }, 2500)
  } catch (e) {
    const input = document.createElement('input')
    input.value = domainConfig.primaryUrl
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
    isCopied.value = true
    setTimeout(() => {
      isCopied.value = false
    }, 2500)
  }
}

const handleDismiss = () => {
  if (timer) clearInterval(timer)
  try {
    sessionStorage.setItem('skip_domain_migration_notice', '1')
  } catch (err) {
    console.warn('sessionStorage not available', err)
  }
  emit('dismiss')
}

onMounted(() => {
  timer = setInterval(() => {
    countdown.value -= 1
    if (countdown.value <= 0) {
      clearInterval(timer)
      handleRedirectNow()
    }
  }, 1000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>
