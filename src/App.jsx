// De aca se borra hasta..
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// acá

import Efemerides from "./Components/Efemerides"
import Footer from "./Components/Footer"
import Galeria from "./Components/Galeria"
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Novedades from "./Components/Novedades"
import ProximosEventos from "./Components/ProximosEventos"

function App() {
  // const [count, setCount] = useState(0) - Se borra

  return (
    <>
    <Header/>
    <Hero/>
    <Novedades/>
    <ProximosEventos/>
    <Efemerides/>
    <Galeria/>
    <Footer/>

    </>
  )
}

export default App
