<template>
  <div>
    <!-- Domain Migration Notice for Domain A (liovoz.xyz) -->
    <DomainMigrationNotice 
      v-if="showMigrationNotice" 
      @dismiss="showMigrationNotice = false" 
    />

    <!-- Main Website Container -->
    <div 
      class="min-h-screen flex flex-col justify-between bg-page text-ink-primary selection:bg-ink-primary selection:text-white"
      :class="{ 'hidden': showMigrationNotice }"
    >
      <!-- Navbar -->
      <Navbar :release="releaseInfo" />

      <!-- Main Sections -->
      <main class="flex-1">
        <Hero :release="releaseInfo" />
        <DownloadCenter :release="releaseInfo" />
        <Faq />
      </main>

      <!-- Footer -->
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useTheme } from './composables/useTheme'
import { fetchLatestRelease } from './services/github'
import { PROJECT_CONFIG } from './config/project'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import DownloadCenter from './components/DownloadCenter.vue'
import Faq from './components/Faq.vue'
import Footer from './components/Footer.vue'
import DomainMigrationNotice from './components/DomainMigrationNotice.vue'

const { initTheme } = useTheme()

// 初始默认使用 fallback 数据
const releaseInfo = ref({
  version: PROJECT_CONFIG.fallbackRelease.version,
  publishedAt: PROJECT_CONFIG.fallbackRelease.publishedAt,
  size: PROJECT_CONFIG.fallbackRelease.size,
  installerName: PROJECT_CONFIG.fallbackRelease.installerName,
  installerUrl: PROJECT_CONFIG.fallbackRelease.installerUrl,
  installerFastUrl: `${PROJECT_CONFIG.cdnMirrors[0].prefix}${PROJECT_CONFIG.fallbackRelease.installerUrl}`,
  portableName: PROJECT_CONFIG.fallbackRelease.portableName,
  portableUrl: PROJECT_CONFIG.fallbackRelease.portableUrl,
  portableFastUrl: `${PROJECT_CONFIG.cdnMirrors[0].prefix}${PROJECT_CONFIG.fallbackRelease.portableUrl}`,
  portableSize: PROJECT_CONFIG.fallbackRelease.portableSize || '82.5 MB',
})

// 域名过渡检测逻辑：同步判定，避免闪烁
const checkMigrationInitial = () => {
  if (typeof window === 'undefined') return false

  // 1. 检查是否在当前会话中标记了临时跳过
  try {
    if (sessionStorage.getItem('skip_domain_migration_notice') === '1') {
      return false
    }
  } catch (e) {
    // ignore
  }

  const hostname = window.location.hostname.toLowerCase()
  const legacyDomains = PROJECT_CONFIG.domainConfig?.legacyDomains || []

  // 2. 支持测试参数强制预览过渡页：?test_migration=1 或 ?test_domain=liovoz.xyz
  const urlParams = new URLSearchParams(window.location.search)
  const isTest = urlParams.get('test_migration') === '1' || 
                 legacyDomains.some(d => urlParams.get('test_domain') === d)

  // 3. 判断是否命中需要展示过渡页的旧域名
  const isLegacy = legacyDomains.some(domain => 
    hostname === domain.toLowerCase() || hostname.endsWith(`.${domain.toLowerCase()}`)
  )

  return isTest || isLegacy
}

const showMigrationNotice = ref(checkMigrationInitial())

onMounted(async () => {
  initTheme()

  const latest = await fetchLatestRelease()
  if (latest) {
    releaseInfo.value = latest
  }
})
</script>
