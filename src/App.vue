<template>
  <div class="min-h-screen bg-[#080c14] text-slate-100 flex flex-col justify-between selection:bg-blue-600 selection:text-white">
    <!-- Navbar -->
    <Navbar :release="releaseInfo" />

    <!-- Main Sections -->
    <main class="flex-1">
      <Hero :release="releaseInfo" />
      <Features />
      <Screenshots />
      <DownloadCenter :release="releaseInfo" />
      <Faq />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { fetchLatestRelease } from './services/github'
import { PROJECT_CONFIG } from './config/project'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Features from './components/Features.vue'
import Screenshots from './components/Screenshots.vue'
import DownloadCenter from './components/DownloadCenter.vue'
import Faq from './components/Faq.vue'
import Footer from './components/Footer.vue'

// 初始默认使用 fallback 数据，避免网络请求前页面空白或闪烁
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
})

onMounted(async () => {
  const latest = await fetchLatestRelease()
  if (latest) {
    releaseInfo.value = latest
  }
})
</script>
