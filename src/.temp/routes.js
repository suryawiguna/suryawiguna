export default [
  {
    path: "/portfolio",
    component: () => import(/* webpackChunkName: "page--src-pages-portfolio-vue" */ "D:\\gridsome\\suryawiguna\\src\\pages\\Portfolio.vue")
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "page--src-pages-404-vue" */ "D:\\gridsome\\suryawiguna\\src\\pages\\404.vue")
  },
  {
    path: "/blog",
    component: () => import(/* webpackChunkName: "page--src-pages-blog-vue" */ "D:\\gridsome\\suryawiguna\\src\\pages\\Blog.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/contact",
    component: () => import(/* webpackChunkName: "page--src-pages-contact-vue" */ "D:\\gridsome\\suryawiguna\\src\\pages\\Contact.vue")
  },
  {
    path: "/education",
    component: () => import(/* webpackChunkName: "page--src-pages-education-vue" */ "D:\\gridsome\\suryawiguna\\src\\pages\\Education.vue")
  },
  {
    path: "/experience",
    component: () => import(/* webpackChunkName: "page--src-pages-experience-vue" */ "D:\\gridsome\\suryawiguna\\src\\pages\\Experience.vue")
  },
  {
    path: "/about",
    component: () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "D:\\gridsome\\suryawiguna\\src\\pages\\About.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "D:\\gridsome\\suryawiguna\\src\\pages\\Index.vue")
  },
  {
    path: "/skill",
    component: () => import(/* webpackChunkName: "page--src-pages-skill-vue" */ "D:\\gridsome\\suryawiguna\\src\\pages\\Skill.vue")
  },
  {
    path: "/blog/:slug",
    component: () => import(/* webpackChunkName: "page--src-templates-blog-post-vue" */ "D:\\gridsome\\suryawiguna\\src\\templates\\BlogPost.vue"),
    meta: {
      data: true
    }
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--src-pages-404-vue" */ "D:\\gridsome\\suryawiguna\\src\\pages\\404.vue")
  }
]

