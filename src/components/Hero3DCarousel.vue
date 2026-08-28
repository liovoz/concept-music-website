<template>
  <div 
    class="relative w-full max-w-6xl mx-auto select-none pt-2 pb-6"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <!-- 3D Carousel Stage -->
    <div 
      ref="stageRef"
      class="relative w-full h-[260px] sm:h-[400px] md:h-[520px] lg:h-[580px] flex items-center justify-center carousel-3d-stage cursor-grab active:cursor-grabbing"
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
        class="absolute w-[82%] sm:w-[78%] md:w-[72%] lg:w-[68%] transition-all duration-700 ease-out will-change-transform"
        :style="getCardStyle(index)"
        @click="handleCardClick(index)"
      >
        <!-- Card Frame with Apple Style Soft Shadow & High-end Glow -->
        <div 
          class="relative rounded-2xl overflow-hidden bg-white mockup-shadow transition-transform duration-300"
          :class="{
            'hover:scale-[1.01]': getDiff(index) === 0,
            'cursor-pointer hover:opacity-95': getDiff(index) !== 0
          }"
        >
          <!-- Real Screenshot Image -->
          <img 
            :src="item.src" 
            :alt="item.title"
            class="w-full h-auto object-cover block pointer-events-none select-none"
            draggable="false"
            loading="eager"
          />

          <!-- Ambient Light Reflection Overlay for 3D realism -->
          <div 
            class="absolute inset-0 pointer-events-none transition-opacity duration-500"
            :class="getDiff(index) === 0 ? 'opacity-0' : 'bg-gradient-to-tr from-black/10 via-transparent to-white/10 opacity-100'"
          ></div>
        </div>

        <!-- Ground Floating Shadow underneath Active & Side Cards -->
        <div 
          class="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] h-8 bg-black/10 blur-xl rounded-full pointer-events-none transition-opacity duration-500"
          :style="{ opacity: getDiff(index) === 0 ? 0.35 : Math.abs(getDiff(index)) === 1 ? 0.15 : 0 }"
        ></div>
      </div>

      <!-- Left Arrow Button -->
      <button 
        @click.stop="prev"
        class="absolute left-2 sm:left-4 z-40 p-2.5 sm:p-3 rounded-full bg-white/80 hover:bg-white backdrop-blur-md border border-apple-border shadow-apple-floating text-ink-primary hover:text-apple-blue active:scale-95 transition-all opacity-80 hover:opacity-100"
        aria-label="Previous Slide"
      >
        <ChevronLeft class="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      <!-- Right Arrow Button -->
      <button 
        @click.stop="next"
        class="absolute right-2 sm:right-4 z-40 p-2.5 sm:p-3 rounded-full bg-white/80 hover:bg-white backdrop-blur-md border border-apple-border shadow-apple-floating text-ink-primary hover:text-apple-blue active:scale-95 transition-all opacity-80 hover:opacity-100"
        aria-label="Next Slide"
      >
        <ChevronRight class="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </div>

    <!-- Bottom Navigation & Pill Indicator -->
    <div class="mt-4 sm:mt-6 flex flex-col items-center gap-3">
      <!-- Active Name Pill -->
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-apple-border shadow-apple-subtle text-xs font-medium text-ink-primary transition-all duration-300">
        <span class="w-2 h-2 rounded-full bg-apple-blue animate-pulse"></span>
        <span class="font-semibold">{{ items[currentIndex].title }}</span>
        <span class="text-ink-tertiary">/</span>
        <span class="text-ink-secondary">{{ items[currentIndex].subtitle }}</span>
      </div>

      <!-- Minimalist Dot Indicators -->
      <div class="flex items-center gap-2">
        <button
          v-for="(item, idx) in items"
          :key="item.id"
          @click="goTo(idx)"
          class="h-1.5 rounded-full transition-all duration-300 relative group py-1"
          :class="currentIndex === idx ? 'w-8 bg-apple-blue' : 'w-2 bg-neutral-300 hover:bg-neutral-400 hover:w-3'"
          :aria-label="`Go to slide ${idx + 1}`"
        >
          <span class="sr-only">{{ item.title }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

// 6 张图片严格按用户指定顺序展示：Home -> New -> FM -> Artists -> Explore -> Netease
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

// 计算任意项距离当前中心项的最短环形距离 (-total/2 ~ total/2)
const getDiff = (index) => {
  let diff = (index - currentIndex.value) % total
  if (diff > total / 2) diff -= total
  if (diff < -total / 2) diff += total
  return diff
}

// 核心 3D 变换计算函数
const getCardStyle = (index) => {
  const diff = getDiff(index)

  // 1. 中心卡片 (Active)
  if (diff === 0) {
    return {
      transform: 'translate3d(0, 0, 0px) rotateY(0deg) scale(1)',
      zIndex: 30,
      opacity: 1,
      pointerEvents: 'auto',
      filter: 'none'
    }
  }

  // 2. 右侧紧邻 (+1)
  if (diff === 1) {
    return {
      transform: 'translate3d(48%, 0, -140px) rotateY(-24deg) scale(0.86)',
      zIndex: 20,
      opacity: 0.78,
      pointerEvents: 'auto',
      filter: 'brightness(0.95)'
    }
  }

  // 3. 左侧紧邻 (-1)
  if (diff === -1) {
    return {
      transform: 'translate3d(-48%, 0, -140px) rotateY(24deg) scale(0.86)',
      zIndex: 20,
      opacity: 0.78,
      pointerEvents: 'auto',
      filter: 'brightness(0.95)'
    }
  }

  // 4. 右侧第二张 (+2)
  if (diff === 2) {
    return {
      transform: 'translate3d(82%, 0, -280px) rotateY(-38deg) scale(0.72)',
      zIndex: 10,
      opacity: 0.28,
      pointerEvents: 'auto',
      filter: 'brightness(0.85)'
    }
  }

  // 5. 左侧第二张 (-2)
  if (diff === -2) {
    return {
      transform: 'translate3d(-82%, 0, -280px) rotateY(38deg) scale(0.72)',
      zIndex: 10,
      opacity: 0.28,
      pointerEvents: 'auto',
      filter: 'brightness(0.85)'
    }
  }

  // 6. 背部或远端隐藏卡片 (±3)
  return {
    transform: `translate3d(${diff > 0 ? 90 : -90}%, 0, -420px) rotateY(${diff > 0 ? -50 : 50}deg) scale(0.6)`,
    zIndex: 5,
    opacity: 0,
    pointerEvents: 'none',
    filter: 'brightness(0.7)'
  }
}

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % total
}

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + total) % total
}

const goTo = (index) => {
  currentIndex.value = index
}

const handleCardClick = (index) => {
  const diff = getDiff(index)
  if (diff !== 0) {
    currentIndex.value = index
  }
}

// 自动轮播控制
const startAutoPlay = () => {
  stopAutoPlay()
  autoPlayTimer = setInterval(() => {
    if (!isHovered.value) {
      next()
    }
  }, 3800)
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

// 拖拽与滑动手势支持
let startX = 0
let isDragging = false

const startDrag = (e) => {
  isDragging = true
  startX = e.clientX
}

const onDrag = (e) => {
  if (!isDragging) return
}

const endDrag = (e) => {
  if (!isDragging) return
  isDragging = false
  const deltaX = e.clientX - startX
  if (deltaX > 45) {
    prev()
  } else if (deltaX < -45) {
    next()
  }
}

const startTouch = (e) => {
  if (e.touches.length > 0) {
    startX = e.touches[0].clientX
    isDragging = true
  }
}

const onTouch = (e) => {
  // passive
}

const endTouch = (e) => {
  if (!isDragging) return
  isDragging = false
  if (e.changedTouches.length > 0) {
    const deltaX = e.changedTouches[0].clientX - startX
    if (deltaX > 40) {
      prev()
    } else if (deltaX < -40) {
      next()
    }
  }
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
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
</style>
