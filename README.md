# 概念音乐 (Concept Music) 官方网站

概念音乐（Concept Music）官方宣传与下载门户网站。基于 **Vue 3 + Vite + Tailwind CSS + Lucide Icons** 构建，采用纯静态单页架构，免服务器运维、零成本部署，具备全球 CDN 加速与 GitHub Releases 自动版本联动能力。

---

## ✨ 核心特性

- ⚡ **超轻量极速**：纯静态前端，首屏毫秒级渲染，无任何冗余依赖。
- 🔄 **GitHub 动态联动**：自动请求主项目 GitHub Releases 接口，获取最新版本号、发布时间及 `.exe` 直链，主项目发版后官网自动更新，无需手动修改代码。
- 🚀 **多通道分发矩阵**：
  - 官方直连（GitHub Releases）
  - 国内极速通道（自动接入开源 CDN 镜像）
  - 绿色免安装便携版 (`.zip`)
  - 国内备用网盘（123云盘等不限速直链）
- 🎨 **现代化暗色毛玻璃美学**：沉浸式科技蓝紫渐变、音频动态律动频谱、全响应式移动端适配。
- 🛡️ **安全友好提示**：内置针对 Windows SmartScreen 拦截机制的指引说明。

---

## 🛠️ 本地运行与开发

```bash
# 1. 安装依赖
npm install

# 2. 启动本地开发服务
npm run dev

# 3. 生产打包构建
npm run build

# 4. 本地预览构建产物
npm run preview
```

---

## 🌐 免费部署指南（推荐 Cloudflare Pages）

### 方案 A：Cloudflare Pages（永久免费 · 首选推荐 ⭐⭐⭐⭐⭐）

1. **推送代码至 GitHub**：
   在 GitHub 上创建一个新的公开仓库（如 `concept-music-website`），并将本项目代码 push 到该仓库：
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit for concept-music official website"
   git branch -M main
   git remote add origin https://github.com/您的用户名/concept-music-website.git
   git push -u origin main
   ```

2. **在 Cloudflare 创建 Pages**：
   - 登录 [Cloudflare 控制台](https://dash.cloudflare.com/)。
   - 点击左侧导航栏 **Workers 和 Pages** -> **创建应用程序** -> 切换到 **Pages** 选项卡 -> 点击 **连接到 Git**。
   - 授权并选择 `concept-music-website` 仓库。

3. **配置构建参数**：
   - **框架预设**：选择 `Vite` 或 `Vue`
   - **构建命令**：`npm run build`
   - **构建输出目录**：`dist`

4. **完成部署**：
   - 点击 **保存并部署**。
   - 大约 1 分钟后，您将获得一个永久专属域名：`https://concept-music-website.pages.dev`。
   - 今后每次您向 `main` 分支推代码，Cloudflare Pages 会自动触发重新构建并更新上线。

---

### 方案 B：Vercel 部署

1. 登录 [Vercel](https://vercel.com/)，点击 **Add New Project**。
2. 导入 `concept-music-website` 仓库。
3. 保持默认配置（Build Command: `npm run build`, Output Directory: `dist`），点击 **Deploy** 即可。

---

## ⚙️ 网站配置说明

如果您需要修改主项目仓库地址或网盘链接，只需编辑 [`src/config/project.js`](./src/config/project.js)：

```javascript
export const PROJECT_CONFIG = {
  github: {
    owner: 'liovoz',
    repo: 'concept-music',
    // ...
  },
  netdisk: {
    name: '123云盘高速下载',
    url: 'https://www.123pan.com/...', // 填入您的实际网盘分享链接
  }
}
```

---

## 📄 开源协议

Released under the [MIT License](../../concept-music/LICENSE).
