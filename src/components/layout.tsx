type Props = {
  children: JSX.Element
}

function Layout(props: Props) {
  return (
    <div className='flex justify-center items-center min-h-screen bg-slate-700'>
      {props.children}
    </div>
  )
}
export default Layout
