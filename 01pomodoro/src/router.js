import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/Analytics',
      name: 'Analytics',
      component: () => import('./views/Analytics')
    },
    {
      path: '/TodoListFolder',
      name: 'TodoListFolder',
      component: () => import('./views/TodoListFolder')
    },
    {
      path: '/Ringtones',
      name: 'Ringtones',
      component: () => import('./views/Ringtones')
    }
  ]
})
