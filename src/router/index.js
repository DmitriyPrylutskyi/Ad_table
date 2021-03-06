import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Ad from '@/components/Ads/Ad'
import ListAd from '@/components/Ads/ListAd'
import NewAd from '@/components/Ads/NewAd'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
import Orders from '@/components/User/Orders'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/ad/:id',
      name: 'Ad',
      props: true,
      component: Ad
    },
    {
      path: '/list',
      name: 'ListAd',
      component: ListAd
    },
    {
      path: '/new',
      name: 'NewAd',
      component: NewAd
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/orders',
      name: 'Orders',
      component: Orders
    }
  ],
  mode: 'history'
})
