import Vue from "vue";
import App from "./App.vue";
import FullCalendar from "vue-full-calendar";
import Bootstrap from "bootstrap-vue";

import "fullcalendar/dist/fullcalendar.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(FullCalendar);
Vue.use(Bootstrap);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");
