// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/style.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  router.options.scrollBehavior = function(to, from , savedPosition) {
    if (savedPosition) {
      return  savedPosition;
    }
    if (to.hash) {
      return {selector: to.hash};
    }
    if ((from.name == 'skill' && to.name == 'skill') || ((from.name == 'portfolio' && to.name == 'skill'))) {
      return window.scrollHeight
    }
    return {x: 0, y: 0}
  }

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i,900,900i'
  })
}
