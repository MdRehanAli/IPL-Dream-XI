
import './App.css'
import navImg from './assets/logo.png'

function App() {

  return (
    <>
      <div className="navbar max-w-7xl mx-auto">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <img className='w-[60px] h-[60px]' src={navImg} alt="" />
          </a>
        </div>
        <div className="flex-none">
          <span className='mr-2'>6000000000</span>
          <span>coin</span>
        </div>
      </div>
    </>
  )
}

export default App
