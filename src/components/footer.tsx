import woltLogo from '../assets/wolt.png'

function Footer() {
  return (
    <footer className='bg-slate-800 p-3 mt-auto'>
      <div className='flex max-w-6xl justify-between mx-auto'>
        <p className='text-white'>
          <span>by</span>
          <a
            href='https://github.com/lifeBalance'
            className='text-cyan-400 hover:underline px-2'
          >
            lifeBalance
          </a>
          <span>&copy;{new Date().getFullYear()}</span>
        </p>
        <img
          src={woltLogo}
          alt='Wolt logo'
          className='inline w-14 ml-2'
        />
      </div>
    </footer>
  )
}
export default Footer
