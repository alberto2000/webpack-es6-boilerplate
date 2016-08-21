import Vue from 'vue'
import App from './App.vue'
import {functions} from './functions.js'

new Vue({
  el: 'body',
  components: {
    app: App
  }
})

functions.initApp()