import Header from './header'
import Footer from './footer'

type Props = {
  children: JSX.Element
}

function Layout(props: Props) {
  return (
    <div className='flex flex-col min-h-screen bg-slate-700'>
      <Header />

      {props.children}

      <Footer />
    </div>
  )
}
export default Layout
