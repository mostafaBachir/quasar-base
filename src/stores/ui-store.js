import { defineStore } from 'pinia'

export const use_ui_store = defineStore('ui', {
  state: () => ({
    loading: false,
  }),
  actions: {
    showLoader() {
      this.loading = true
    },
    hideLoader() {
      this.loading = false
    },
    setLoading(val) {
      this.loading = val
    },
  },
})
