import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RouterTest from '@/components/vtk/RouterTest'
import JspTest from '@/components/vtk/JspTest'
import VolumeOutlineTest from '@/components/vtk/VolumeOutline/VolumeOutlineTest'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'index',
      component: HelloWorld
    },
    {
      path: '/routerTest',
      name: 'routerTest',
      component: RouterTest
    },
    {
      path: '/JspTest',
      name: 'JspTest',
      component: JspTest
    },
    {
      path: '/VolumeOutlineTest',
      name: 'VolumeOutlineTest',
      component: VolumeOutlineTest
    }
  ]
})
