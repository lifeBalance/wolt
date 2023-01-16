import woltLogo from '../assets/wolt.png'
import { CalculatorIcon} from '@heroicons/react/24/outline'

function Header() {
  return (
    <header className="bg-slate-800 p-3">
      <div className='flex max-w-6xl md:justify-between mx-auto'>
        <img src={woltLogo} alt="Wolt logo" className='w-14 ml-2 hidden md:inline'/>
        <p className='text-white text-xl flex space-x-1 md:justify-right'>
          <span>Delivery Fee Calculator</span>
          <CalculatorIcon className='inline w-6 text-white'/>
        </p>
      </div>
    </header>
  )
}
export default Header