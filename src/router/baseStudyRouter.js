import Vue from 'vue'
import Router from 'vue-router'
import BaseStudyHelloWorld from '@/components/baseStudy/BaseStudyHelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/study',
      name: 'BaseStudyHelloWorld',
      component: BaseStudyHelloWorld
    }
  ]
})
