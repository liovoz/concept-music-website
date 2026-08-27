import { PROJECT_CONFIG } from '../config/project'

/**
 * 格式化字节大小
 */
export function formatBytes(bytes, decimals = 1) {
  if (!bytes || bytes === 0) return '85 MB'
  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}

/**
 * 格式化日期为 YYYY-MM-DD
 */
export function formatDate(dateString) {
  if (!dateString) return ''
  try {
    const d = new Date(dateString)
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
  } catch {
    return dateString
  }
}

/**
 * 获取最新 Release 信息（带智能降级与加速链接计算）
 */
export async function fetchLatestRelease() {
  const fallback = PROJECT_CONFIG.fallbackRelease

  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 6000) // 6秒超时

    const res = await fetch(PROJECT_CONFIG.github.latestApiUrl, {
      signal: controller.signal,
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    })
    clearTimeout(timeoutId)

    if (!res.ok) {
      console.warn(`GitHub API response not ok: ${res.status}, using fallback.`)
      return buildReleaseData(fallback, true)
    }

    const data = await res.json()
    const version = data.tag_name || fallback.version
    const publishedAt = formatDate(data.published_at) || fallback.publishedAt
    const body = data.body || '常规体验优化与错误修复'

    // 寻找 .exe 安装包与 .zip 便携包
    const assets = data.assets || []
    const exeAsset = assets.find(a => a.name.endsWith('.exe'))
    const zipAsset = assets.find(a => a.name.endsWith('.zip'))

    const installerUrl = exeAsset ? exeAsset.browser_download_url : fallback.installerUrl
    const installerName = exeAsset ? exeAsset.name : fallback.installerName
    const size = exeAsset ? formatBytes(exeAsset.size) : fallback.size

    const portableUrl = zipAsset ? zipAsset.browser_download_url : fallback.portableUrl
    const portableName = zipAsset ? zipAsset.name : fallback.portableName

    return {
      version,
      publishedAt,
      body,
      size,
      installerName,
      installerUrl,
      installerFastUrl: `${PROJECT_CONFIG.cdnMirrors[0].prefix}${installerUrl}`,
      portableName,
      portableUrl,
      portableFastUrl: `${PROJECT_CONFIG.cdnMirrors[0].prefix}${portableUrl}`,
      allAssets: assets,
      isFallback: false
    }
  } catch (err) {
    console.warn('Failed to fetch latest GitHub release, fallback to static defaults:', err)
    return buildReleaseData(fallback, true)
  }
}

function buildReleaseData(fallback, isFallback = true) {
  return {
    version: fallback.version,
    publishedAt: fallback.publishedAt,
    body: '最新版本包含体验优化与问题修复',
    size: fallback.size,
    installerName: fallback.installerName,
    installerUrl: fallback.installerUrl,
    installerFastUrl: `${PROJECT_CONFIG.cdnMirrors[0].prefix}${fallback.installerUrl}`,
    portableName: fallback.portableName,
    portableUrl: fallback.portableUrl,
    portableFastUrl: `${PROJECT_CONFIG.cdnMirrors[0].prefix}${fallback.portableUrl}`,
    allAssets: [],
    isFallback
  }
}
