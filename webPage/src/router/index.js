import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: "/SP02--website", name: "home", component: () => import("../components/home.vue") },
  { path: "/about", name: "about", component: () => import("../components/about.vue") },

  { path: "/declare/terms", name: "terms", component: () => import("../components/declare/terms.vue") },
  { path: "/declare/privacy", name: "privacy", component: () => import("../components/declare/privacy.vue") },
  { path: "/declare/Copyright", name: "copyright", component: () => import("../components/declare/Copyright.vue") },

  { path: "/product/info", name: "info", component: () => import("../components/product/info.vue") },
  { path: "/product/download", name: "download", component: () => import("../components/product/download.vue") },

  { path: "/pay/buy", name: "buy", component: () => import("../components/pay/buy.vue") },
  { path: "/pay/pay1", name: "pay1", component: () => import("../components/pay/pay1.vue") },
  { path: "/pay/pay2", name: "pay2", component: () => import("../components/pay/pay2.vue") },
  { path: "/pay/pay3", name: "pay3", component: () => import("../components/pay/pay3.vue") },
  { path: "/pay/pay4", name: "pay4", component: () => import("../components/pay/pay4.vue") },
  { path: "/pay/pay5", name: "pay5", component: () => import("../components/pay/pay5.vue") },

  { path: "/services", name: "services", component: () => import("../components/services.vue") }
];

export default createRouter({
  history: createWebHistory(),
  routes,
});