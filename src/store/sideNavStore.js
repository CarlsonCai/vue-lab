import { defineStore } from 'pinia'
import { fetchNavData } from '@/domain'

export const sideNavStore = defineStore({
  id: 'sideNav',
  state: () => ({
    isSidebarExpanded: false,
    navData: []
  }),
  getters: {},
  actions: {
    toggleSidebar() {
      this.isSidebarExpanded = !this.isSidebarExpanded
    },
    getNavData() {
      this.navData = fetchNavData()
    }
  }
})
