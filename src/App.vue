<template>
  <div class="container">
    <Header />
    <main class="main"></main>
    <SideNav />
  </div>
</template>

<script setup>
const sideNav = sideNavStore()
</script>

<style lang="sass">
.container
  display: flex
  flex-direction: column
  height: 100vh

.main
  flex: 1
  width: 100%
  background-color: #ecf0f1
</style>
