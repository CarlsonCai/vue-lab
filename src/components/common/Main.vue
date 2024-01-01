<template>
  <div class="main">
    <div class="grid-container">
      <div v-for="item in grid" :key="item.index" class="grid-item">
        <div :class="{ isFlashing: item.isFlashing }" class="flashing-bg"></div>
        <div v-if="item.hasGreenDot" class="dot">0</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const grid = ref([
  { index: 0, hasGreenDot: true, isFlashing: false },
  { index: 1, hasGreenDot: false, isFlashing: false },
  { index: 2, hasGreenDot: true, isFlashing: true },
  { index: 3, hasGreenDot: false, isFlashing: false },
  { index: 4, hasGreenDot: false, isFlashing: true },
  { index: 5, hasGreenDot: false, isFlashing: false },
  { index: 6, hasGreenDot: true, isFlashing: false },
  { index: 7, hasGreenDot: false, isFlashing: false },
  { index: 8, hasGreenDot: true, isFlashing: true }
])
</script>

<style lang="scss">
.main {
  flex: 1;
  width: 100%;
  background-color: #ecf0f1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  gap: 5px;
}

.grid-item {
  position: relative;
}

.flashing-bg {
  height: 100px;
  position: relative;
  border: black solid 2px;
  background: radial-gradient(circle, rgba(113, 81, 95, 1) 81%, rgba(0, 0, 0, 1) 100%);
  &.isFlashing {
    animation: flashing 0.5s infinite;
  }
}

.dot {
  width: 30px;
  height: 30px;
  z-index: 1;
  background-color: #a5f12b;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  text-align: center;
  line-height: 30px;
  animation: moveRight 2s infinite;
}

@keyframes flashing {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}

@keyframes moveRight {
  0% {
    left: 50%;
  }
  100% {
    left: calc(100% + 190%);
  }
}
</style>
