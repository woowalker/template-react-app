import React from 'react'
// 页面
const NoFound = React.lazy(() => import('../modules/deny/404'))
const Home = React.lazy(() => import('../modules/home'))
const About = React.lazy(() => import('../modules/about'))
// 路由
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/404',
    component: NoFound
  }
]

export default routes