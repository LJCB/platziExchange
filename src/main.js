import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import router from "@/router";
import { dollarFilter } from "@/filters";
import { percentFilter } from "@/filters";
import Chartkick from "vue-chartkick";
import Chart from "chart.js";
import { VueSpinners } from "@saeris/vue-spinners";

Vue.config.productionTip = false;

Vue.use(VueSpinners);
Vue.use(Chartkick.use(Chart));

Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
