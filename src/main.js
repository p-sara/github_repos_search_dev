import Vue from 'vue';
import axiosInstance from '@/http/axios';
import App from './App.vue';
require('@/assets/main.scss');

Vue.config.productionTip = false;
Vue.prototype.$http = axiosInstance;

new Vue({
  render: h => h(App),
}).$mount('#app')
