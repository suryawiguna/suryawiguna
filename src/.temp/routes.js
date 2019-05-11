export default [
  {
    name: "skill",
    path: "/skill",
    component: () => import(/* webpackChunkName: "component--skill" */ "D:\\gridsome\\suryawiguna\\src\\pages\\Skill.vue"),
    meta: { isStatic: true }
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "component--home" */ "D:\\gridsome\\suryawiguna\\src\\pages\\Index.vue"),
    meta: { isStatic: true }
  },
  {
    name: "portfolio",
    path: "/portfolio",
    component: () => import(/* webpackChunkName: "component--portfolio" */ "D:\\gridsome\\suryawiguna\\src\\pages\\Portfolio.vue"),
    meta: { isStatic: true }
  },
  {
    name: "about",
    path: "/about",
    component: () => import(/* webpackChunkName: "component--about" */ "D:\\gridsome\\suryawiguna\\src\\pages\\About.vue"),
    meta: { isStatic: true }
  },
  {
    name: "contact",
    path: "/contact",
    component: () => import(/* webpackChunkName: "component--contact" */ "D:\\gridsome\\suryawiguna\\src\\pages\\Contact.vue"),
    meta: { isStatic: true }
  },
  {
    name: "education",
    path: "/education",
    component: () => import(/* webpackChunkName: "component--education" */ "D:\\gridsome\\suryawiguna\\src\\pages\\Education.vue"),
    meta: { isStatic: true }
  },
  {
    name: "experience",
    path: "/experience",
    component: () => import(/* webpackChunkName: "component--experience" */ "D:\\gridsome\\suryawiguna\\src\\pages\\Experience.vue"),
    meta: { isStatic: true }
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "component--404" */ "D:\\gridsome\\suryawiguna\\node_modules\\gridsome\\app\\pages\\404.vue"),
    meta: { isStatic: true, isIndex: false }
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "component--404" */ "D:\\gridsome\\suryawiguna\\node_modules\\gridsome\\app\\pages\\404.vue"),
    meta: { isStatic: true, isIndex: false }
  }
]

