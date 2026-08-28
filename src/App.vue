<template>
  <div class="min-h-screen flex flex-col justify-between bg-page text-ink-primary selection:bg-ink-primary selection:text-white">
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

onMounted(async () => {
  initTheme()

  const latest = await fetchLatestRelease()
  if (latest) {
    releaseInfo.value = latest
  }
})
</script>
