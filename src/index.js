import 'semantic/semantic.min.css'

import 'scss/index.scss'

import Vue from 'vue'
import Store from 'js/Store.js'
import App from 'view/App.vue'

new Vue({
  el: '#app',
  store: Store,
  render: h => h(App),
})
