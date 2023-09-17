import './App.css'
import PriceOptions from './components/PriceOptions'
import ReChart from './components/ReChart'
import Navbar from './components/navbar'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <h1 className='text-5xl text-center text-cyan-600 font-bold '>React Routing</h1>
      <PriceOptions></PriceOptions>
      <ReChart></ReChart>
    </>
  )
}

export default App
