import Vue from 'vue'
import Router from 'vue-router'
import OrderDetail from '@/views/OrderDetail'
import PayByCard from '@/views/PayByCard'
import PayByATM from '@/views/PayByATM'
import PayByShop from '@/views/PayByShop'
import FinishCheckout from '@/views/FinishCheckout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/OrderDetail',
      name: 'OrderDetail',
      component: OrderDetail
    },
    {
      path: '/PayByCard',
      name: 'PayByCard',
      component: PayByCard
    },
    {
      path: '/PayByATM',
      name: 'PayByATM',
      component: PayByATM
    },
    {
      path: '/PayByShop',
      name: 'PayByShop',
      component: PayByShop
    },
    {
      path: '/FinishCheckout',
      name: 'FinishCheckout',
      component: FinishCheckout
    },
    {
      path: '*',
      redirect: '/OrderDetail'
    }
  ]
})
