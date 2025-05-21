import { use_ui_store } from 'src/stores/ui-store'

export default ({ router }) => {
  const ui = use_ui_store()
  router.beforeEach((to, from, next) => {
    ui.showLoader()
    setTimeout(() => {
      ui.hideLoader()
      next()
    }, 2000)
  })
}
