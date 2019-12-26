import plugin_gridsome_plugin_pwa_5 from "D:\\gridsome\\suryawiguna\\node_modules\\gridsome-plugin-pwa\\gridsome.client.js"
import plugin_gridsome_plugin_manifest_6 from "D:\\gridsome\\suryawiguna\\node_modules\\gridsome-plugin-manifest\\gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_pwa_5,
    options: {"title":"Surya Wiguna","serviceWorkerPath":"\\service-worker.js","manifestPath":"\\manifest.json","statusBarStyle":"default","themeColor":"#FB8E16"}
  },
  {
    run: plugin_gridsome_plugin_manifest_6,
    options: {"backgroundColor":"#FFFFFF","iconPath":"./src/favicon.png","name":"Surya Wiguna","shortName":"Surya","themeColor":"#FB8E16","display":"browser","fileName":"manifest.json","orientation":"any","scope":"/","startUrl":"/"}
  }
]
