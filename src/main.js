import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "_cesium@1.84.0@cesium/Build/Cesium/Widgets/widgets.css";
import * as Cesium from "cesium";
Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmZjFiMWMzMy01YWQ4LTQzMzEtOThmMC1jNDkwMmY1YTg0YTEiLCJpZCI6NjM4MTcsImlhdCI6MTYyODU2MjI5MX0.T1p55HmkVlmyrREXW-klGywV9t6txA-etyAzjhLRS8w";
Vue.config.productionTip = false;
Vue.prototype.Cesium = Cesium;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
