<template>
  <div class="header">
    <div class="menu-container">
      <img
        src="@/assets/icon/burger-menu.svg"
        alt="Menu Icon"
        class="icon"
        @click.stop="sideNav.toggleSidebar()"
      />
    </div>
  </div>
</template>

<script setup>
const sideNav = sideNavStore()
</script>

<style lang="sass" scoped>
.header
  display: flex
  align-items: center
  justify-content: end
  padding-right: 10px
  height: 35px
.icon
  width: 20px
  height: 20px
</style>
