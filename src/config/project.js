export const PROJECT_CONFIG = {
  name: '概念音乐',
  enName: 'Concept Music',
  slogan: '极致纯净 · 畅享高品质音乐',
  subSlogan: '基于 Electron 与 Vue 3 打造的 Windows 现代化高保真桌面音乐播放器。支持 Hi-Res / SQ 母带级多音质、沉浸式独立桌面歌词、网易云歌单秒级迁移，0 广告、毫秒响应。',
  
  // GitHub 配置
  github: {
    owner: 'liovoz',
    repo: 'concept-music',
    repoUrl: 'https://github.com/liovoz/concept-music',
    releasesUrl: 'https://github.com/liovoz/concept-music/releases',
    issuesUrl: 'https://github.com/liovoz/concept-music/issues',
    latestApiUrl: 'https://api.github.com/repos/liovoz/concept-music/releases/latest',
  },

  // 默认兜底版本信息
  fallbackRelease: {
    version: 'v3.4.0',
    publishedAt: '2025-02-15',
    installerName: 'concept-music-Setup-3.4.0.exe',
    installerUrl: 'https://github.com/liovoz/concept-music/releases/download/v3.4.0/concept-music-Setup-3.4.0.exe',
    portableName: 'concept-music-3.4.0-win-x64.zip',
    portableUrl: 'https://github.com/liovoz/concept-music/releases/download/v3.4.0/concept-music-3.4.0-win-x64.zip',
    size: '85 MB',
  },

  // 国内网盘直链配置
  netdisk: {
    name: '夸克网盘高速下载',
    url: 'https://pan.quark.cn/s/5416d80d144d',
    extractCode: '',
  },

  // CDN 镜像源
  cdnMirrors: [
    { name: '国内高速镜像 1', prefix: 'https://ghfast.top/' },
    { name: '国内高速镜像 2', prefix: 'https://gh-proxy.com/' }
  ],

  // 常见问题解答
  faqs: [
    {
      q: '安装时 Windows 提示“Windows 已保护你的电脑 (SmartScreen)”？',
      a: '这是开源个人项目的正常现象。由于微软企业数字签名证书每年成本高昂（数千元），本项目作为非盈利开源软件未购买商业证书。请放心点击【更多信息】->【仍要运行】即可正常使用，代码完全开源透明，绝无任何恶意行为。'
    },
    {
      q: '概念音乐是否完全免费？未来会有商业广告吗？',
      a: '概念音乐基于 MIT 协议完全开源，承诺 100% 永久免费、0 商业广告、0 弹窗骚扰。我们尊重每一个音乐爱好者的纯粹听歌体验。'
    },
    {
      q: '多音质与 Hi-Res 音频数据源是什么机制？',
      a: '软件内置了本地轻量级 API 代理服务，聚合获取公开音频数据，支持从标准 128k 到 HQ 320k、SQ 无损 FLAC 以及 Hi-Res 96kHz/24bit 的自动探测与平滑回退。'
    },
    {
      q: '如何更新到后续最新版本？',
      a: '软件内置基于 electron-updater 的自动更新模块。每当 GitHub 发布新 Release，客户端启动时会自动检测并静默下载更新包；您也可以直接访问官网一键覆盖安装。'
    },
    {
      q: '支持哪些操作系统与硬件架构？',
      a: '目前官方打包支持 Windows 10 与 Windows 11 (x64 架构)。代码架构跨平台兼容，未来也将逐步推出 macOS 与 Linux 客户端。'
    }
  ]
}
