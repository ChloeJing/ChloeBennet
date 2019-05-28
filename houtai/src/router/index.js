import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DataBase from '@/components/DataBase'
import zhuce from '@/components/zhuce'
import zhuce_2 from '@/components/zhuce_2'
import zhuce_3 from '@/components/zhuce_3'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/DataBase',
      name: 'DataBase',
      component: DataBase
    },
    {
      path: '/zhuce',
      name: 'zhuce',
      component: zhuce
    },
    {
      path: '/zhuce_2',
      name: 'zhuce_2',
      component: zhuce_2
    },
    {
      path: '/zhuce_3',
      name: 'zhuce_3',
      component: zhuce_3
    }
  ]
})
