export const PROJECT_CONFIG = {
  name: '概念音乐',
  enName: 'Concept Music',
  slogan: '极致纯净 · 畅享高品质音乐',
  subSlogan: '基于 Electron 与 Vue 3 构建的现代化 Windows 桌面音乐播放器。支持 Hi-Res / SQ 无损多音质、独立桌面歌词、网易云歌单导入与个性化推荐。',
  
  // GitHub 配置
  github: {
    owner: 'liovoz',
    repo: 'concept-music',
    repoUrl: 'https://github.com/liovoz/concept-music',
    releasesUrl: 'https://github.com/liovoz/concept-music/releases',
    issuesUrl: 'https://github.com/liovoz/concept-music/issues',
    latestApiUrl: 'https://api.github.com/repos/liovoz/concept-music/releases/latest',
  },

  // 默认离线/降级版本信息 (当 GitHub API 达到访问上限或断网时使用)
  fallbackRelease: {
    version: 'v3.4.0',
    publishedAt: '2025-02-15',
    installerName: 'concept-music-Setup-3.4.0.exe',
    installerUrl: 'https://github.com/liovoz/concept-music/releases/download/v3.4.0/concept-music-Setup-3.4.0.exe',
    portableName: 'concept-music-3.4.0-win-x64.zip',
    portableUrl: 'https://github.com/liovoz/concept-music/releases/download/v3.4.0/concept-music-3.4.0-win-x64.zip',
    size: '85 MB',
  },

  // 国内网盘备用链接 (可配置 123云盘 / 百度网盘 / 夸克网盘)
  netdisk: {
    name: '123云盘高速下载 (免登录不限速)',
    url: 'https://www.123pan.com', // 用户后续可直接替换为您具体的分享直链
    extractCode: '',
  },

  // 国内加速镜像前缀
  cdnMirrors: [
    { name: '国内高速镜像 1 (GHFast)', prefix: 'https://ghfast.top/' },
    { name: '国内高速镜像 2 (GHProxy)', prefix: 'https://gh-proxy.com/' }
  ],

  // 核心功能特性
  features: [
    {
      id: 'audio-quality',
      title: '极致多音质体验',
      desc: '支持标准、HQ、SQ无损、Hi-Res、超清蝰蛇、全景声等高规格音质入口，智能网络感知与音质平滑回退。',
      icon: 'Music2',
      tag: 'Hi-Res 无损',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      id: 'desktop-lyrics',
      title: '沉浸式桌面歌词',
      desc: '轻量透明悬浮窗，支持双行/单行平滑滚动、逐字精准同步、双语翻译显示、窗口锁定与快捷播放控制。',
      icon: 'Mic2',
      tag: '动态同步',
      color: 'from-cyan-400 to-teal-400'
    },
    {
      id: 'netease-import',
      title: '网易云歌单无缝迁移',
      desc: '一键解析网易云音乐歌单链接与 ID，秒级自动匹配转换并导入播放列表，换软件不丢歌。',
      icon: 'Import',
      tag: '一键导入',
      color: 'from-red-400 to-rose-500'
    },
    {
      id: 'personal-fm',
      title: '私人 FM 与智能推荐',
      desc: '基于偏好的个性化推荐流，支持高潮片段试听、红心收藏、相似单曲雷达探索，发现属于你的好音乐。',
      icon: 'Radio',
      tag: '个性探索',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'tray-and-gain',
      title: '系统托盘与音量增强',
      desc: '深度集成 Windows 任务栏缩略图控制、全局快捷键、多档音量软增益放大以及本地音频回放代理。',
      icon: 'Sliders',
      tag: '系统级集成',
      color: 'from-amber-400 to-orange-500'
    },
    {
      id: 'pure-and-auto-update',
      title: '纯净无广 · 静默更新',
      desc: '0 商业广告、0 冗余弹窗、极速秒开。内置 electron-updater 自动检测与无缝更新，常用常新。',
      icon: 'Sparkles',
      tag: '开源纯净',
      color: 'from-emerald-400 to-green-500'
    }
  ],

  // 界面预览截图 Tab
  screenshots: [
    {
      id: 'discover',
      name: '发现与推荐',
      title: '精选歌单 · 每日推荐 · 权威排行榜',
      desc: '每日为你精选优质歌单，聚合流行榜、新歌榜、热歌榜等全网权威排行榜。',
      type: 'mockup-discover'
    },
    {
      id: 'player',
      name: '沉浸播放界面',
      title: '多音质切换 · 动态波形 · 沉浸式听歌',
      desc: '全屏歌词封面律动，支持标准、HQ、SQ、Hi-Res自由切换，音质细节尽收眼底。',
      type: 'mockup-player'
    },
    {
      id: 'lyrics',
      name: '独立桌面歌词',
      title: '双语翻译 · 逐字滚动 · 置顶锁定',
      desc: '精美透明磨砂质感悬浮窗，办公、游戏时不错过每一句歌词。',
      type: 'mockup-lyrics'
    },
    {
      id: 'import',
      name: '网易云歌单导入',
      title: '一键粘贴 · 秒级转换 · 无缝衔接',
      desc: '简单输入外部歌单分享链接，即可将收藏多年的音乐一网打尽。',
      type: 'mockup-import'
    },
    {
      id: 'fm',
      name: '私人 FM 模式',
      title: '懂你所爱 · 相似探索 · 高潮试听',
      desc: '无限流心动漫游，一键切换歌曲最动听的高潮副歌片段。',
      type: 'mockup-fm'
    }
  ],

  // 常见问题解答
  faqs: [
    {
      q: '为什么安装时 Windows 会提示“Windows 已保护你的电脑”？',
      a: '因为本项目为开源项目，个人开发者未购买昂贵的微软商业数字签名证书（每年数千元）。这是 Windows SmartScreen 的正常机制。请放心点击【更多信息】->【仍要运行】即可安全安装使用，软件绝无任何恶意代码。'
    },
    {
      q: '概念音乐是否完全免费？会有广告吗？',
      a: '概念音乐基于 MIT 协议完全开源，承诺 100% 永久免费、纯净无广告、不收集用户隐私，所有源代码均在 GitHub 公开可查。'
    },
    {
      q: '音乐播放与多音质数据从哪里来？',
      a: '软件内置了本地轻量 API 代理服务，聚合获取公开数据源，支持标准音质到 SQ 无损、Hi-Res 等多规格切换。'
    },
    {
      q: '如何更新到最新版本？',
      a: '软件内置了自动检查更新功能，每当 GitHub 发布新 Release，启动播放器时会自动提示并静默下载更新；您也可以随时访问官网重新下载最新覆盖安装。'
    },
    {
      q: '支持 Mac 或 Linux 系统吗？',
      a: '目前官方首发打包为 Windows 10/11 x64 安装包。由于基于 Electron + Vue 3 架构，源代码本身跨平台兼容，未来也会提供 macOS / Linux 的编译构建。'
    }
  ]
}
