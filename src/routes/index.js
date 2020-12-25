import React, { useState, useEffect, Suspense } from 'react'
import {
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation
} from 'react-router-dom'
// 布局
import Layout from '../layout'
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

function Routes () {
  const [history] = useState(useHistory())
  const [pathname, setPathname] = useState(useLocation()['pathname'])
  useEffect(() => {
    const unlisten = history.listen(({ pathname }) => {
      console.log('pathname', pathname)
      setPathname(pathname)
    })
    return unlisten
  }, [history])

  useEffect(() => {
    const paths = routes.map(route => route.path)
    if (paths.indexOf(pathname) === -1) {
      history.replace('/404')
    }
  }, [pathname, history])

  return (
    <Layout pathname={pathname}>
      <Switch>
        <Suspense fallback={<h2>加载中...</h2>}>
          {
            routes.map((route, index) => {
              const { path, redirect, component: RouteComponent } = route
              return (
                <Route
                  key={`${path}-${index}`}
                  exact
                  path={path}
                  render={routeProps => {
                    return redirect ? <Redirect to={redirect} /> : <RouteComponent {...routeProps} />
                  }}
                />
              )
            })
          }
        </Suspense>
      </Switch>
    </Layout>
  )
}

export { routes }
export default Routes