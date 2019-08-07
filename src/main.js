// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueDisqus from 'vue-disqus'
import '~/assets/style.css'
import 'prismjs/themes/prism.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  Vue.use(VueDisqus)

  router.options.scrollBehavior = function(to, from , savedPosition) {
    if (to.hash) {
        return {
          selector: to.hash
          // , offset: { x: 0, y: 10 }
        }
      }
  }

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:400,700'
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Merriweather:400,700'
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.materialdesignicons.com/3.6.95/css/materialdesignicons.min.css'
  })
}
