import MainLayout from './MainLayout'
import EmptyLayout from './EmptyLayout'

function Layout (props) {
  const { pathname } = props
  switch (pathname) {
    case '/404':
      return <EmptyLayout>{props.children}</EmptyLayout>
    default:
      return <MainLayout>{props.children}</MainLayout>
  }
}

export default Layout