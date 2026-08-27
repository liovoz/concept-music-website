<template>
  <section id="download" class="py-24 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Title -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3 font-mono">
          DOWNLOAD & RELEASES
        </h2>
        <p class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          获取最新版本 <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">{{ release.version || 'v3.4.0' }}</span>
        </p>
        <p class="mt-4 text-sm sm:text-base text-slate-400">
          发布日期：<span class="text-slate-200 font-mono">{{ release.publishedAt }}</span> · 纯净无广告 · 开源安全
        </p>
      </div>

      <!-- Download Cards Matrix -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
        <!-- Card 1: Windows Installer (.exe) - Recommended -->
        <div class="glass-card rounded-2xl p-7 border-2 border-blue-500/40 relative flex flex-col justify-between shadow-xl shadow-blue-500/10 group hover:border-blue-400 transition-all">
          <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-bold shadow-md">
            官方首推 · 一键安装
          </div>

          <div>
            <div class="flex items-center justify-between mb-4 mt-2">
              <div class="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Laptop class="w-6 h-6" />
              </div>
              <span class="text-xs font-mono text-slate-400">~{{ release.size }}</span>
            </div>

            <h3 class="text-lg font-bold text-white mb-2">Windows 安装版</h3>
            <p class="text-xs text-slate-400 mb-6 leading-relaxed">
              推荐绝大多数用户使用。包含自动安装向导、桌面与开始菜单快捷方式，支持后续静默自动更新。
            </p>

            <div class="space-y-2 mb-6">
              <div class="text-[11px] text-slate-400 flex items-center gap-1.5">
                <Check class="w-3.5 h-3.5 text-emerald-400" />
                <span>适用于 Windows 10 / 11 64位</span>
              </div>
              <div class="text-[11px] text-slate-400 flex items-center gap-1.5">
                <Check class="w-3.5 h-3.5 text-emerald-400" />
                <span>支持静默检测与升级</span>
              </div>
            </div>
          </div>

          <div class="space-y-2.5">
            <a 
              :href="release.installerFastUrl"
              class="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all group-hover:scale-[1.02]"
            >
              <Download class="w-4 h-4" />
              <span>国内高速下载 (.exe)</span>
            </a>

            <a 
              :href="release.installerUrl"
              target="_blank"
              class="w-full flex items-center justify-center gap-1.5 py-2 rounded-xl text-[11px] font-medium text-slate-400 hover:text-slate-200 bg-slate-800/60 hover:bg-slate-700/60 transition-colors"
            >
              <ExternalLink class="w-3 h-3" />
              <span>GitHub 官方原始直链</span>
            </a>
          </div>
        </div>

        <!-- Card 2: Portable Package (.zip) -->
        <div class="glass-card glass-card-hover rounded-2xl p-7 border border-slate-700/80 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <FolderArchive class="w-6 h-6" />
              </div>
              <span class="text-xs font-mono text-slate-400">绿色版</span>
            </div>

            <h3 class="text-lg font-bold text-white mb-2">免安装便携版</h3>
            <p class="text-xs text-slate-400 mb-6 leading-relaxed">
              解压即用，不写入注册表。适合存放在 U 盘随身携带使用，或在无管理员安装权限的电脑上运行。
            </p>

            <div class="space-y-2 mb-6">
              <div class="text-[11px] text-slate-400 flex items-center gap-1.5">
                <Check class="w-3.5 h-3.5 text-cyan-400" />
                <span>即下即用 · 零残留</span>
              </div>
              <div class="text-[11px] text-slate-400 flex items-center gap-1.5">
                <Check class="w-3.5 h-3.5 text-cyan-400" />
                <span>支持 U 盘移动便携</span>
              </div>
            </div>
          </div>

          <div class="space-y-2.5">
            <a 
              :href="release.portableFastUrl"
              class="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all hover:scale-[1.02]"
            >
              <Download class="w-4 h-4 text-cyan-400" />
              <span>国内高速下载 (.zip)</span>
            </a>

            <a 
              :href="release.portableUrl"
              target="_blank"
              class="w-full flex items-center justify-center gap-1.5 py-2 rounded-xl text-[11px] font-medium text-slate-400 hover:text-slate-200 bg-slate-900/60 hover:bg-slate-800/60 transition-colors"
            >
              <ExternalLink class="w-3 h-3" />
              <span>GitHub 官方原始直链</span>
            </a>
          </div>
        </div>

        <!-- Card 3: Cloud Drive Backup (123 Pan / Netdisk) -->
        <div class="glass-card glass-card-hover rounded-2xl p-7 border border-slate-700/80 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <CloudDownload class="w-6 h-6" />
              </div>
              <span class="text-xs font-mono text-purple-400">备用源</span>
            </div>

            <h3 class="text-lg font-bold text-white mb-2">国内网盘直链</h3>
            <p class="text-xs text-slate-400 mb-6 leading-relaxed">
              为国内网络特殊环境准备的备用通道。支持免登录极速下载，保障在任何网络环境下均能顺畅获取。
            </p>

            <div class="space-y-2 mb-6">
              <div class="text-[11px] text-slate-400 flex items-center gap-1.5">
                <Check class="w-3.5 h-3.5 text-purple-400" />
                <span>123云盘免登录不限速</span>
              </div>
              <div class="text-[11px] text-slate-400 flex items-center gap-1.5">
                <Check class="w-3.5 h-3.5 text-purple-400" />
                <span>全天候备用节点保障</span>
              </div>
            </div>
          </div>

          <div class="space-y-2.5">
            <a 
              :href="PROJECT_CONFIG.netdisk.url"
              target="_blank"
              class="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold text-purple-200 bg-purple-900/40 hover:bg-purple-900/60 border border-purple-700/50 transition-all hover:scale-[1.02]"
            >
              <ExternalLink class="w-4 h-4 text-purple-300" />
              <span>前往 123云盘 备用下载</span>
            </a>

            <a 
              :href="PROJECT_CONFIG.github.releasesUrl"
              target="_blank"
              class="w-full flex items-center justify-center gap-1.5 py-2 rounded-xl text-[11px] font-medium text-slate-400 hover:text-slate-200 bg-slate-900/60 hover:bg-slate-800/60 transition-colors"
            >
              <Github class="w-3 h-3" />
              <span>查看全部历史版本归档</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Security / SmartScreen Helper Notice -->
      <div class="glass-card rounded-xl p-5 border border-amber-500/30 bg-amber-500/5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div class="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
          <AlertCircle class="w-5 h-5" />
        </div>
        <div class="text-xs text-slate-300 leading-relaxed flex-1">
          <span class="font-bold text-amber-300">安装提示：</span>
          若 Windows 弹出 <span class="text-white font-semibold">“Windows 已保护你的电脑 (SmartScreen)”</span> 提示，属于开源未签名软件的正常现象。请点击
          <span class="text-cyan-300 font-bold underline cursor-pointer">【更多信息】</span> 并选择
          <span class="text-cyan-300 font-bold underline cursor-pointer">【仍要运行】</span> 即可正常安装使用，本软件纯净开源，绝不包含任何恶意行为。
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { PROJECT_CONFIG } from '../config/project'
import { 
  Laptop, FolderArchive, CloudDownload, Download, ExternalLink, 
  Check, Github, AlertCircle 
} from 'lucide-vue-next'

defineProps({
  release: {
    type: Object,
    default: () => ({})
  }
})
</script>
