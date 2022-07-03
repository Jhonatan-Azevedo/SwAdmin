import { createRouter, createWebHistory } from "vue-router";

import Contract from "@/components/sales/Contract.vue"
import Dashboard from "@/components/dashboard/Dashboard.vue"
import Home from "@/views/Home.vue";
import Leads from "@/components/sales/Leads.vue"
import Lead from "@/components/sales/Lead.vue"
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
      { path: "vendas", component: Sales,
        children: [
          {
            path: "leads",
            component: Leads
          },
          {
            path: "leads/:id",
            component: Lead
          },
          {
            path: "contratos",
            component: Contract
          },

        ]
      },
      { path: "servicos", component: Services },
      { path: "dashboard", component: Dashboard },
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
