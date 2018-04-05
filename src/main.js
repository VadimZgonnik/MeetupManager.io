// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import * as firebase from 'firebase'
import router from './router'
import {store} from  './store'
import DateFilter from './filters/date'


import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VCarousel,
  VCard,
  VToolbar,
  VTextField,
  VTimePicker,
  VDatePicker,
  VCheckbox,
  transitions
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VCarousel,
    VCard,
    VIcon,
    VGrid,
    VToolbar,
    VTextField,
    VTimePicker,
    VDatePicker,
    VCheckbox,
    transitions
  },
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})

Vue.config.productionTip = false
Vue.filter('date', DateFilter)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created(){
    firebase.initializeApp({
      apiKey: 'AIzaSyCJR4bBxX2RSoVS7vbsOR2mmMyO6to6Nxo',
      authDomain: 'meetup-manager-ed87f.firebaseapp.com',
      databaseURL: 'https://meetup-manager-ed87f.firebaseio.com',
      projectId: 'meetup-manager-ed87f',
      storageBucket: 'meetup-manager-ed87f.appspot.com',
    })
  },
})
