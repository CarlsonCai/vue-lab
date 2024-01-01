<template>
  <div class="menu">
    <div
      v-for="item in items"
      :key="item.key"
      class="menu-item"
      :class="{ 'menu-item': true, selected: item.isExpanded }"
      @click.stop="toggleExpand(item)"
    >
      <span :class="{ 'selected-text': item.isExpanded }">{{ item.text }}</span>
      <Menu v-if="item.children && item.isExpanded" :items="item.children" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
})

const toggleExpand = clickedItem => {
  closeOtherMenus(props.items, clickedItem)
  clickedItem.isExpanded = !clickedItem.isExpanded
}

const closeOtherMenus = (items, clickedItem) => {
  items.forEach(item => {
    if (item !== clickedItem && item.isExpanded) {
      item.isExpanded = false
    }
    if (item.children) {
      closeOtherMenus(item.children, clickedItem)
    }
  })
}
</script>

<style lang="scss" scoped>
.menu {
  color: #ffff;
  margin-top: 10px;
}
.menu-item {
  padding: 15px 15px 15px 25px;
  white-space: nowrap;
  &.selected {
    background-color: gray;
  }
  .selected-text {
    color: yellow;
  }
}
</style>
