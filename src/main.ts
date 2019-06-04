import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import './assets/css/base.scss';  // 引入base.scss

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
