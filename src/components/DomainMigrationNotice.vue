<template>
  <div class="fixed inset-0 z-[100] flex flex-col justify-between min-h-screen bg-page bg-studio-ambient text-ink-primary overflow-y-auto selection:bg-ink-primary selection:text-white px-4 py-8 sm:py-12">
    <!-- Top Brand Header -->
    <header class="w-full max-w-2xl mx-auto flex items-center justify-between">
      <div class="flex items-center gap-2.5">
        <div class="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center shadow-apple-subtle bg-white p-0.5 border border-apple-border-light">
          <img src="/logo.svg" alt="概念音乐" class="w-full h-full object-contain" />
        </div>
        <div class="flex items-center gap-2">
          <span class="font-bold text-base tracking-tight text-ink-primary">概念音乐</span>
          <span class="text-xs text-ink-tertiary font-medium">Concept Music</span>
        </div>
      </div>

      <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-700 border border-amber-500/20">
        <span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
        <span>域名升级过渡期</span>
      </div>
    </header>

    <!-- Main Transition Card -->
    <main class="w-full max-w-xl mx-auto my-auto py-6">
      <div class="apple-card mockup-shadow rounded-3xl p-6 sm:p-10 border border-apple-border-light relative overflow-hidden bg-surface">
        <!-- Background decorative ambient blur -->
        <div class="absolute -top-24 -right-24 w-48 h-48 bg-apple-blue/5 rounded-full blur-3xl pointer-events-none"></div>

        <!-- Announcement Tag -->
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-apple-blue border border-apple-blue/20 mb-5">
          <Sparkles class="w-3.5 h-3.5" />
          <span>{{ domainConfig.announcement.badge }}</span>
        </div>

        <!-- Headline -->
        <h1 class="text-2xl sm:text-3xl font-bold tracking-tight text-ink-primary leading-tight mb-4">
          {{ domainConfig.announcement.title }}
        </h1>

        <!-- Narrative Description -->
        <p class="text-sm sm:text-base text-ink-secondary leading-relaxed mb-8">
          {{ domainConfig.announcement.desc }}
        </p>

        <!-- Domain Comparison Box -->
        <div class="p-4 sm:p-5 rounded-2xl bg-subtle border border-apple-border-light mb-6 space-y-3">
          <!-- Legacy Domain Row -->
          <div class="flex items-center justify-between text-xs sm:text-sm py-1.5 border-b border-black/[0.04]">
            <div class="flex items-center gap-2 text-ink-muted">
              <span class="w-2 h-2 rounded-full bg-neutral-300"></span>
              <span class="font-mono line-through">{{ currentHostname }}</span>
            </div>
            <span class="text-[11px] px-2 py-0.5 rounded-full bg-neutral-200/70 text-ink-tertiary font-medium">
              {{ domainConfig.announcement.legacyLabel }}
            </span>
          </div>

          <!-- Primary Domain Row -->
          <div class="flex items-center justify-between text-xs sm:text-sm pt-1">
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-apple-blue animate-pulse"></span>
              <span class="font-mono font-bold text-apple-blue text-sm sm:text-base tracking-tight">
                {{ domainConfig.primaryDomain }}
              </span>
            </div>
            <span class="text-[11px] px-2 py-0.5 rounded-full bg-apple-blue/10 text-apple-blue font-medium border border-apple-blue/20">
              {{ domainConfig.announcement.primaryLabel }}
            </span>
          </div>
        </div>

        <!-- Countdown & Auto Redirect Notice -->
        <div class="mb-6">
          <div class="flex items-center justify-between text-xs text-ink-secondary mb-2">
            <span class="flex items-center gap-1.5">
              <Clock class="w-3.5 h-3.5 text-apple-blue" />
              <span>将在 <strong class="text-ink-primary font-bold text-sm">{{ countdown }}</strong> 秒后自动跳转至新官网</span>
            </span>
            <span class="text-[11px] text-ink-tertiary">{{ countdownProgress }}%</span>
          </div>
          <!-- Progress bar -->
          <div class="w-full h-1.5 bg-black/[0.05] rounded-full overflow-hidden">
            <div 
              class="h-full bg-apple-blue rounded-full transition-all duration-1000 ease-linear"
              :style="{ width: `${countdownProgress}%` }"
            ></div>
          </div>
        </div>

        <!-- Action Button Group -->
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <!-- Primary Direct Jump Button -->
          <button
            @click="handleRedirectNow"
            class="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-medium tracking-tight text-white bg-apple-blue hover:bg-apple-blue-hover shadow-apple-button active:scale-[0.98] transition-all"
          >
            <span>立即前往新官网</span>
            <ArrowRight class="w-4 h-4" />
          </button>

          <!-- Copy New URL Button -->
          <button
            @click="handleCopyDomain"
            class="inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-2xl text-sm font-medium text-ink-secondary hover:text-ink-primary bg-subtle hover:bg-black/[0.06] border border-apple-border-light active:scale-[0.98] transition-all"
            :title="domainConfig.primaryUrl"
          >
            <component :is="isCopied ? Check : Copy" class="w-4 h-4 text-apple-blue" />
            <span>{{ isCopied ? '已复制新域名' : '复制新网址' }}</span>
          </button>
        </div>

        <!-- Stay on current site temporary bypass -->
        <div class="mt-6 pt-4 border-t border-black/[0.04] flex items-center justify-center">
          <button
            @click="handleDismiss"
            class="text-xs text-ink-tertiary hover:text-ink-secondary hover:underline transition-colors py-1"
          >
            暂不跳转，继续临时浏览当前站点
          </button>
        </div>
      </div>
    </main>

    <!-- Footer Security & Guarantee -->
    <footer class="w-full max-w-xl mx-auto text-center">
      <div class="flex items-center justify-center gap-2 text-xs text-ink-tertiary mb-1">
        <ShieldCheck class="w-3.5 h-3.5 text-emerald-500" />
        <span>官方开源数字签名认证与持续分发支持</span>
      </div>
      <p class="text-[11px] text-ink-muted">
        © 2024-2026 概念音乐 Concept Music. All rights reserved.
      </p>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Sparkles, Clock, ArrowRight, Copy, Check, ShieldCheck } from 'lucide-vue-next'
import { PROJECT_CONFIG } from '../config/project'

const emit = defineEmits(['dismiss'])

const domainConfig = PROJECT_CONFIG.domainConfig
const totalSeconds = domainConfig.autoRedirectSeconds || 6
const countdown = ref(totalSeconds)
const isCopied = ref(false)
const currentHostname = ref(typeof window !== 'undefined' ? window.location.hostname : 'liovoz.xyz')

let timer = null

// 计算倒计时百分比
const countdownProgress = computed(() => {
  return Math.round(((totalSeconds - countdown.value) / totalSeconds) * 100)
})

// 计算跳转的目标完整 URL（完整保留 path、search、hash）
const getTargetUrl = () => {
  if (typeof window === 'undefined') return domainConfig.primaryUrl
  const { pathname, search, hash } = window.location
  return `${domainConfig.primaryUrl}${pathname}${search}${hash}`
}

// 立即跳转
const handleRedirectNow = () => {
  if (timer) clearInterval(timer)
  const target = getTargetUrl()
  window.location.href = target
}

// 复制新域名
const handleCopyDomain = async () => {
  try {
    await navigator.clipboard.writeText(domainConfig.primaryUrl)
    isCopied.value = true
    setTimeout(() => {
      isCopied.value = false
    }, 2500)
  } catch (e) {
    // 兼容方案
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

// 暂不跳转，允许在当前旧站临时继续使用
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
  // 启动倒计时自动跳转
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
