import './App.css'
import PriceOptions from './components/PriceOptions'
import Navbar from './components/navbar'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <h1 className='text-5xl text-center text-cyan-600 font-bold '>React Routing</h1>
      <PriceOptions></PriceOptions>
    </>
  )
}

export default App
