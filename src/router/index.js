import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import qzone from '@/components/qzone/'
import login from '@/components/login'
import friends from '@/components/friends'
import user from '@/components/user'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Hello
    },
    {
      path: '/qzone',
      component: qzone
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/friends',
      component: friends
    },
    {
      path: '/user',
      component: user
    }
  ]
})
