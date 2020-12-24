import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Suspense fallback={<h2>加载中...</h2>}>
          <Redirect exact from='/' to='/home' />
          <Route exact path='/home' component={React.lazy(() => import('./App'))} />
          <Route exact path='/about' component={React.lazy(() => import('./About'))} />
        </Suspense>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
