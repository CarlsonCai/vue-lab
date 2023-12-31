<template>
  <!-- v-clickOutside="toggleSidebar" -->
  <div class="sideNav" :class="{ 'sideNav-expanded': true }">
    <Menu :items="navData" />
    <div>{{ isSidebarExpanded }}</div>
  </div>
</template>

<script setup>
const { navData, isSidebarExpanded } = useAsideNav()
</script>

<style lang="scss" scoped>
.sideNav {
  position: fixed;
  height: 100%;
  width: 0;
  z-index: 1;
  top: 0;
  left: 0;
  // background-color: rgba(0, 0, 0, 0.95);
  background-color: red;
  transition: width 0.3s ease;
}
.sideNav-expanded {
  width: 200px;
}
</style>
