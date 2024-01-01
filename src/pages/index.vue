<template>
  <div class="container">
    <Header />
    <Main />
    <SideNav />
  </div>
</template>

<script setup>
const sideNav = sideNavStore()
onMounted(() => {
  sideNav.getNavData()
})
</script>

<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}
</style>
