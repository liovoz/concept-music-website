# 概念音乐 (Concept Music) 官方网站

<p align="center">
  <img src="public/logo.svg" alt="Concept Music Logo" width="80" height="80" />
</p>

<p align="center">
  <strong>只留下音乐，其余归于纯净。</strong><br>
  概念音乐（Concept Music）官方宣传与下载门户网站
</p>

<p align="center">
  <a href="https://github.com/liovoz/concept-music"><img src="https://img.shields.io/badge/App-Concept%20Music-0071e3?logo=windows&logoColor=white" alt="App Repo" /></a>
  <a href="https://github.com/liovoz/concept-music-website"><img src="https://img.shields.io/badge/Website-Vue%203%20%2B%20Vite-42b883?logo=vue.js&logoColor=white" alt="Vue 3" /></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Style-Tailwind%20CSS-38bdf8?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" /></a>
  <a href="https://pages.cloudflare.com"><img src="https://img.shields.io/badge/Deploy-Cloudflare%20Pages-f38020?logo=cloudflare&logoColor=white" alt="Cloudflare Pages" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-emerald.svg" alt="License" /></a>
</p>

---

## 📖 项目简介

本项目为 **概念音乐（Concept Music）** 官方专属门户与分发网站。基于 **Vue 3 + Vite + Tailwind CSS** 打造，采用 **Apple 现代声学极简美学（Acoustic Modern）** 纯浅色设计系统，具备大尺度空间留白、硬件级产品悬浮展台以及与 GitHub Releases 实时联动的自动化发版机制。

---

## ✨ 核心特性

- 🎨 **Apple 现代声学极简美学与系统性 Unslop 工艺**：
  - 纯净明亮的冷调工作室背景（`#FBFBFD`），收敛过度留白与非 4px 栅格杂散间距。
  - 真实桌面客户端 3D 展台，支持 6 大核心视图流转、键盘与触摸手势、移动端防遮挡控制栏与纯 GPU 合成动画。
  - 极细微 1px 中性发丝边框与统一层级阴影（`surface-xs` / `surface-sm` / `surface-md` / `surface-lg`），彻底移除有色辉光。
  - 桌面端编辑式分栏与左右基线对齐排版，彻底消除跨设备单字孤行与标点悬挂。
  - 全站单一动效曲线（`cubic-bezier(0.22, 1, 0.36, 1)`），支持轻量滚动显隐与 `prefers-reduced-motion` 完整降级。
- 🔄 **GitHub Releases 实时自动联动**：
  - 客户端发版后，官网通过 GitHub API 自动拉取最新版本号、发布日期、文件大小与下载直链。
  - **无需手动修改官网代码即可完成版本全自动同步更新**。
- 🚀 **高速分发下载矩阵**：
  - **Windows 官方标准安装版 (`.exe`)**：高对比炭黑主卡承接，支持国内极速 CDN 满速镜像下载与 GitHub 官方源直连。
  - **绿色免安装便携版 (`.exe`)**：单文件免安装、无痕随身。
  - **国内网盘备用通道**：集成夸克网盘高速下载，保障多环境全天候可用。
- 💡 **轻量零运维架构**：
  - 纯静态单页架构，免后端服务器运维，首屏加载毫秒级响应。
  - 原生适配 Cloudflare Pages 与 Vercel 全球边缘节点 CDN 托管。
- 🌐 **域名治理与平滑过渡**：
  - 全面支持官方专属主域名（`concept.cc.cd`）分发与旧域名（`liovoz.xyz`）平滑迁移提示。
- 🛡️ **安全友好引导**：
  - 内置针对 Windows SmartScreen 提示的清晰开源安全指引。

---

## 📂 项目结构

```text
concept-music-website/
├── public/
│   ├── favicon.ico                 # 网站 Favicon (官方圆形蓝色耳机)
│   ├── favicon.svg                 # SVG Favicon
│   ├── logo.svg                    # 官方品牌 Logo
│   ├── Home.png                    # 客户端主界面展示截图
│   ├── New.png                     # 新歌速递界面截图
│   ├── FM.png                      # 私人漫游界面截图
│   ├── Artists.png                 # 歌手界面截图
│   ├── Explore.png                 # 歌单广场界面截图
│   └── Netease.png                 # 网易歌单界面截图
├── src/
│   ├── assets/
│   │   └── main.css                # 全局样式、Token 变量、动效曲线与组件类
│   ├── components/
│   │   ├── Navbar.vue              # 极简磨砂毛玻璃导航栏（含板块激活指示与移动端抽屉）
│   │   ├── Hero.vue                # 首屏聚光视觉区与双操作入口
│   │   ├── Hero3DCarousel.vue      # 客户端 3D 轮播展示台（手势/键盘/防遮挡）
│   │   ├── DownloadCenter.vue      # 左右基线对齐抬头与分层下载中心
│   │   ├── Faq.vue                 # 桌面端 12 栅格左粘性引导 + 右平滑手风琴
│   │   ├── Footer.vue              # 纯净工业风页脚
│   │   └── DomainMigrationNotice.vue # 旧域名迁移过渡门禁与平滑引导页
│   ├── composables/
│   │   ├── useScrollReveal.js      # 轻量一次性视口滚动显隐 Hook
│   │   └── useTheme.js             # 纯浅色模式状态管理
│   ├── config/
│   │   └── project.js              # 仓库地址、域名配置、网盘链接与静态兜底
│   ├── services/
│   │   └── github.js               # GitHub Release 实时获取与 CDN 加速解析
│   ├── App.vue                     # 根组件与域名过渡路由判定
│   └── main.js                     # 入口文件
├── index.html                      # HTML 模板与 SEO 元信息
├── tailwind.config.js              # Tailwind 配色、中性阴影、字系与动效曲线配置
├── vite.config.js                  # Vite 构建配置
└── wrangler.toml                   # Cloudflare Pages 配置文件
```

---

## 🛠️ 本地开发与构建

### 1. 克隆与安装依赖

```bash
# 克隆仓库
git clone https://github.com/liovoz/concept-music-website.git
cd concept-music-website

# 安装依赖
npm install
```

### 2. 本地运行开发服务

```bash
npm run dev
```

运行后在浏览器中打开 `http://localhost:5173` 即可实时预览。

### 3. 打包构建与预览

```bash
# 生产构建（输出到 dist 目录）
npm run build

# 本地预览构建产物
npm run preview
```

---

## ⚙️ 网站配置说明

若需调整项目信息、仓库关联或网盘分享地址，只需修改 [`src/config/project.js`](src/config/project.js)：

```javascript
export const PROJECT_CONFIG = {
  name: '概念音乐',
  enName: 'Concept Music',
  slogan: '极致纯净 · 畅享高品质音乐',
  
  // GitHub 客户端仓库配置（用于自动获取 Release）
  github: {
    owner: 'liovoz',
    repo: 'concept-music',
    repoUrl: 'https://github.com/liovoz/concept-music',
    releasesUrl: 'https://github.com/liovoz/concept-music/releases',
    issuesUrl: 'https://github.com/liovoz/concept-music/issues',
    latestApiUrl: 'https://api.github.com/repos/liovoz/concept-music/releases/latest',
  },

  // 夸克网盘等备用下载通道
  netdisk: {
    name: '夸克网盘高速下载',
    url: 'https://pan.quark.cn/s/5416d80d144d',
    extractCode: '',
  },

  // CDN 镜像源
  cdnMirrors: [
    { name: '国内高速镜像 1', prefix: 'https://ghfast.top/' },
    { name: '国内高速镜像 2', prefix: 'https://gh-proxy.com/' }
  ]
}
```

---

## 🌐 部署指南

### 方式一：Cloudflare Pages（推荐 ⭐⭐⭐⭐⭐）

本项目已包含 `wrangler.toml`，原生支持 Cloudflare Pages：

1. 将代码推送到 GitHub 仓库。
2. 登录 [Cloudflare 控制台](https://dash.cloudflare.com/)，进入 **Workers & Pages** -> **创建应用程序** -> 选择 **Pages** -> **连接到 Git**。
3. 选择 `concept-music-website` 仓库并配置：
   - **框架预设 (Framework preset)**：`Vite`
   - **构建命令 (Build command)**：`npm run build`
   - **构建输出目录 (Build output directory)**：`dist`
4. 点击 **保存并部署**。后续向 `main` 分支提交代码均会自动触发构建与全球边缘节点发布。

### 方式二：Vercel 部署

1. 登录 [Vercel](https://vercel.com/)，点击 **Add New Project** 并导入仓库。
2. Framework Preset 选择 **Vite**，Build Command 保持 `npm run build`，Output Directory 保持 `dist`。
3. 点击 **Deploy** 即可完成部署。

---

## 🔗 相关项目

- 🎵 [概念音乐桌面客户端 (Concept Music)](https://github.com/liovoz/concept-music) - 基于 Electron + Vue 3 的 Windows 高保真音乐播放器

---

## 📄 开源协议

本项目基于 [MIT 协议](LICENSE) 开源。
