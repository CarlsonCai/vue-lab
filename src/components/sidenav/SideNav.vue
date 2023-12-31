<template>
  <transition name="fade">
    <div v-if="sideNav.isSidebarExpanded" v-clickOutside="sideNav.toggleSidebar" class="sideNav">
      <Menu :items="sideNav.navData" />
    </div>
  </transition>
</template>

<script setup>
const sideNav = sideNavStore()
</script>

<style lang="scss" scoped>
.sideNav {
  position: absolute;
  height: 100%;
  width: 0;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.95);
  width: 200px;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  transform: translateX(50vw);
}
</style>
