import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Topbar from './Topbar/Topbar'
import Navbar from './Navbar/Navbar'
import Carousel from './Carousel/Carousel'
import Card from './Card/Card'
import Campus from './Campus/Campus'
import Footer from './Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Topbar/>
      <Navbar/>
      <Carousel/>
      <Card/>
      <Campus/>
      <Footer/>
    </>
  )
}

export default App
