import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import SvgIcon from '@/components/SvgIcon';
import BootstrapVue from 'bootstrap-vue';

Vue.config.productionTip = false;
Vue.component('svg-icon', SvgIcon);
Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
