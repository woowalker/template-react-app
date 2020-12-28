import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import history from '@/plugins/history'
import Routes from './routes'

/**
 * 为什么不直接将 Router 集成在 Routes 组件里
 * 是因为我需要在 Routes 组件里拿到 history 实例（react-router-dom 的 useHistory hooks）
 * 并通过 history 监听路由变化
 */
ReactDOM.render(
  <React.StrictMode>
    <Router history={history}><Routes /></Router>
  </React.StrictMode>,
  document.getElementById('root')
)
