
import { Suspense, useState } from 'react'
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import { ToastContainer} from 'react-toastify';

import Navbar from './components/Navbar/Navbar'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'

const fetchPlayers = async () => {
  const res = await fetch('/players.json')
  return res.json()
}

const playerPromise = fetchPlayers()
function App() {
  const [toggle, setToggle] = useState(true)

  const [availableBalance, setAvailableBalance] = useState(60000000)

  const [purchasePlayers, setPurchasePlayers] = useState([])

  const removePlayer = (p) => {
    const filteredData = purchasePlayers.filter(ply => ply.id !== p.id)
    // console.log(filteredData);
    setPurchasePlayers(filteredData)

    setAvailableBalance(availableBalance + parseInt(p.price))
  }


  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>

      <div className="max-w-7xl mx-auto flex justify-between items-center my-5">
        <h1 className='text-2xl font-bold'>{toggle ? "Available Players" : `Selected Players (${purchasePlayers.length}/6)`}</h1>

        <div>
          <button onClick={() => setToggle(true)} className={`font-bold py-3 px-4 border-1 border-gray-400 rounded-l-2xl border-r-0 ${toggle === true ? "bg-[#E7FE29]" : ""}`}>Available</button>
          <button onClick={() => setToggle(false)} className={`font-bold py-3 px-4 border-1 border-gray-400 rounded-r-2xl border-l-0 ${toggle === false ? "bg-[#E7FE29]" : ""}`}>Selected <span>{purchasePlayers.length}</span> </button>
        </div>
      </div>

      {
        toggle === true ? <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
          <AvailablePlayers purchasePlayers={purchasePlayers} setPurchasePlayers={setPurchasePlayers} playerPromise={playerPromise} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance}></AvailablePlayers>
        </Suspense>
          : <SelectedPlayers removePlayer={removePlayer} purchasePlayers={purchasePlayers}></SelectedPlayers>
      }

      <ToastContainer/>
    </>
  )
}

export default App
