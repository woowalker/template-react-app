/**
 * 空布局
 * 可在此处添加常用常见空布局
 * 然后将 Routes 作为路由子组件
 */
function EmptyLayout (props) {
  return (
    <div>
      <h2>Empty Layout</h2>
      {props.children}
    </div>
  )
}

export default EmptyLayout