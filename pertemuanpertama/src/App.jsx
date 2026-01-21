import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Greeting() {
  return (
    <>
      <h1>Selamat Datang</h1>
      <p className="halo">COSMIC INTERFACE · REACT SYSTEM</p>
    </>
  )
}

function Biodata({ nama, kelas, nisn }) {
  return (
    <div className="biodata">
      <p><span>Nama</span> {nama}</p>
      <p><span>Kelas</span> {kelas}</p>
      <p><span>NISN</span> {nisn}</p>
    </div>
  )
}


function App() {
  return (
    <div className="container">
      <Greeting />
      <Biodata nama="Baim" kelas="XI PPLG 1" nisn="12345678" />
      <Biodata nama="Putra" kelas="XI PPLG 2" nisn="123456789" />
    </div>
  )
}



export default App
