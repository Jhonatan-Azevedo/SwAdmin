import { createRouter, createWebHistory } from "vue-router";

import Contract from "@/components/sales/Contract.vue"
import Home from "@/views/Home.vue";
import Leads from "@/components/sales/Leads.vue"
import Login from "@/views/Login.vue";
import Sales from "@/components/sales/Sales.vue"
import Services from "@/components/services/Services.vue"
import Site from "@/views/Site.vue";

const routes = [
  {
    path: "/",
    component: Site,
  },
  {
    path: "/home",
    component: Home,
    children: [
      {
        path: "vendas",
        component: Sales,
        children: [
          {
            path: "leads",
            component: Leads
          },
          {
            path: "contratos",
            component: Contract
          },

        ]
      },
      {
        path: "servicos",
        component: Services
      }
    ]
  },
  {
    path: "/login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
