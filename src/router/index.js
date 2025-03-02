// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import SimilarityOutcome from "@/views/SimilarityOutcome/index.vue";
import SimilarityOutcomeUsual from "@/views/SimilarityOutcomeUsual/index.vue";
import Layout from "@/views/Layout/index.vue";


const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
  },
  {
    path: "/SimilarityOutcome",
    name: "SimilarityOutcome",
    component: SimilarityOutcome,
  },
  {
    path: "/SimilarityOutcomeUsual",
    name: "SimilarityOutcomeUsual",
    component: SimilarityOutcomeUsual,
  },
  /* SimilarityOutcomeUsual */
];
const router = createRouter({
  history: createWebHistory(),
  routes : routes,
});

export default router;
