import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Booking from '@/components/Booking'
import MainSite from '@/components/MainSite'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/booking',
      name:'booking',
      component: Booking
    },
    {
      path: '/mainSite',
      name: 'mainSite',
      component: MainSite
    }
  ]
})
