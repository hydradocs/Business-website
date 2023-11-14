import { useState } from 'react'
import Home from './pages/Home'
import Footer from './pages/Footer'
import Product from './pages/Product'
import Hero from './Hero'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}
    <Home />
    <Hero/>
    <Product/>
    <Footer/>
    </>
  )
}

export default App
