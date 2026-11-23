<template>
  <div
    class="relative w-full max-w-6xl mx-auto select-none pt-1 pb-2 outline-none"
    role="region"
    aria-roledescription="carousel"
    aria-label="概念音乐客户端界面预览"
    tabindex="0"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @focusin="handleFocusIn"
    @focusout="handleFocusOut"
    @keydown.left.prevent="handlePrevClick"
    @keydown.right.prevent="handleNextClick"
  >
    <!-- 3D Carousel Stage -->
    <div
      ref="stageRef"
      class="relative w-full h-[236px] sm:h-[372px] md:h-[460px] lg:h-[520px] flex items-center justify-center carousel-3d-stage cursor-grab active:cursor-grabbing"
      @mousedown="startDrag"
      @mousemove="onDrag"
      @mouseup="endDrag"
      @mouseleave="endDrag"
      @touchstart.passive="startTouch"
      @touchmove.passive="onTouch"
      @touchend="endTouch"
    >
      <!-- Cards Stack -->
      <div
        v-for="(item, index) in items"
        :key="item.id"
        class="absolute w-[88%] sm:w-[78%] md:w-[72%] lg:w-[68%] transition-[transform,opacity] duration-[520ms] ease-studio will-change-transform"
        :style="getCardStyle(index)"
        @click="handleCardClick(index)"
      >
        <!-- Crisp Window Frame -->
        <div
          class="relative rounded-2xl overflow-hidden bg-surface ring-1 ring-black/[0.08] transition-shadow duration-[520ms] ease-studio"
          :class="getDiff(index) === 0 ? 'shadow-surface-lg' : 'shadow-surface-sm cursor-pointer'"
        >
          <img
            :src="item.src"
            :alt="`概念音乐客户端 - ${item.title} (${item.subtitle})`"
            class="w-full h-auto object-cover block pointer-events-none select-none"
            draggable="false"
            loading="eager"
          />

          <!-- Soft Page-Matched Veil (keeps frames 100% opaque to prevent bleed-through during 3D swaps) -->
          <div
            class="absolute inset-0 bg-page pointer-events-none transition-opacity duration-[520ms] ease-studio"
            :style="{ opacity: getOverlayOpacity(index) }"
          ></div>
        </div>
      </div>

      <!-- Desktop Side Arrows (placed outside active frame; hidden on mobile to avoid occlusion) -->
      <button
        type="button"
        @click.stop="handlePrevClick"
        class="hidden md:inline-flex items-center justify-center absolute left-2 lg:left-4 z-40 w-10 h-10 rounded-xl bg-surface/90 hover:bg-surface backdrop-blur-md border border-apple-border shadow-surface-md text-ink-secondary hover:text-ink-primary active:scale-[0.97] transition-[background-color,color,border-color,transform] duration-150 ease-studio focus-ring"
        aria-label="上一张界面预览"
      >
        <ChevronLeft class="w-[18px] h-[18px]" :stroke-width="1.75" />
      </button>

      <button
        type="button"
        @click.stop="handleNextClick"
        class="hidden md:inline-flex items-center justify-center absolute right-2 lg:right-4 z-40 w-10 h-10 rounded-xl bg-surface/90 hover:bg-surface backdrop-blur-md border border-apple-border shadow-surface-md text-ink-secondary hover:text-ink-primary active:scale-[0.97] transition-[background-color,color,border-color,transform] duration-150 ease-studio focus-ring"
        aria-label="下一张界面预览"
      >
        <ChevronRight class="w-[18px] h-[18px]" :stroke-width="1.75" />
      </button>
    </div>

    <!-- Bottom Controls & Index Indicator -->
    <div class="mt-4 sm:mt-6 flex flex-col items-center gap-3">
      <div class="flex items-center justify-center gap-2.5">
        <!-- Mobile Prev Arrow -->
        <button
          type="button"
          @click="handlePrevClick"
          class="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-[10px] bg-surface border border-apple-border shadow-surface-xs text-ink-secondary hover:text-ink-primary active:scale-[0.97] transition-[background-color,color,transform] duration-150 ease-studio focus-ring"
          aria-label="上一张界面预览"
        >
          <ChevronLeft class="w-4 h-4" :stroke-width="1.75" />
        </button>

        <!-- Active View Caption Bar -->
        <div class="inline-flex items-center gap-2.5 h-9 px-4 rounded-xl bg-surface border border-apple-border-light shadow-surface-xs text-xs">
          <span class="w-1.5 h-1.5 rounded-full bg-apple-blue flex-shrink-0"></span>
          <div class="relative inline-flex items-center">
            <Transition name="caption-fade">
              <span :key="items[currentIndex].id" class="inline-flex items-center gap-2 whitespace-nowrap">
                <span class="font-medium text-ink-primary">{{ items[currentIndex].title }}</span>
                <span class="text-ink-muted/60">/</span>
                <span class="text-ink-secondary">{{ items[currentIndex].subtitle }}</span>
              </span>
            </Transition>
          </div>
          <span class="font-mono tabular-nums text-ink-muted pl-2 border-l border-apple-border-light whitespace-nowrap">
            {{ formattedIndex }} / {{ formattedTotal }}
          </span>
        </div>

        <!-- Mobile Next Arrow -->
        <button
          type="button"
          @click="handleNextClick"
          class="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-[10px] bg-surface border border-apple-border shadow-surface-xs text-ink-secondary hover:text-ink-primary active:scale-[0.97] transition-[background-color,color,transform] duration-150 ease-studio focus-ring"
          aria-label="下一张界面预览"
        >
          <ChevronRight class="w-4 h-4" :stroke-width="1.75" />
        </button>
      </div>

      <!-- GPU-Composited Segment Indicators (fixed hit target & track width) -->
      <div class="flex items-center gap-1" role="tablist" aria-label="选择客户端界面预览">
        <button
          v-for="(item, idx) in items"
          :key="item.id"
          type="button"
          role="tab"
          :aria-selected="currentIndex === idx"
          :aria-label="`切换到 ${item.title}`"
          @click="handleGoTo(idx)"
          class="h-7 px-1 inline-flex items-center justify-center rounded-md focus-ring group"
        >
          <span class="w-6 h-1 rounded-full bg-black/[0.10] group-hover:bg-black/[0.20] overflow-hidden block transition-colors duration-150 ease-studio">
            <span
              class="block w-full h-full rounded-full bg-apple-blue origin-left transition-transform duration-200 ease-studio"
              :class="currentIndex === idx ? 'scale-x-100' : 'scale-x-0'"
            ></span>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

// 6 张真实客户端截图：Home -> New -> FM -> Artists -> Explore -> Netease
const items = [
  { id: 'home', title: '首页', subtitle: 'Home', src: '/Home.png' },
  { id: 'new', title: '新歌速递', subtitle: 'New Releases', src: '/New.png' },
  { id: 'fm', title: '私人漫游', subtitle: 'Personal FM', src: '/FM.png' },
  { id: 'artists', title: '歌手', subtitle: 'Artists', src: '/Artists.png' },
  { id: 'explore', title: '歌单广场', subtitle: 'Explore', src: '/Explore.png' },
  { id: 'netease', title: '网易歌单', subtitle: 'Netease Playlists', src: '/Netease.png' }
]

const currentIndex = ref(0)
const total = items.length
let autoPlayTimer = null
const isHovered = ref(false)
const isFocused = ref(false)
const prefersReducedMotion = ref(false)

const formattedIndex = computed(() => String(currentIndex.value + 1).padStart(2, '0'))
const formattedTotal = computed(() => String(total).padStart(2, '0'))

const getDiff = (index) => {
  let diff = (index - currentIndex.value) % total
  if (diff > total / 2) diff -= total
  if (diff < -total / 2) diff += total
  return diff
}

const getCardStyle = (index) => {
  const diff = getDiff(index)

  if (diff === 0) {
    return {
      transform: 'translate3d(0, 0, 0px) rotateY(0deg) scale(1)',
      zIndex: 30,
      opacity: 1,
      pointerEvents: 'auto'
    }
  }

  if (diff === 1) {
    return {
      transform: 'translate3d(46%, 0, -140px) rotateY(-22deg) scale(0.86)',
      zIndex: 20,
      opacity: 1,
      pointerEvents: 'auto'
    }
  }

  if (diff === -1) {
    return {
      transform: 'translate3d(-46%, 0, -140px) rotateY(22deg) scale(0.86)',
      zIndex: 20,
      opacity: 1,
      pointerEvents: 'auto'
    }
  }

  if (diff === 2) {
    return {
      transform: 'translate3d(78%, 0, -280px) rotateY(-36deg) scale(0.72)',
      zIndex: 10,
      opacity: 0.72,
      pointerEvents: 'auto'
    }
  }

  if (diff === -2) {
    return {
      transform: 'translate3d(-78%, 0, -280px) rotateY(36deg) scale(0.72)',
      zIndex: 10,
      opacity: 0.72,
      pointerEvents: 'auto'
    }
  }

  return {
    transform: `translate3d(${diff > 0 ? 88 : -88}%, 0, -420px) rotateY(${diff > 0 ? -48 : 48}deg) scale(0.6)`,
    zIndex: 5,
    opacity: 0,
    pointerEvents: 'none'
  }
}

const getOverlayOpacity = (index) => {
  const absDiff = Math.abs(getDiff(index))
  if (absDiff === 0) return 0
  if (absDiff === 1) return 0.28
  return 0.56
}

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % total
}

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + total) % total
}

const handleNextClick = () => {
  next()
  startAutoPlay()
}

const handlePrevClick = () => {
  prev()
  startAutoPlay()
}

const handleGoTo = (index) => {
  currentIndex.value = index
  startAutoPlay()
}

let didDrag = false

const handleCardClick = (index) => {
  if (didDrag) {
    didDrag = false
    return
  }
  const diff = getDiff(index)
  if (diff !== 0) {
    currentIndex.value = index
    startAutoPlay()
  }
}

const startAutoPlay = () => {
  stopAutoPlay()
  if (prefersReducedMotion.value) return
  autoPlayTimer = setInterval(() => {
    if (!isHovered.value && !isFocused.value && !document.hidden) {
      next()
    }
  }, 4200)
}

const stopAutoPlay = () => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer)
    autoPlayTimer = null
  }
}

const handleMouseEnter = () => {
  isHovered.value = true
}

const handleMouseLeave = () => {
  isHovered.value = false
}

const handleFocusIn = () => {
  isFocused.value = true
}

const handleFocusOut = () => {
  isFocused.value = false
}

const handleVisibilityChange = () => {
  if (document.hidden) {
    stopAutoPlay()
  } else {
    startAutoPlay()
  }
}

let startX = 0
let isDragging = false

const startDrag = (e) => {
  isDragging = true
  didDrag = false
  startX = e.clientX
}

const onDrag = (e) => {
  if (!isDragging) return
  if (Math.abs(e.clientX - startX) > 6) {
    didDrag = true
  }
}

const endDrag = (e) => {
  if (!isDragging) return
  isDragging = false
  const deltaX = e.clientX - startX
  if (deltaX > 45) {
    handlePrevClick()
  } else if (deltaX < -45) {
    handleNextClick()
  }
}

const startTouch = (e) => {
  if (e.touches.length > 0) {
    startX = e.touches[0].clientX
    isDragging = true
    didDrag = false
  }
}

const onTouch = (e) => {
  if (!isDragging || e.touches.length === 0) return
  if (Math.abs(e.touches[0].clientX - startX) > 6) {
    didDrag = true
  }
}

const endTouch = (e) => {
  if (!isDragging) return
  isDragging = false
  if (e.changedTouches.length > 0) {
    const deltaX = e.changedTouches[0].clientX - startX
    if (deltaX > 40) {
      handlePrevClick()
    } else if (deltaX < -40) {
      handleNextClick()
    }
  }
}

onMounted(() => {
  prefersReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  document.addEventListener('visibilitychange', handleVisibilityChange)
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
  document.removeEventListener('visibilitychange', handleVisibilityChange)
})
</script>

<style scoped>
.carousel-3d-stage {
  perspective: 1400px;
  transform-style: preserve-3d;
}

@media (max-width: 640px) {
  .carousel-3d-stage {
    perspective: 900px;
  }
}

.caption-fade-enter-active,
.caption-fade-leave-active {
  transition:
    opacity 150ms cubic-bezier(0.22, 1, 0.36, 1),
    transform 150ms cubic-bezier(0.22, 1, 0.36, 1);
}
.caption-fade-leave-active {
  position: absolute;
  left: 0;
}
.caption-fade-enter-from {
  opacity: 0;
  transform: translateY(3px);
}
.caption-fade-leave-to {
  opacity: 0;
  transform: translateY(-3px);
}

@media (prefers-reduced-motion: reduce) {
  .caption-fade-enter-active,
  .caption-fade-leave-active {
    transition-duration: 0.01ms;
  }
}
</style>
