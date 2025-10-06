// De aca se borra hasta..
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// acá

import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Novedades from "./Components/Novedades"
import ProximosEventos from "./Components/ProximosEventos"

function App() {
  // const [count, setCount] = useState(0) - Se borra

  return (
    <>
    <Header/>
    <Novedades/>
    <ProximosEventos/>
    <Footer/>

    </>
  )
}

export default App
