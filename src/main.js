import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import gsap from './plugins/gsap';
import VueMq from './plugins/vuemq'

Vue.config.productionTip = false

new Vue({
  vuetify,
  gsap,
  VueMq,
  render: h => h(App),
}).$mount('#app')
