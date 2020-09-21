import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Uploads",
    meta: { layout: "main", requiresAuth: true },
    component: () => import("../views/Uploads.vue"),
  },
  {
    path: "/cashe",
    name: "Cash",
    meta: { layout: "main", requiresAuth: true },
    component: () => import("../views/Cash.vue"),
  },
  {
    path: "/reports",
    name: "Reports",
    meta: { layout: "main", requiresAuth: true },
    component: () => import("../views/Reports.vue"),
  },
  {
    path: "/auths",
    name: "Auths",
    meta: { layout: "auth" },
    component: () => import("../views/Auths.vue"),
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    
    if(localStorage.getItem("userData") === null) {
      next({
        path: '/auths'
      })
    } else {
      next()  
    }
  } else {
    next() 
  }
})

export default router;
