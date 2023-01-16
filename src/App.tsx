import woltLogo from './assets/wolt.png'
import './App.css'

function App() {
  return (
    <div className='flex justify-center items-center min-h-screen bg-slate-700'>
      <h1 className='text-white text-2xl'>Hello,</h1>
      <img src={woltLogo} alt="" className='inline w-14 ml-2'/>
    </div>
  )
}

export default App
