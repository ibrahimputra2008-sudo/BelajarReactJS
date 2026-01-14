import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let nama ="XI PPLG 1";
  let ucapan ="Selamat pagi bub"

  return (
    <div>
    <h1>Halo {nama}</h1>
    <p>{ucapan}</p>

    <button>Merubah Nama</button>
    <button>Merubah Ucapan</button>

    </div>
  )
}

export default App
