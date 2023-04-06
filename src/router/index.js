import { Auth } from '@/services'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/SignIn',
    name: 'SignIn',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "SignIn" */ '../views/SignIn.vue')
  },
  {
    path: '/MainPage',
    name: 'MainPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "MainPage" */ '../views/MainPage.vue')
  },
  {
    path: '/PortScan',
    name: 'PortScan',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "PortScan" */ '../views/PortScan.vue')
  },
  {
    path: '/DnsLookup',
    name: 'DnsLookup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "DnsLookup" */ '../views/DnsLookup.vue')
  },
  {
    path: '/WpAdminUsers',
    name: 'WpAdminUsers',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "WpAdminUsers" */ '../views/WpAdminUsers.vue')
  },
  {
    path: '/DirScan',
    name: 'DirScan',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Dir" */ '../views/DirScan.vue')
  },
  {
    path: '/SubDomain',
    name: 'SubDomain',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "SubDomain" */ '../views/SubDomain.vue')
  },
  {
    path: '/WebsVulns',
    name: 'WebsVulns',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "SubDomain" */ '../views/WebsVulns.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next)=>{
  const publicPages=["/", "/SignIn", "/MainPage", "/PortScan","/DnsLookup"];
  const loginPage= !publicPages.includes(to.path); 
  const  user = Auth.getUser();
  if(loginPage && !user){
     next('/SignIn');
     return

  }


  next();
})

export default router
