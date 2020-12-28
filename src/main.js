import React, { useState, useEffect, Suspense } from 'react'
import {
  Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
// history
import history from '@/plugins/history'
// 布局
import Layout from '@/layout'
// 路由
import routes from '@/routes'

function Main () {
  const [pathname, setPathname] = useState(history.location.pathname)
  useEffect(() => {
    const unlisten = history.listen(({ pathname }) => {
      console.log('pathname', pathname)
      setPathname(pathname)
    })
    return unlisten
  }, [])

  useEffect(() => {
    const paths = routes.map(route => route.path)
    if (paths.indexOf(pathname) === -1) {
      history.replace('/404')
    }
  }, [pathname])

  return (
    <Layout pathname={pathname}>
      <Router history={history}>
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
      </Router>
    </Layout>
  )
}

export default Main