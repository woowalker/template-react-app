/**
 * 主要布局
 * 可在此处添加常用 header sider content footer 布局
 * 然后将 Routes 作为路由子组件，一般将其放在 content 中
 */
function MainLayout (props) {
  return (
    <div>
      <h2>Main Layout</h2>
      {props.children}
    </div>
  )
}

export default MainLayout