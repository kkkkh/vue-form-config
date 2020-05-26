import Vue from "vue";
import App from "./App.vue";
// import router from './router'
// import store from './store'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// import './assets/css/reset.css';
// import './assets/css/style.css'
// import '@/directive/btnPermission'
import vueFormConfig from "../packages/index";
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(vueFormConfig);

// Vue.use(has);
new Vue({
  render: h => h(App)
  // router,
  // store,
}).$mount("#app");
