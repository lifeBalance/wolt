import woltLogo from './assets/wolt.png'
import './App.css'

// components
import Layout from './components/layout'

function App() {
  return (
    <Layout>
      <div className='flex max-w-6xl mx-auto'>
        <h1 className='text-white text-2xl'>Hello,</h1>
        <img src={woltLogo} alt="" className='inline w-14 ml-2'/>
      </div>
    </Layout>
  )
}

export default App
