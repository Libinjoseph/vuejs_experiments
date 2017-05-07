// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Foo from './components/foo'
import Bar from './components/bar'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(vueResource)
require('vue-strap')

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
	mode:'history',
	base: __dirname,
	routes : [
			  { path: '/', component: Foo },
			  { path: '/bar', component: Bar }
			]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
