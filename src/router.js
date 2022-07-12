import { createRouter, createWebHistory } from "vue-router";

import Contract from "@/components/sales/Contract.vue"
import Dashboard from "@/components/dashboard/Dashboard.vue"
import DashboardFooter from "@/components/dashboard/DashboardFooter.vue"
import Home from "@/views/Home.vue";
import Indicators from "@/components/services/Indicators.vue";
import Leads from "@/components/sales/Leads.vue"
import Lead from "@/components/sales/Lead.vue"
import Login from "@/views/Login.vue";
import Options from "@/components/services/Options.vue";
import PageNotFound from "@/views/PageNotFound.vue";
import Sales from "@/components/sales/Sales.vue"
import Service from "@/components/services/Service.vue"
import Services from "@/components/services/Services.vue"
import Site from "@/views/Site.vue";
import StandartSales from "@/components/sales/StandartSales.vue"

const routes = [
  {
    path: "/",
    component: Site,
  },
  {
    path: "/home",
    alias: "/app",
    component: Home,
    children: [
      {
        path: "vendas", component: Sales, 
        children: [
          {
            path: "leads",
            component: Leads,
            name: "leads-sales"
          },
          {
            path: "leads/:id",
            props: true,
            component: Lead,
            name: "lead-sales",
            alias: ["/l/:id", "/pessoa/:id", "/:id"]
          },
          {
            path: "contratos",
            component: Contract,
            name: "contract-sales"
          },
          {
            path: "",
            component: StandartSales,
            name: "sales"
          },

        ]
      },
      {
        path: "servicos", component: Services, name: "services", children: [
          {
            path: ":id",
            props: {
              default: true,
              indicators: true,
              options: true
            },
            alias: "/s/:id",
            name: "service",
            components: {
              default: Service,
              options: Options,
              indicators: Indicators,
            }
          }
        ]
      },
      { path: "dashboard", components: { default: Dashboard, footer: DashboardFooter } },
    ]
  },
  {
    path: "/login",
    component: Login,
  },
  { path: "/redirecionamento-1", redirect: "/home/servicos" },
  { path: "/redirecionamento-2", redirect: {name: 'leads-sales'} },
  { path: "/redirecionamento-3", redirect: "/home/vendas" },
  { path: "/redirecionamento-4", redirect: {name: 'sales'} },
  {
    path: "/redirecionamento-5", redirect: () => {
    //Definiar algo antes do direcionamento ser efetivado

      return { name: "sales"}
    }
  },
  
  {path: "/:catchAll(.*)*", component: PageNotFound}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
